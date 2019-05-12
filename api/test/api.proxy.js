const http = require('http');
const proxy = require('http-proxy-middleware');
const proxyConfig = require('../../proxy.conf');
const {providerProxyPort} = require('../../pact/pact.config');

const proxyPath = '/api';

const server = http.createServer(function (req, res) {
  proxy(proxyPath, proxyConfig[proxyPath])(req, res, () => {});
});

server.listen(providerProxyPort);

console.log(`Proxy on port ${providerProxyPort}`);
