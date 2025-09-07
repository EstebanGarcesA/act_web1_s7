const productos = [
    {id:1, nombre:`manzana`, precio:200, categoria:`fruta`, stock:10},
    {id:2, nombre:`pera`, precio:300, categoria:`fruta`, stock:5},
    {id:3, nombre:`cebolla`, precio:400, categoria:`verdura`, stock:4},
    {id:4, nombre:`papa`, precio:500, categoria:`tuberculo`, stock:8}
]
function valorTotalInventario() {
    return productos.reduce((total, producto) => total + (producto.precio * producto.stock), 0);
}
console.log(productos);
console.log(`EL total de productos del inventario es: ${productos.length}`);
console.log(`valorTotalInventario()`);




