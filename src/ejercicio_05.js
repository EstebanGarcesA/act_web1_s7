const usuarios = [
   {id: 1,nombre: "Juan Pérez",email: "juan.perez@email.com",activo: true},
   {id: 2,nombre: "María González",email: "maria.gonzalez@email.com",activo: false},
   {id: 3,nombre: "Carlos Rodríguez",email: "carlos.rodriguez@email.com",activo: true},
   {id: 4,nombre: "Ana López",email: "ana.lopez@email.com",activo: true},
   {id: 5,nombre: "Diego Martínez",email: "diego.martinez@email.com",activo: false},
   {id: 6,nombre: "Sofia Hernández",email: "sofia.hernandez@email.com",activo: true},
   {id: 7,nombre: "Luis Torres",email: "luis.torres@email.com",activo: false},
   {id: 8,nombre: "Carmen Silva",email: "carmen.silva@email.com",activo: true}
];

function usuarioEncontradoEmail(i) {
    return usuarios.find(user => user.email === i );
}

function obtenerPosicion(i) {
    return usuarios.findIndex(usuarios => usuarios.id===i);
}

verificarInactivos = usuarios.some(estado => estado.activo === false);

const todosEmailsValidos = usuarios.every(usuario => usuario.email.includes('@'));

console.log(usuarioEncontradoEmail(`ana.lopez@email.com`));
console.log(obtenerPosicion(7));
console.log(`¿Hay usuarios inactivos?`,verificarInactivos);
console.log('¿Todos tienen email válido?', todosEmailsValidos);
