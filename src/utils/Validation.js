import { useState, useCallback } from "react";

export const Validation = () => {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const onChange = useCallback((evt) => {
    setValue(evt.target.value);
    setErrorMessage(evt.target.validationMessage);
  }, []);
  return { value, errorMessage, setErrorMessage, setValue, onChange };
};