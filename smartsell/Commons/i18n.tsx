import i18next, {i18n} from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './locales/en';
import ar from './locales/ar';

export interface Translation {
  initTranslation(): i18n;
  switchLanguage(languageCode: string): void;
}

function initTranslation() {
  i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: 'ar',
    fallbackLng: 'ar',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    saveMissing: false,
    resources: {
      en: {
        translation: en,
      },
      ar: {
        translation: ar,
      },
    },
  });
  return i18next;
}
function switchLanguage(languageCode: string) {
    i18next.changeLanguage(languageCode);
}
const translation: Translation = {
  initTranslation,
  switchLanguage,
};

export default translation;
