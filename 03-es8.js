const impuestos = {
    IVA: 16,
    impuestoAlCarro: 40,
    impuestoALasCompras: 5
}

// console.log(Object.entries(impuestos))

// console.log(Object.keys(impuestos))

// console.log(Object.values(impuestos))

// const impuestosTotales = Object.values(impuestos).reduce((acc, item) => {
//     return acc + item
// })

const impuestosTotales = Object.values(impuestos).reduce((acc, item) => acc + item)

console.log(impuestosTotales)