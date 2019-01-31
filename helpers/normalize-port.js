module.exports = function normalizePort(val) {
    const port = parseInt(val, 10);

    if (Number.isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};