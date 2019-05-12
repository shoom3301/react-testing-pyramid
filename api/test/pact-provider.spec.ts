/**
 * https://github.com/pact-foundation/pact-js/tree/master/examples/e2e
 */

import pact, {VerifierOptions} from '@pact-foundation/pact-node';
const {pactBrokerConfig, pactConfig, providerProxyPort} = require('../../pact/pact.config');

const opts: VerifierOptions = {
  provider: pactConfig.provider,
  providerBaseUrl: `http://localhost:${providerProxyPort}`,
  publishVerificationResult: true,
  providerVersion: '1.0.0',
  ...pactBrokerConfig
};


(async function () {
  try {
    const result = await pact.verifyPacts(opts);

    console.log('Pact provider test success!');
    console.log(result);

    process.exit(0);
  } catch (error) {
    console.log('Pact provider test failed!');
    console.log(error);

    process.exit(1);
  }
})();
