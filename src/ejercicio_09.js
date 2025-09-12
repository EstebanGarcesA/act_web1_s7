const persona = {
    nombre: 'Carlos', 
    edad: 30, 
    dirección: {
        calle:'cr 26 49 21', ciudad: 'Medellín', país: 'Colombia'
    }, contacto: {
        email: 'carlos.perez@cesde.net', teléfono: '1234567890'
    }   
};

// Desestructuración básica
const { nombre, edad } = persona;   
console.log('Nombre:', nombre);
console.log('Edad:', edad);

const { nombre: nombrePersona, edad: edadPersona } = persona;
console.log('Renombrado - Nombre:', nombrePersona);
console.log('Renombrado - Edad:', edadPersona);

// Valores por defecto
const { nombre: nombrePorDefecto = "Desconocido", contacto: { email = 'nodisponible@nodisponible.com' } } = persona;

console.log('Nombre con valor por defecto:', nombrePorDefecto);
console.log('Email con valor por defecto:', email);
// Desestructuración anidada
const { dirección: { calle, ciudad, país } } = persona;
console.log('Ciudad:', ciudad);   

// Rest operator en objetos
const { contacto, ...resto } = persona;
console.log('Resto del objeto:', resto);
console.log('Contacto:', contacto);

const {nombre: n, ...resto} = persona;
console.log(n);     
console.log(resto); 
