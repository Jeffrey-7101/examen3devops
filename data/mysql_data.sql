CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    edad INT,
    sexo CHAR(1)
);

INSERT INTO usuarios (nombre, apellido, edad, sexo) VALUES ('Maria', 'Rojas', 30, 'F');