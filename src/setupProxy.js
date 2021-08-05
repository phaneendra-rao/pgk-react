const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://api.c2hire.com/',
      changeOrigin: true,
      prependPath: false,
      pathRewrite: {'^/api' : ''}
    })
  );
};