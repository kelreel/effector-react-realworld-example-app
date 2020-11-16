import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useGate } from 'effector-react';
import { Form as UIForm, InputField } from 'ui';
import * as model from '../model';
import { SubmitButton } from './submit-button';

const defaultValues = {
  email: '',
  password: '',
};

export const Form: React.FC = () => {
  useGate(model.FormGate);
  const { control, handleSubmit, reset } = useForm({
    defaultValues,
  });

  return (
    <UIForm
      onSubmit={handleSubmit((data) => {
        model.signInFx(data);
        reset(defaultValues);
      })}>
      <Controller
        as={InputField}
        className="form-control-lg"
        control={control}
        name="email"
        placeholder="Email"
        type="email"
      />
      <Controller
        as={InputField}
        autoComplete="current-password"
        className="form-control-lg"
        control={control}
        name="password"
        placeholder="Password"
        type="password"
      />
      <SubmitButton />
    </UIForm>
  );
};
