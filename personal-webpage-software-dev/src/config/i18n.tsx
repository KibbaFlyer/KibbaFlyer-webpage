import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';

const options = {
    order: ['navigator', 'localStorage'],
};

// Translation files
import en from '../locales/en.json'
import de from '../locales/de.json'
import sv from '../locales/sv.json'

i18n
    .use(XHR)
    .use(initReactI18next) // Passes i18n down to react-i18next.
    .use(LanguageDetector)
    .init({
        resources: {
            en,
            de,
            sv
        },
        supportedLngs: ['de', 'en', 'sv'],
        fallbackLng: "en",
        detection: options,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;