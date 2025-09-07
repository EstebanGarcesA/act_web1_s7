const productos = [
    {id:1, nombre:`manzana`, precio:200, categoria:`fruta`, stock:10},
    {id:2, nombre:`peraaaaa`, precio:100, categoria:`fruta`, stock:5},
    {id:3, nombre:`laptop`, precio:700, categoria:`electronicos`, stock:20},
    {id:4, nombre:`celular`, precio:600, categoria:`electronicos`, stock:8}
]

const electronicos = productos.filter (electronico => electronico.categoria === `electronicos`);
const menor20 = productos.filter (menor => menor.stock < 10 )
const mayor500 = productos.filter (mayor => mayor.precio > 500)

console.log(electronicos);
console.log(menor20);
console.log(mayor500);

