const { Client } = require('pg');

class PostgresDriver {
    constructor(config) {
        this.config = config;
    }

    async connect() {
        this.client = new Client({
            user: this.config.DB_USER_NAME,
            host: this.config.DB_HOST,
            database: this.config.DB_NAME,
            password: this.config.DB_PASSWORD,
            port: this.config.DB_PORT,
        });
        await this.client.connect();
    }

    async getAllUsers() {
        const res = await this.client.query('SELECT * FROM usuarios');
        return res.rows;
    }

    async getUserById(id) {
        const res = await this.client.query('SELECT * FROM usuarios WHERE id = $1', [id]);
        return res.rows[0];
    }

    async createUser(user) {
        const { nombre, apellido, edad, sexo } = user;

        await this.client.query(
            'INSERT INTO usuarios (nombre, apellido, edad, sexo) VALUES ($1, $2, $3, $4)',
            [nombre, apellido, edad, sexo]
        );

        console.log('usuario Creado postgres');
    }
}

module.exports = PostgresDriver;