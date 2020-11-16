import { createEvent, createEffect, createStore } from 'effector-root';
import { createGate } from 'effector-react';
import { AxiosResponse, AxiosError } from 'axios';
import { api } from 'api';
import * as router from 'library/router';
import * as user from 'shared-modules/user';
import { Errors, changeUserDataFxArgs } from './types';

export const formSubmitted = createEvent<React.FormEvent>();
formSubmitted.watch((e) => e.preventDefault());

export const changeUserDataFx = createEffect<
  changeUserDataFxArgs,
  AxiosResponse<void>,
  AxiosError
>((payload) =>
  api.put('user', {
    user: payload,
  }),
);

export const FormGate = createGate();
export const $user = user.model.$user.map((x) => ({
  image: x.image,
  username: x.username,
  bio: x.bio,
  email: x.email,
  password: '',
}));

changeUserDataFx.done.watch(() => {
  window.location.reload();
});

user.model.loggedOutClicked.watch(() => {
  router.model.history.push('/');
});

export const $error = createStore<Errors>({
  errors: {},
})
  .on(changeUserDataFx.failData, (_, error) => error.response?.data)
  .reset(changeUserDataFx, FormGate.close);
