const fs = require('fs');
const path = require('path');

function logMiddleware(req, res, next) {
    fs.appendFileSync(path.resolve(__dirname, '../data/logs/userLogs.txt'), `El usuario ingresó a la ruta: ${req.url},\n`);

    next();
};



module.exports = logMiddleware;

// path.resolve(__dirname, '../data/logs/userLogs.txt')