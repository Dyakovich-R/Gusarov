import React from 'react';

import '../styles/InputAnnotation.scss';

interface InputAnnotationProps {
  text: string;
  error?: boolean;
}

const InputAnnotation: React.FC<InputAnnotationProps> = ({ text, error }) => {
  return (
    <small className={`input-annotation ${error ? 'annotation-error' : ''}`}>
      {text}
    </small>
  );
};

export default InputAnnotation;
