const router = require('express').Router(); //<Router is not defined>.<добавил "require('express')."" перед Router()>. Исправлена строка <1> в файле <controllers\usercontroller.js>
const bcrypt = require('bcryptjs'); //<Cannot find module 'bcrypt'>.<добавил окончание "js" после bcrypt>. Исправлена строка <2> в файле <controllers\usercontroller.js>
const jwt = require('jsonwebtoken');
const sequelize = require('../db').db;
const Sequelize = require('../db').dataTypes;

const User = require('../models/user')(sequelize,Sequelize); //<require(...).import is not a function>.<убрал import и настройли путь в require>. Исправлена строка <5> в файле <controllers\usercontroller.js>
//<require('../models/user') возвращает функцию, но не вызывает её>.<вызвал функцию с параметрами sequelize,Sequelize>. Исправлена строка <8> в файле <controllers\usercontroller.js>
router.post('/signup', (req, res) => {
    User.create({
        full_name: req.body.user.full_name,
        username: req.body.user.username,
        passwordhash: bcrypt.hashSync(req.body.user.password, 10),
        email: req.body.user.email,
    })
    .then(user => {
        let token = jwt.sign({id: user.id}, 'lets_play_sum_games_man', {expiresIn: 60 * 60 * 24});
        res.status(200).json({user: user,token: token})
    })
    .catch(err=>res.status(500).send(err.message)); 
})

router.post('/signin', (req, res) => {
    User.findOne({
        where: {
            username: req.body.user.username
        }
    })
    .then(user => {
        if (user) {
            bcrypt.compare(req.body.user.password, user.passwordHash, function (err, matches) {
                if (matches) {
                    var token = jwt.sign({
                        id: user.id
                    }, 'lets_play_sum_games_man', {
                        expiresIn: 60 * 60 * 24
                    });
                    res.json({
                        user: user,
                        message: "Successfully authenticated.",
                        sessionToken: token
                    });
                } else {
                    res.status(502).send({
                        error: "Passwords do not match."
                    })
                }
            });
        } else {
            res.status(403).send({
                error: "User not found."
            })
        }
    })
    .catch(err=>{
        res.status(404).json({
            error: err.message//logic
        })
    })
})

module.exports = router;