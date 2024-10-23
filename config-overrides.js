const { override } = require('customize-cra');

module.exports = override((config) => {
  config.resolve = {
    ...config.resolve,
    fallback: {
      http: false,
      https: false,
      url: false,
      zlib: false,
      stream: false,
      path: false,
      fs: false,
    },
  };
  return config;
});
