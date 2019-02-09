const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const http = require('http');
const app = require('../app');
const logger = require('../helpers/get-logger');
const normalizePort = require('../helpers/normalize-port');
const onError = require('../helpers/on-error');

const port = normalizePort(process.env.HTTP_PORT);
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', () => {
    logger.info(`Server is listening on port ${port}`);
});