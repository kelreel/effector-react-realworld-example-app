import { sample } from 'effector';
import {
  FormGate,
  form,
  $authUser,
  $errors,
  formSubmitted,
  changeUserDataFx,
} from '.';
import { loggedOutClicked } from '../../../features/user';
import * as router from '../../../library/router';

formSubmitted.watch((e) => e.preventDefault());

// set data form user store
sample({
  source: $authUser,
  clock: FormGate.open,
  target: form.set,
});

// submit form
sample({
  source: form.$values,
  clock: formSubmitted,
  target: changeUserDataFx,
});

changeUserDataFx.done.watch(() => {
  window.location.reload();
});

loggedOutClicked.watch(() => {
  router.model.history.push('/');
});

$errors
  .on(changeUserDataFx.failData, (_, error) => error.response?.data)
  .reset(form.$values, FormGate.close);
