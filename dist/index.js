"use strict";
const e1 = {
    firstName: "Santiago",
    lastName: "Galindo",
    address: {
        ad: "Carrera 5 # 12-34",
        city: "Bogotá",
        country: "Colombia"
    }
};
const e2 = {
    firstName: "David",
    lastName: "Giron",
    age: 25,
    address: {
        ad: "Calle 15 # 56-78",
        city: "Caracas",
        country: "Venezuela"
    }
};
const e3 = {
    firstName: "Jose",
    lastName: "Borda",
    age: 19,
    address: {
        ad: "Calle 235 # 55-28",
        city: "CDMX",
        country: "Mexico"
    }
};
// Funcion para mostrar la info del estudiante
// version declarativa
const mostrarEstudiante = (estudiante) => {
    const { firstName, lastName } = estudiante;
    return `Nombre de estudiante: ${firstName} 
Apellido: ${lastName}`;
};
// console.log(mostrarEstudiante(e1));
//Arreglos 
//Crear un arreglo de estudiantes:
// Arreglo de estudiantes
let estudiantes = [];
// Función para agregar estudiante al arreglo
const agregarEstudiante = (nuevoEstudiante) => {
    estudiantes.push(nuevoEstudiante);
};
const eliminarEstudiante = (age) => {
    estudiantes = estudiantes.filter(estudiante => estudiante.age !== age);
};
agregarEstudiante({
    firstName: "Marta",
    lastName: "Jimenez",
    age: 34,
});
agregarEstudiante({
    firstName: "Antonio",
    lastName: "Novoa",
    age: 31,
});
eliminarEstudiante(31);
console.log(estudiantes);
