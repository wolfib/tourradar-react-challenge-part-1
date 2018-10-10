import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';

i18n.use(reactI18nextModule).init({
  resources: {
    en: {
      translation: {
        'starts in': 'Starts in',
        'started ago': {
          part1: 'Started',
          part2: 'ago'
        },
        days: 'days',
        hours: 'hours',
        minutes: 'minutes',
        seconds: 'seconds',
        day: 'day',
        hour: 'hour',
        minute: 'minute',
        second: 'second'
      }
    },
    de: {
      translation: {
        'starts in': 'Beginnt in',
        'started ago': {
          part1: 'Hat vor',
          part2: 'begonnen'
        },
        days: 'Tagen',
        hours: 'Stunden',
        minutes: 'Minuten',
        seconds: 'Sekunden',
        day: 'Tag',
        hour: 'Stunde',
        minute: 'Minute',
        second: 'Sekunde'
      }
    }
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
