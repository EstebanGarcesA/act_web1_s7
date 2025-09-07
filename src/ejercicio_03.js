const estudiantes = [
    {id:1, nombre:`manuela`, edad: 22,notas:[90, 75, 24]},
    {id:2, nombre:`esteban`, edad: 18, notas:[50, 20, 40]},
    {id:3, nombre:`karol`, edad: 15, notas:[75, 95, 70]},
    {id:4, nombre:`miguel`, edad:37, notas:[47, 85, 100]}
]

const nombres = estudiantes.map(estudiante => estudiante.nombre)
const estudiantesPromedio = estudiantes.map ( estudiante => {
    const suma = estudiante.notas.reduce((total, nota) => total + nota, 0);
    const promedio = suma/estudiante.notas.length;

    return{
        nombre: estudiante.nombre,
        promedio: parseFloat(promedio.toFixed(2))
    };
});

const resultadoCompleto = estudiantesPromedio.map(estudiante => ({
    nombre: estudiante.nombre,
    resultado: estudiante.promedio >= 70 ? "Aprobó" : "No aprobó"
}));
console.log(nombres);
console.log(estudiantesPromedio);
console.log(resultadoCompleto);




