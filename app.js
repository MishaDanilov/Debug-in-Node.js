const express = require('express'); //const вместо var
const app = express();
const db = require('./db').db;
const user = require('./controllers/usercontroller');
const game = require('./controllers/gamecontroller')
const validateSession = require('./middleware/validate-session')

db.sync({force: true}).then(result => { //добавил обработчик синхронизации 
        console.log("Синхронизация прошла.");
    })
    .catch(err => console.log(err.message));

app.use(express.json());
app.use('/api/auth', user);
app.use(validateSession)
app.use('/api/game', game);
app.listen(4000,function () {//<сервер не запускался на порте 4000>.<добавил 4000>. Исправлена строка <16> в файле <app.js>
    console.log("App is listening on 4000");
})