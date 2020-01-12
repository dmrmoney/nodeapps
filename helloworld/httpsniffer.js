/*
 * sniff http requests and log to console with timestamp
 */

const util = require('util');
const url = require('url');

const timestamp = () => {
    return new Date().toISOString();
}

exports.sniffOn = (server) => {
    server.on('request', (req, res) => {
        console.log(`${timestamp()} request:`);
        console.log(`${reqToString(req)}`);
    });
    server.on('close', errno => {
        console.log(`${timestamp()} close: ${errno}`);
        console.log(`${reqToString(req)}`);
    });
    // TODO: handle 'checkContinue', 'upgrade', 'clientError' as well
}

const reqToString = (req) => {
    var ret = `req ${req.method} ${req.httpVersion} ${req.url}` + '\n';
    ret += JSON.stringify(url.parse(req.url, true)) + '\n';
    var keys = Object.keys(req.headers);
    for (var i = 0, len = keys.length; i < len; i++ ) {
        var key = keys[i];
        ret += `${key}: ${req.headers[key]}` + '\n';
    }
    if (req.trailers) {
        ret += 'trailers: ' + util.inspect(req.trailers) + '\n';
    }
    return ret;
}
