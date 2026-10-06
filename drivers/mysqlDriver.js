const mysql = require("mysql2/promise");

class MySQLDriver {
  constructor(config) {
    this.config = config;
  }

  async connect() {
    this.connection = await mysql.createConnection({
      host: this.config.DB_HOST,
      user: this.config.DB_USER_NAME,
      password: this.config.DB_PASSWORD,
      database: this.config.DB_NAME,
      port: this.config.DB_PORT,
    });
  }

  async getAllUsers() {
    const [rows] = await this.connection.execute("SELECT * FROM usuarios");
    return rows;
  }

  async getUserById(id) {
    const [rows] = await this.connection.execute(
      "SELECT * FROM usuarios WHERE id = ?",
      [id],
    );
    return rows[0];
  }

  async createUser(user) {
    const { nombre, apellido, edad, sexo } = user;
    const [result] = await this.connection.execute(
      "INSERT INTO usuarios (nombre, apellido, edad, sexo) VALUES (?, ?, ?, ?)",
      [nombre, apellido, edad, sexo],
    );
    user.id = result.insertId;
    return user;
  }
}

module.exports = MySQLDriver;
