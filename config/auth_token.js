var jwt = require('jsonwebtoken');

module.exports.tokenChecker = function (req, res, next) {
    var token = req.headers.auth;

    if (token) {
        jwt.verify(token, 'secret', function (err, decoded) {
            if (err) {
                res.status(401).json({ "message": "failed" })
            } else {
                req.username = decoded.username;
                req.name = decoded.name;
                next();
            }
        });
    } else {
        res.status(401).json({ "message": "failed" })
    }
}