import React, { ChangeEvent } from 'react';
import '../styles/InputGroup.scss';

import InputAnnotation from './InputAnnotation';
import { InputLabel } from './InputLabel';
import { InputText } from './InputText';

interface InputGroupProps {
  label: string;
  inputId: string;
  annotation?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: boolean;
  id?: string | undefined;
}

const InputGroup: React.FC<InputGroupProps> = ({
  label,
  inputId,
  annotation,
  value,
  onChange,
  placeholder,
  error,
  id,
}) => {
  return (
    <div className="input-group">
      <InputLabel
        htmlFor={inputId}
        label={label}
      />
      <InputText
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        error={error}
        id={id}
      />
      {annotation && (
        <InputAnnotation
          text={annotation}
          error={error}
        />
      )}
    </div>
  );
};

export default InputGroup;
