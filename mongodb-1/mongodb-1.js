//db.createCollection('user2')


/*db.user2.insertOne({
    nombre: "Pedro",
    apellido: "Gonzalez",
    correo: "pedro.gonzalez@example.com",
    ciudad: "Bogotá",
    país: "Estados Unidos",
    salario: 52000,
    edad: 35,
    altura: 170,
    peso: 160
});

db.user2.insertOne({
    nombre: "Pedree",
    apellido: "Gonzalezz",
    correo: "pedro.gonzalez@example.com",
    ciudad: "BoXD",
    país: "Estados Unidos",
    salario: 52000,
    edad: 22,
    altura: 170,
    peso: 160
});

db.user2.insertOne({
    nombre: "Ana",
    apellido: "Martinez",
    correo: "ana.martinez@example.com",
    ciudad: "Medellín",
    país: "Colombia",
    salario: 58000,
    edad: 28,
    altura: 165,
    peso: 140
});

db.user2.insertOne({
    nombre: "Carlos",
    apellido: "Gomez",
    correo: "carlos.gomez@example.com",
    ciudad: "Bogotá",
    país: "Colombia",
    salario: 50000,
    edad: 30,
    altura: 175,
    peso: 150
});

db.user2.insertOne({
    nombre: "Maria",
    apellido: "Lopez",
    correo: "maria.lopez@example.com",
    ciudad: "Medellín",
    país: "Italia",
    salario: 60000,
    edad: 28,
    altura: 165,
    peso: 130
});

db.user2.insertOne({
    nombre: "Juan",
    apellido: "Martinez",
    correo: "juan.martinez@example.com",
    ciudad: "Cali",
    país: "Brasil",
    salario: 55000,
    edad: 32,
    altura: 180,
    peso: 100
});

db.user2.insertOne({
    nombre: "Pedro",
    apellido: "Gonzalez",
    correo: "pedro.gonzalez@example.com",
    ciudad: "Bogotá XD",
    país: "Brasil",
    salario: 52000,
    edad: 35,
    altura: 170,
    peso: 160
});

db.user2.insertOne({
    nombre: "Pedro",
    apellido: "Gonzalez",
    correo: "pedro.gonzalez@example.com",
    ciudad: "Bogotá",
    país: "Colombia",
    salario: 52000,
    edad: 35,
    altura: 170,
    peso: 160
});

db.user2.insertOne({
    nombre: "Ana",
    apellido: "Martinez",
    correo: "ana.martinez@example.com",
    ciudad: "Medellín XD",
    país: "India",
    edad: 28,
    altura: 165,
    peso: 140
});

db.user2.insertOne({
    nombre: "Carlos",
    apellido: "Gomez",
    correo: "carlos.gomez@example.com",
    ciudad: "Bogotá",
    país: "Colombia",
    salario: 50000,
    edad: 30,
    altura: 175,
    peso: 150
});

db.user2.insertOne({
    nombre: "Maria",
    apellido: "Lopez",
    ciudad: "Medellín",
    país: "Italia",
    salario: 60000,
    edad: 28,
    altura: 195,
    peso: 130
});

db.user2.insertOne({
    nombre: "Juan",
    apellido: "Martinez",
    correo: "juan.martinez@example.com",
    ciudad: "Cali",
    país: "Alemania",
    salario: 55000,
    edad: 32,
    altura: 180,
    peso: 160
});

db.user2.insertOne({
    nombre: "Pedro",
    apellido: "Gonzalez",
    correo: "pedro.gonzalez@example.com",
    ciudad: "XD",
    país: "Italia",
    salario: 52000,
    edad: 35,
    altura: 170,
    peso: 160
});

db.user2.insertOne({
    nombre: "Pedro",
    apellido: "Gonzalez",
    correo: "pedro.gonzalez@example.com",
    ciudad: "Bogotá",
    país: "Chile",
    salario: 52000,
    edad: 35,
    altura: 170,
    peso: 160
});

db.user2.insertOne({
    nombre: "Ana",
    apellido: "Martinez",
    correo: "ana.martinez@example.com",
    ciudad: "Medellín",
    país: "Canadá",
    salario: 58000,
    edad: 28,
    altura: 165,
    peso: 140
});

db.user2.insertOne({
    nombre: "Carlos",
    apellido: "Gomez",
    correo: "carlos.gomez@example.com",
    ciudad: "Bogotá",
    país: "Australia",
    salario: 50000,
    edad: 30,
    altura: 175,
    peso: 150
});

db.user2.insertOne({
    nombre: "Maria",
    apellido: "Lopez",
    correo: "maria.lopez@example.com",
    ciudad: "Medellín XD",
    país: "Estados Unidos",
    salario: 60000,
    edad: 28,
    altura: 165,
    peso: 130
});

db.user2.insertOne({
    nombre: "Juan",
    apellido: "Martinez",
    correo: "juan.martinez@example.com",
    ciudad: "paris",
    país: "francia",
    salario: 55000,
    edad: 32,
    altura: 180,
    peso: 160
});

db.user2.insertOne({
  nombre: "Pedroo",
  apellido: "Gonzalez",
  correo: "pedro.gonzalez@example.com",
  ciudad: "elcairo",
  país: "España",
  salario: 52000,
  edad: 35,
  altura: 170,
  peso: 160
});
*/



/*db.user2.find();

//1)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))//////////////////////////////////////


db.user2.find({ edad: { $gt: 19 } });



//2

//db.user2.find({ ciudad: { $in: ["londres","paris"]} });

// Obtener a todos los usuarios que ganen más de $2000 al mes y tengan menos de 30 años.
db.user2.find({ salario: { $gt: 2000 }, edad: { $lt: 30 } });

//Obtener a todos los usuarios que sean de España y ganen más de $3000 al mes.
db.user2.find({ país: { $eq: "España" }, salario: { $gt: 3000 } });

// Obtener todos los usuarios que tengan entre 25 y 35 años.
db.user2.find({ edad: { $gte: 25, $lte: 35 } });

// Obtener a todos los usuarios que no sean de Estados Unidos.
db.user2.find({ país: { $ne: "Estados Unidos" } });

// Obtener a todos los usuarios que sean de Londres y que ganen más de $2500 o que tengan más de 30 años.
db.user2.find({ ciudad: { $eq: "Londres" }, $or: [ { salario: { $gt: 2500 } }, { edad: { $gt: 30 } } ] });

// Obtener a todos los usuarios que sean de Australia y tengan un peso mayor a 140 libras.
db.user2.find({ país: { $eq: "Australia" }, peso: { $gt: 140 } });

// Obtener a todos los usuarios que no sean de Londres ni de París.
db.user2.find({ ciudad: { $nin: ["Londres", "París"] } });

// Obtener a todos los usuarios que ganen menos de $2000 al mes o que tengan más de 40 años.
db.user2.find({ $or: [ { salario: { $lt: 2000 } }, { edad: { $gt: 40 } } ] });

// Obtener a todos los usuarios que sean de Canadá y ganen más de $4000 al mes o que tengan una altura mayor a 180 cm.
db.user2.find({ país: { $eq: "Canadá" }, $or: [ { salario: { $gt: 4000 } }, { altura: { $gt: 180 } } ] });

// Obtener todos los usuarios que sean de Italia y tengan entre 20 y 30 años.
db.user2.find({ país: { $eq: "Italia" }, edad: { $gte: 20, $lte: 30 } });

// Obtener todos los usuarios que no tengan un correo electrónico registrado.
db.user2.find({ correo: { $exists: false } });

// Obtener todos los usuarios que sean de Francia y que su salario esté entre $3000 y $5000 al mes.
db.user2.find({ país: { $eq: "Francia" }, salario: { $gte: 3000, $lte: 5000 } });

// Obtener todos los usuarios que sean de Brasil y que tengan un peso menor a 120 libras o más de 140 libras.
db.user2.find({ país: { $eq: "Brasil" }, $or: [ { peso: { $lt: 120 } }, { peso: { $gt: 140 } } ] });

// Obtener todos los usuarios que sean de Argentina o de Chile y que tengan una edad menor a 25 años.
db.user2.find({ país: { $in: ["Argentina", "Chile"] }, edad: { $lt: 25 } });

// Obtener a todos los usuarios que no sean de España ni de México y que ganen menos de $3000 al mes.
db.user2.find({ país: { $nin: ["España", "México"] }, salario: { $lt: 3000 } });

// Obtener todos los usuarios que sean de Alemania y que tengan un salario menor a $4000 o una edad mayor a 35 años.
db.user2.find({ país: { $eq: "Alemania" }, $or: [ { salario: { $lt: 4000 } }, { edad: { $gt: 35 } } ] });

// Obtener todos los usuarios que no sean de Colombia y que su altura sea menor a 170 cm.
db.user2.find({ país: { $ne: "Colombia" }, altura: { $lt: 170 } });

// Obtener todos los usuarios que sean de India y que no tengan un salario registrado.
db.user2.find({ país: { $eq: "India" }, salario: { $exists: false } });
*/
 


//para eliminar a todos los que tengan 22 años
db.user2.deleteMany({edad:{$in:22}});
db.user2.deleteMany({edad:22});

//para actualizar un solo dato

db.user2.updateOne({nombre: "carlos"},{$set: {nomre: "pedro carlos"}})

//hola


//opopopopopopo

//Operaciones de Actualización


//Incrementar el salario de todos los usuarios en un 10%.



//Cambiar la ciudad de residencia de los usuarios que actualmente viven en "New York" a "Los Ángeles".

// Agregar el correo electrónico "nuevo@correo.com" al usuario con nombre "Juan" y apellido "Perez".

// Actualizar la edad del usuario con correo electrónico "ejemplo@correo.com" a 35 años.

// Cambiar el país de residencia de los usuarios que son de "Mexico" a "Canada".

// Aumentar la altura de todos los usuarios en 5 centímetros.

// Cambiar el apellido del usuario con correo electrónico "otro@ejemplo.com" a "González".

// Actualizar el peso del usuario con nombre "Maria" a 140 libras.

// Incrementar el salario de todos los usuarios que son de "Estados Unidos" en un 15%.

// Actualizar el correo electrónico del usuario con nombre "Pedro" a "nuevo_correo@riwi.co".

// Cambiar la edad de todos los usuarios menores de 30 años a 30 años.

// Incrementar el salario de los usuarios que tienen un salario inferior a 3000 dólares en un 20%.

// Actualizar la ciudad de residencia de todos los usuarios que actualmente viven en "Bogotá" a "Medellín".

// Cambiar el país de residencia de los usuarios con un salario superior a 5000 dólares a "Australia".

// Reducir la edad de todos los usuarios que tienen más de 50 años en 5 años.

// Actualizar el peso de los usuarios que pesan más de 200 libras a 180 libras.

// Incrementar el salario de los usuarios que viven en "London" en un 25%.

// Cambiar el apellido de los usuarios con un salario superior a 4000 dólares a "Smith".

// Actualizar el correo electrónico de todos los usuarios cuyo nombre empiece por "A" a "nuevo@riwi.es".

// Cambiar la ciudad de residencia de los usuarios con una altura inferior a 160 centímetros a "París".



// 


// Operaciones de Eliminación


// Eliminar todos los usuarios que tienen un salario menor que 2000 dólares.

// Eliminar usuarios que tienen una edad menor que 25 años.

// Borrar todos los usuarios que viven en "París".

// Eliminar usuarios que tienen un peso superior a 180 libras.

// Eliminar usuarios que tienen una altura inferior a 160 centímetros.

// Eliminar todos los usuarios que tienen el nombre "John" y el apellido "Doe".

// Borrar usuarios que tienen una dirección de correo electrónico específica, por ejemplo, "borrar@riwi.com".

// Eliminar usuarios que no tienen una dirección de correo electrónico registrada.

// Eliminar usuarios que viven en "Tokyo".

// Borrar todos los usuarios que son menores de 18 años.

// Eliminar usuarios que tienen un salario igual a 0.

// Borrar usuarios que viven en "New York" y tienen un salario superior a 5000 dólares.

// Eliminar usuarios que tienen una dirección de correo electrónico que contiene la palabra "spam".

// Borrar usuarios que viven en "Bello" y tienen más de 50 años.

// Eliminar todos los usuarios que tienen el apellido "González".

// Borrar usuarios que tienen una edad superior a 70 años.

// Eliminar usuarios que tienen un país de residencia igual a "Canadá" y un salario inferior a 4000 dólares.

// Borrar usuarios que tienen un salario entre 1000 y 2000 dólares.

// Eliminar usuarios que tienen una edad igual a 30 años.

// Borrar usuarios que tienen una altura superior a 190 centímetros.
