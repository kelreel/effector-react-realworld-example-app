import React from 'react';
import { useForm } from 'react-hook-form';
import { useStore } from 'effector-react';
import { Form as UIForm, Textarea } from 'ui';
import * as model from '../model';
import { FormFooter } from './form-footer';

type FormData = {
  comment: string;
};

const defaultValues = {
  comment: '',
};

export const Form: React.FC = () => {
  const slug = useStore(model.$slug);
  const { handleSubmit, register, reset } = useForm({
    defaultValues,
  });

  const onSubmit = (data: FormData) => {
    model.fetchCommentFx({ slug, body: data.comment });
    reset(defaultValues);
  };

  return (
    <UIForm className="card comment-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="card-block">
        <Textarea
          name="comment"
          placeholder="Write a comment..."
          ref={register}
          rows={3}
        />
      </div>
      <FormFooter />
    </UIForm>
  );
};
