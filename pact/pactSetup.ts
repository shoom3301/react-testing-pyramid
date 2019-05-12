import { PactOptions, LogLevel } from '@pact-foundation/pact/dsl/options';
import * as path from 'path';
import { Pact, PactfileWriteMode } from '@pact-foundation/pact';

export const {pactConfig} : {pactConfig: PactOptions} = require('./pact.config');

function configurePactProvider(config: PactOptions): PactOptions {
    const commonConfiguration = {
        cors: true,
        dir: 'pact/pacts',
        spec: 2,
        logLevel: 'WARN' as LogLevel,
        log: path.resolve(process.cwd(), 'pact/log', `${config.provider}.log`),
        pactfileWriteMode: 'overwrite' as PactfileWriteMode
    };

    return {
        ...commonConfiguration,
        ...config
    };
}

export function getProvider(): Pact {
    return new Pact(configurePactProvider(pactConfig));
}