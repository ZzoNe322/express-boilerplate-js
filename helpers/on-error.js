module.exports = function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

    switch (error.code) {
        case 'EACCES':
            console.error('%s requires elevated privileges', bind);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error('%s is already in use', bind);
            process.exit(1);
            break;
        default:
            throw error;
    }
}