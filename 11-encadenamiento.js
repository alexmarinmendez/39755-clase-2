const pA = new Promise(function (resolve, reject) {
    resolve("Resuelve al valor de A")
    // reject('Error en A')
})

pA  // resolve => "Resuelve al valor de A"
.then() // resolve => "Resuelve al valor de A"
.then() // resolve => "Resuelve al valor de A"
.then(function(value) {     // resolve => "Resuelve al valor de A"
    console.log("1. ", value)
})
.then() // resolve => undefined
.then(function(value) { // resolve => undefined
    console.log("2. ", value)
    return { nombre: 'Alex' }
})
.then(function(value) { //resolve => obj
    console.log("3. ", value)
})