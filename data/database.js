db = db.getSiblingDB('database');
db.usuarios.insertMany([
{
"nombre": "Juan",
"apellido": "Ramirez",
"edad": 25,
"sexo": "M"
},
{
"nombre": "Maria",
"apellido": "Perez",
"edad": 30,
"sexo": "F"
},
{
"nombre": "Pedro",
"apellido": "Gomez",
"edad": 35,
"sexo": "M"
}
]);