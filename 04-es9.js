const obj1 = {
    propiedad1: 1,
    propiedad2: 2,
    propiedad3: 3
}

const obj2 = {
    propiedad4: 4,
    propiedad5: 5,
}

// obj3 = {
//     propiedad1: 1,
//     propiedad2: 2,
//     propiedad3: 3,
//     propiedad4: 4,
//     propiedad5: 5,
// }

let obj3 = { ...obj1, ...obj2 }
// console.log(obj3)

console.log(obj2.propiedad5)

// destructuring
let { propiedad5 } = obj2
console.log(propiedad5)