## React Localization

### How to install

Docs Link : [localization](https://formatjs.io/docs/getting-started/installation)

```
// npm
npm i -S react react-intl

// yarn
yarn add react react-intl
```

### Example Usage

```
import * as React from 'react'
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'

// Translated messages in French with matching IDs to what you declared
const messagesInFrench = {
  myMessage: "Aujourd'hui, c'est le {ts, date, ::yyyyMMdd}",
}

export default function App() {
  return (
    <IntlProvider messages={messagesInFrench} locale="fr" defaultLocale="en">
      <p>
        <FormattedMessage
          id="myMessage"
          defaultMessage="Today is {ts, date, ::yyyyMMdd}"
          values={{ts: Date.now()}}
        />
        <br />
        <FormattedNumber value={19} style="currency" currency="EUR" />
      </p>
    </IntlProvider>
  )
}
```

**ANAHTAR NOT:** Çok fazla dil seçeneği bulunan sitelerde idüzerinden her dil için ayrı bir tanım yapmak büyük kolaylıklar sağlayacaktır. Yada benzer durumlarda kullanım kolaylığı sağlamaktadır.
