import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useGate, useStore } from 'effector-react';
import { Form as UIForm, InputField, TextField } from 'ui';
import * as model from '../model';
import { SubmitButton } from './submit-button';

export const Form: React.FC = () => {
  useGate(model.FormGate);
  const user = useStore(model.$user);
  const { handleSubmit, control, reset } = useForm({
    defaultValues: user,
  });

  useEffect(() => {
    reset(user);
  }, [user, reset]);

  return (
    <UIForm
      onSubmit={handleSubmit((data) => {
        model.changeUserDataFx(data);
      })}>
      <Controller
        as={InputField}
        control={control}
        name="image"
        placeholder="URL of profile picture"
      />
      <Controller
        as={InputField}
        className="form-control-lg"
        control={control}
        name="username"
        placeholder="Username"
      />
      <Controller
        as={TextField}
        className="form-control-lg"
        control={control}
        name="bio"
        placeholder="Short bio about you"
        rows={8}
      />
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
        placeholder="New Password"
        type="password"
      />
      <SubmitButton />
    </UIForm>
  );
};
