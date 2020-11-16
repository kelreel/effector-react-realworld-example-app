import { createEffect, createStore } from 'effector-root';
import { createGate } from 'effector-react';
import { AxiosError } from 'axios';
import { api } from 'api';
import * as user from 'shared-modules/user';
import { Form, Errors } from './types';

export const signUpFx = createEffect<Form, user.types.User, AxiosError>(
  ({ username, email, password }) =>
    api
      .post('users', {
        user: { email, password, username },
      })
      .then(({ data }) => data.user),
);

export const FormGate = createGate();
user.model.$user.on(signUpFx.doneData, (_, payload) => payload);

export const $error = createStore<Errors>({
  errors: {},
})
  .on(signUpFx.failData, (_, error) => error.response?.data)
  .reset(signUpFx, FormGate.close);
