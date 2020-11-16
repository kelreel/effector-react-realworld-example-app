import React, { forwardRef } from 'react';

export type TextareaProps = Readonly<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', ...props }, ref) => (
    <textarea className={`form-control ${className}`} {...props} ref={ref} />
  ),
);
