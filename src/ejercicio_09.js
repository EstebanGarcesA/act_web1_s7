const persona = {
   nombre: "Ana",
   edad: 25,
   direccion: {
       calle: "Main St",
       ciudad: "Madrid",
       pais: "España"
   },
   contacto: {
       email: "ana@email.com",
       telefono: "123-456-789"
   }
};


const {nombre, edad} = persona;
console.log(nombre, edad); 


const {nombre: nombrePersona, edad: años} = persona;
console.log(`manu`, 30); 


const {trabajo = "No especificado"} = persona;
console.log(trabajo);

const {direccion: {ciudad, pais}, contacto: {email}} = persona;
console.log(ciudad, pais, email); 


const {nombre: n, ...resto} = persona;
console.log(n);     
console.log(resto); 