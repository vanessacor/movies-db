module.exports = {
  css: {
    loaderOptions: {
      sass: {
          additionalData: `@import "@/styles/_variables.scss";`
      }
    }
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
};
