import { useState, useEffect } from "react";
import "./App.css";
import { IntlProvider, FormattedMessage } from "react-intl";

const messages = {
  "tr-TR": {
    title: "Merhaba Dünya",
    description: "{count} yeni mesajınız var",
  },
  "en-EN": {
    title: "Hello World",
    description: "you have {count} new messages",
  },
};
function App() {
  const isLocale = localStorage.getItem("locale");
  const defaultLocale = isLocale ? isLocale : navigator.language;

  const [locale, setLocale] = useState(defaultLocale);
  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  return (
    <div className="App">
      <br />
      <IntlProvider locale={locale} messages={messages[locale]}>
        <FormattedMessage id="title" />

        <p>
          <FormattedMessage id="description" values={{ count: 5 }} />
        </p>
        <br />
        <br />
        <button onClick={() => setLocale("tr-TR")}>TR</button>
        <button onClick={() => setLocale("en-EN")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
