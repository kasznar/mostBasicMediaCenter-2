const proxy = require('http-proxy-middleware'); // eslint-disable-line import/no-extraneous-dependencies

// eslint-disable-next-line func-names
module.exports = function(app) {
  app.use(
    proxy('/api', {
      target: 'http://localhost:3001',
      logLevel: 'debug',
      secure: false,
    }),
  );
};
