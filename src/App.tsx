import { useState } from 'react';
import './App.scss';
import InputAnnotation from './components/InputAnnotation';
import InputGroup from './components/InputGroup';

export const App = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <InputGroup
        label="Username"
        inputId="username"
        annotation="Enter your username"
        placeholder="Enter username..."
        value={inputValue}
        onChange={handleInputChange}
        error={false}

      />
      <InputAnnotation
        text="This is an annotation."
        error={false}
      />
    </>
  );
};
