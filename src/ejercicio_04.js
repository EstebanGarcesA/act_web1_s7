const ventas = [
    {producto: "Laptop Dell", cantidad: 2, precio: 1200.50, fecha: new Date('2024-01-15')},
    {producto: "Mouse Logitech", cantidad: 5, precio: 25.99, fecha: new Date('2024-01-16')},
    {producto: "Teclado Mecánico", cantidad: 3, precio: 89.99, fecha: new Date('2024-01-20')},
    {producto: "Monitor 24''", cantidad: 1, precio: 299.99, fecha: new Date('2024-02-01')},
    {producto: "Laptop HP", cantidad: 7, precio: 1500.50, fecha: new Date('2024-02-05')}
];

const totalIngresos = ventas.reduce((total, venta) => {
    return total + (venta.cantidad * venta.precio);
},0);

const masVendido = ventas.reduce((max,actual)=>actual.cantidad > max.cantidad ? actual:max);

const {totalVentas, totalTransacciones} = ventas.reduce((acumulador, venta) => {
    return {
        totalVentas: acumulador.totalVentas + (venta.cantidad * venta.precio),
        totalTransacciones: acumulador.totalTransacciones + 1
    };
}, {totalVentas: 0, totalTransacciones: 0});

const promedioVenta = totalVentas / totalTransacciones;



console.log("\nTotal de Ingresos:\n", totalIngresos.toFixed(2));
console.log("\nEL producto mas vendido es:\n",masVendido);
console.log("Promedio por transacción:", promedioVenta.toFixed(2));
