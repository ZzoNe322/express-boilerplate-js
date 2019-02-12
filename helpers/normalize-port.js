module.exports = function normalizePort(val) {
    const port = parseInt(val, 10);

    if (Number.isNaN(port) || port < 0) {
        throw new Error('invalid port number ' + val);
    }
    return port;
};
