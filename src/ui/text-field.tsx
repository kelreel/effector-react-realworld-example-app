import React, { forwardRef } from 'react';
import { FormGroup } from './form-group';
import { Textarea, TextareaProps } from './textarea';

export const TextField = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => (
    <FormGroup>
      <Textarea {...props} ref={ref} />
    </FormGroup>
  ),
);
