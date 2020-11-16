import React, { forwardRef } from 'react';
import { FormGroup } from './form-group';
import { Input, InputProps } from './input';

export const InputField: React.FC<InputProps> = forwardRef<
  HTMLInputElement,
  InputProps
>((props, ref) => (
  <FormGroup>
    <Input {...props} ref={ref} />
  </FormGroup>
));
