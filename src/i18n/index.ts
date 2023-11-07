import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './translation/en.json'
import pl from './translation/pl.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en,
      pl
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: ['en', 'pl'],

    debug: true,
    
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default i18n;