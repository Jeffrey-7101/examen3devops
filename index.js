require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json());

const drivers = {
    mysql: require('./drivers/mysqlDriver'),
    postgres: require('./drivers/postgresDriver'),
    mongo: require('./drivers/mongoDriver')
};

const driver = new drivers[process.env.MY_DATABASE_DRIVER]({
    DB_HOST: process.env.DB_HOST,
    DB_USER_NAME: process.env.DB_USER_NAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    DB_PORT: process.env.DB_PORT,
});

(async () => {
    await driver.connect();

    app.get('/', (req, res) => {
        return res.send('Hola node dynamic')
    })

    app.get('/users', async (req, res) => {
        const users = await driver.getAllUsers();
        res.json(users);
    });

    app.get('/users/:id', async (req, res) => {
        const user = await driver.getUserById(req.params.id);
        res.json(user);
    });

    app.post('/users', async (req, res) => {
        const user = await driver.createUser(req.body);

        res.status(201).json({
            message: 'Usuario creado satisfactoriamente',
            user
        });
    });

    app.listen(3000, () => console.log('Server corriendo en el puerto 3000'));

})();