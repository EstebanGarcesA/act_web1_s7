const numeros = [3, 1, 4, 1, 5, 9, 2, 6];
numeros.sort((a, b) => a - b); // Orden ascendente
console.log(numeros); 
numeros.sort((a, b) => b - a); // Orden descendente
console.log(numeros); 

const palabras = ['Karol', 'Mateo', 'Jose', 'Ana'];
palabras.sort();
console.log(palabras);

const personas = [
   {nombre: "Ana", edad: 25},
   {nombre: "Carlos", edad: 30},
   {nombre: "María", edad: 40},
   {nombre: "Luis", edad: 28}
];

personas.sort((a,b)=> a.edad-b.edad);
console.log(personas);

numeros.reverse();
console.log(numeros);

