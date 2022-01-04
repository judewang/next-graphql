module.exports = {
  i18n: {
    defaultLocale: 'zh-TW',
    locales: ['en', 'ja', 'ko', 'zh-TW', 'zh-CN'],
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development' ? true : false,
};
