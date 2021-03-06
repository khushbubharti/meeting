


import React, { useState, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const context = React.createContext({
  errorMessage: '',
  updateErrorMessage: (_: string) => {}
});

export function getErrorContext() {
  return context;
}

export default function ErrorProvider({ children }: Props) {
  const [errorMessage, setErrorMesage] = useState('');
  const ErrorContext = getErrorContext();

  const updateErrorMessage = (message: string): void => {
    setErrorMesage(message);
  };

  const providerValue = {
    errorMessage,
    updateErrorMessage
  };
  return (
    <ErrorContext.Provider value={providerValue}>
      {children}
    </ErrorContext.Provider>
  );
}
