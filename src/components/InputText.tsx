import React, { ChangeEvent } from 'react';
import '../styles/InputText.scss';

export interface InputTextProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  id?:string | undefined;
}

export const InputText: React.FC<InputTextProps> = ({
  value,
  onChange,
  placeholder,
  disabled,
  error,
  id,
}) => {
  return (
    <input
      id={id}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`input-text ${error ? 'input-text--error' : ''}`}
    />
  );
};
