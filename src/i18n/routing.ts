import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['fr', 'en', 'nl'],
  defaultLocale: 'fr',
});


// https://github.com/amannn/next-intl/tree/main/examples/example-app-router/src/i18n