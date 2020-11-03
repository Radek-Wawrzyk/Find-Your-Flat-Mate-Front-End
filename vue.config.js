module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/styles/modules/variables.scss";',
      },
    },
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
};
