const producto = {
   id: 1,
   nombre: "Laptop",
   precio: 1200,
   categoria: "Electrónicos",
   stock: 15
};

// Object.keys() - obtener claves
const claves = Object.keys(producto);
console.log("Claves:", claves); // ["id", "nombre", "precio", "categoria", "stock"]

// Object.values() - obtener valores
const valores = Object.values(producto);
console.log("\nValores:", valores); // [1, "Laptop", 1200, "Electrónicos", 15]

// Object.entries() - obtener pares clave-valor
const entradas = Object.entries(producto);
console.log("\nEntradas:", entradas); // [["id", 1], ["nombre", "Laptop"], ...]

// Iterar con forEach()


Object.keys(producto).forEach(clave => {
   console.log(`${clave}: ${producto[clave]}`);
});