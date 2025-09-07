const lenguajes = ['JavaScript', 'Python', 'Java', 'C++', 'Go'];
const primerosTres = lenguajes.slice(0, 3);
console.log(primerosTres);

const primer = lenguajes[0];
const ultimo = lenguajes[lenguajes.length - 1];
console.log([primer, ultimo]); 

const [primero, ...resto] = lenguajes;
console.log(primero);
console.log(resto);

[lenguajes[0], lenguajes[4]] = [lenguajes[4], lenguajes[0]]
console.log(lenguajes);

