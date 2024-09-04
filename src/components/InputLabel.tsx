// InputLabel.tsx
import React from 'react';
import '../styles/InputLabel.scss';

export interface InputLabelProps {
  htmlFor: string;
  label: string;
  required?: boolean;
}

export const InputLabel: React.FC<InputLabelProps> = ({
  htmlFor,
  label,
  required,
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className="input-label"
    >
      {label}
      {required && <span className="input-label__required">*</span>}
    </label>
  );
};

