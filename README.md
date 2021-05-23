##Найденные ошибки компиляции
1)	<Router is not defined>.<добавил "require('express')."" перед Router()>. Исправлена строка <1> в файле <controllers\usercontroller.js>
2)	<Cannot find module 'bcrypt'>.<добавил окончание "js" после bcrypt>. Исправлена строка <2> в файле <controllers\usercontroller.js>
3)	<require(...).import is not a function>.<убрал import и настройли путь в require>. Исправлена строка <5> в файле <controllers\usercontroller.js>
4)	<require(...).import is not a function>.<убрал import и настройли путь в require>. Исправлена строка <2> в файле <controllers\gamecontroller.js>
5)	<Function statements require a function name>.<поместил функцию в объект exports так как функция должна экспортироваться>. Исправлена строка <1> в файле <models\game.js>
6)	<routers is not defined>.<зменил routers на router>. Исправлена строка <116> в файле <controllers\gamecontroller.js>
7)	<ошибка "db.sync is not a function" в файле app.js>.<экспортировал объект sequelize>. Исправлена строка <18> в файле <db.js>
8)	<require(...).import is not a function>.<убрал import и настройли путь в require>. Исправлена строка <2> в файле <middleware\validate-session.js>
##Найденные ошибки логики приложения
1.	<сервер не запускался на порте 4000>.<добавил 4000>. Исправлена строка <16> в файле <app.js>
2.	<require('../models/user') возвращает функцию, но не вызывает её>.<вызвал функцию с параметрами sequelize,Sequelize>. Исправлена строка <8> в файле <controllers\usercontroller.js>
3.	<require('../models/game') возвращает функцию, но не вызывает её>.<вызвал функцию с параметрами sequelize,Sequelize>. Исправлена строка <5> в файле <controllers\gamecontroller.js>
4.	<require('../models/user') возвращает функцию, но не вызывает её>.<вызвал функцию с параметрами sequelize,Sequelize>. Исправлена строка <5> в файле <middleware\validate-session.js>
5.	<db.js экспортировал только объект класса Sequelize, но не экспортировал сам класс Sequelize>.<добавил в экспорт класс Sequelize>. Исправлена строка <18> в файле <db.js>
##Рефактор кода
1.	 Заменил var на const на месте подключения модулей
2.	Заменил body-parser на express.json()
3.	Создал отдельно переменную validateSession
4.	Добавил обработчик синхронизации
5.	Добавил ключевое поле id к game и user
6.	Заменил функции выражения на стрелочные функции
7.	Добавил обработку промисов в некоторых местах
8.	Добавил данные БД в отдельный конфигурационный файл
9.	Добавил define: {timestamps: false} к настройка Sequelize

