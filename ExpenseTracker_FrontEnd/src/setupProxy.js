import { createProxyMiddleware } from 'http-proxy-middleware';

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/expenseTracker',
    createProxyMiddleware({
      target: 'https://your-app-name.up.railway.app',
      changeOrigin: true,
    })
  );
};