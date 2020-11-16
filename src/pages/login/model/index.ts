import { createEvent, createEffect, createStore } from 'effector-root';
import { createGate } from 'effector-react';
import { AxiosError } from 'axios';
import { api } from 'api';
import * as user from 'shared-modules/user';
import { Form, Errors } from './types';

export const formSubmitted = createEvent<React.FormEvent>();
formSubmitted.watch((e) => e.preventDefault());

export const signInFx = createEffect<Form, user.types.User, AxiosError>(
  ({ email, password }) =>
    api
      .post('users/login', {
        user: { email, password },
      })
      .then(({ data }) => data.user),
);

export const FormGate = createGate();

user.model.$user.on(signInFx.doneData, (_, payload) => payload);

export const $error = createStore<Errors>({
  errors: {},
})
  .on(signInFx.failData, (_, error) => error.response?.data)
  .reset(signInFx, FormGate.close);
