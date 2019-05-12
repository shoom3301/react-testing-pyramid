const proxy = require('http-proxy-middleware');
const proxyConfig = require('../proxy.conf');
const API = '/api';

module.exports = function(app) {
    app.use(proxy(API, proxyConfig[API]));
};