import React from 'react';
import Page from './components/base/Page';
import { IntlProvider } from 'react-intl';
import enUSMessages from './i18n/en-US.json';
import ptBRMessages from './i18n/pt-BR.json';
import { LocaleContext } from './contexts/LocaleContext';
import 'animate.css';
import './styles/app.css';

const messages = {
  'pt-BR': ptBRMessages,
  'en-US': enUSMessages,
};

function App() {
  return (
    <div className="App">
      <LocaleContext.Consumer>
        {(localeConfig) => (
          <IntlProvider
            locale={localeConfig.locale}
            messages={messages[localeConfig.locale]}
          >
            <Page />
          </IntlProvider>
        )}
      </LocaleContext.Consumer>
    </div>
  );
}

export default App;
