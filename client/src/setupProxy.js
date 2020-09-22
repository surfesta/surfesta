const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/api',
    createProxyMiddleware({
      target:
        'http://ec2-15-164-210-226.ap-northeast-2.compute.amazonaws.com:5000',
      changeOrigin: true,
    }),
  );
};
