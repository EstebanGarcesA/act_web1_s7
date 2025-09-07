let numeros = [1, 2, 3, 4, 5];
console.log("Inicial:", numeros);


numeros.push(6);
console.log("push(6):", numeros);
numeros.pop();
console.log("pop():", numeros);


numeros.unshift(0);
console.log("unshift(0):", numeros);
numeros.shift();
console.log("shift():", numeros);


numeros.splice(2, 0, 'nuevo');
console.log("splice(2, 0, 'nuevo'):", numeros);

let porcion = numeros.slice(1, 4);
console.log("slice(1, 4):", porcion);
console.log("Original:", numeros);