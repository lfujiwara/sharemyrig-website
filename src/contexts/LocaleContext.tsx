import React, { useState } from 'react';

interface ILocaleContext {
  locale: string;
  setLocale: React.Dispatch<React.SetStateAction<string>>;
}

export const LocaleContext = React.createContext<ILocaleContext>({
  locale: navigator.language,
  setLocale: () => null,
});

export const LocaleContextProvider = (props: React.ProviderProps<string>) => {
  const [locale, setLocale] = useState(navigator.language);
  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {props.children || <></>}
    </LocaleContext.Provider>
  );
};
