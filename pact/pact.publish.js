const path = require('path');
const pact = require('@pact-foundation/pact-node');
const {pactBrokerConfig} = require('./pact.config');

const opts = {
  pactFilesOrDirs: [path.resolve(__dirname, 'pacts')],
  pactBroker: pactBrokerConfig.pactBrokerUrl,
  pactBrokerUsername: pactBrokerConfig.pactBrokerUsername,
  pactBrokerPassword: pactBrokerConfig.pactBrokerPassword,
  consumerVersion: `1.0.${Math.floor(Date.now() / 1000)}`
};

(async () => {
  try {
    const result = await pact.publishPacts(opts);

    console.log('Pact contract publishing complete!');
    console.log(result);

    process.exit(0);
  } catch (error) {
    console.log('Pact contract publishing failed: ', error);

    process.exit(1);
  }
})();
