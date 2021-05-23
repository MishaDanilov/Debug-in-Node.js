const jwt = require('jsonwebtoken');
const sequelize = require('../db').db;
const Sequelize = require('../db').dataTypes;

var User = require('../models/user')(sequelize,Sequelize);//<require(...).import is not a function>.<убрал import и настройли путь в require>. Исправлена строка <2> в файле <middleware\validate-session.js>
//<require('../models/user') возвращает функцию, но не вызывает её>.<вызвал функцию с параметрами sequelize,Sequelize>. Исправлена строка <5> в файле <middleware\validate-session.js>

module.exports = function (req, res, next) {
    if (req.method == 'OPTIONS') {
        next();   // allowing options as a method for request
    } else {
        var sessionToken = req.headers.authorization;
        console.log('sessionToken:',sessionToken);
        if (!sessionToken) return res.status(403).send({ auth: false, message: "No token provided." });
        else {
            jwt.verify(sessionToken, 'lets_play_sum_games_man', (err, decoded) => {
                if (decoded) {
                    User.findOne({ where: { id: decoded.id } })
                    .then(user => {
                        req.user = user;
                        console.log(`user: ${user}`)
                        next()
                    })
                    .catch(err=>{res.status(401).send({ error: "not authorized" })})//logic
                } else {
                    res.status(400).send({ error: "not authorized" })
                }
            });
        }
    }
}