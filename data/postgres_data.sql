CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    edad INT,
    sexo CHAR(1)
);

INSERT INTO usuarios (nombre, apellido, edad, sexo) VALUES ('Carlos', 'Ramirez', 35, 'M');