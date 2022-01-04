const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'zh-TW',
    locales: ['en', 'ja', 'ko', 'zh-TW', 'zh-CN'],
    ...(typeof window === undefined
      ? { localePath: path.resolve('./public/locales') }
      : {}),
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development' ? true : false,
};
