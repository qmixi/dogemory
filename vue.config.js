module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
              @import "~@/assets/styles/_variables";
              @import "~@/assets/styles/_mixins";
              @import "~@/assets/styles/index";
            `
      }
    }
  }
};
