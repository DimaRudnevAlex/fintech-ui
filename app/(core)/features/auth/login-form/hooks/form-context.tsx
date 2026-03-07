'use client';

import { createContext, RefObject, use, useRef } from 'react';

import { WithChildren } from '@/(shared)/types/general';

type FormMethods = {
  reset: () => void;
  validate: () => Promise<boolean>;
  submit: () => void;
};

export const FormContext = createContext<RefObject<FormMethods> | null>(null);

export const FormProvider: React.FC<WithChildren> = ({ children }) => {
  return (
    <FormContext.Provider
      value={useRef<FormMethods>({
        reset: () => {},
        submit: () => {},
        validate: () => Promise.resolve(false),
      })}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useForm = (): FormMethods => {
  const methodsRef = use(FormContext);
  if (!methodsRef) {
    throw new Error('ERROR');
  }

  return {
    reset: () => methodsRef.current.reset(),
    validate: () => methodsRef.current.validate(),
    submit: () => methodsRef.current.submit(),
  };
};
