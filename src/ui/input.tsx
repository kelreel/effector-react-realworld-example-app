import React, { forwardRef } from 'react';

export type InputProps = Readonly<React.InputHTMLAttributes<HTMLInputElement>>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', className = '', ...props }, ref) => (
    <input
      className={`form-control ${className}`}
      type={type}
      {...props}
      ref={ref}
    />
  ),
);
