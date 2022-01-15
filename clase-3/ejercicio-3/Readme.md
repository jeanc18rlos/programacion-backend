Realizar un proyecto en node.js que permita guardar datos en un objeto, estos datos contendrán información del usuario, al igual que datos sensibles como su contraseña, el objetivo de este reto es poder guardar la contraseña del usuario de manera segura, comparando el hash de la contraseña guardada con el hash automáticamente generado de un string que pasamos en un momento dado.Hacer las modificaciones necesarias para que sólo se actualicen los patches para la librería recién instalada.

Los datos a guardar son: Nombre de usuario, Edad del usuario, Apellido del usuario, Username, Contraseña (hasheada con bcrypt)

Para ello utilizar la dependencia bcrypt en forma local desde npm. De esta manera un usuario puede registrarse y guardar la contraseña de manera segura, salvaguardando asi, la integridad de los datos del usuario.

Un ejemplo de salida:
En caso exitoso: devolver el objeto con todos los datos del usuario exceptuando la contraseña.

