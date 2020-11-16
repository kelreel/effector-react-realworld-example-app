import React, { forwardRef } from 'react';
import './index.css';

type Props = Readonly<React.FormHTMLAttributes<HTMLFormElement>>;

export const Form = forwardRef<HTMLFormElement, Props>(
  ({ className = '', children, ...props }, ref) => (
    <form {...props} className={`my-form ${className}`} ref={ref}>
      <fieldset>{children}</fieldset>
    </form>
  ),
);
