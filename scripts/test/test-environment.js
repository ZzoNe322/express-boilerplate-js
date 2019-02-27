const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const logger = require('../../src/helpers/get-logger');
const NodeEnvironment = require('jest-environment-node'); // eslint-disable-line

class TestEnvironment extends NodeEnvironment {
    constructor(config) {
        super(config);
    }

    async setup() {
        logger.info('Start Test Environment');
        await super.setup();
    }

    async teardown() {
        logger.info('Teardown Test Environment');
        await super.teardown();
    }

    runScript(script) {
        return super.runScript(script);
    }
}

module.exports = TestEnvironment;
