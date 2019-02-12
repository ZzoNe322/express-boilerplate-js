const normalizePort = require('../../helpers/normalize-port');

describe('helpers: normalizePort', () => {
    it('should throw error if port string is undefined', () => {
        expect(normalizePort).toThrow(/^invalid port number/);
    });
    it('should parse port string \'3000\'', () => {
        const PORT = process.env.HTTP_PORT;
        expect(normalizePort(PORT)).toEqual(parseInt(PORT));
    });
});
