

function pintar(mensaje){
  setTimeout(()=> document.body.innerHTML = `<li>te devuelvo ${mensaje}</li>`
      ,1000)
}

const calculoInteres = (valor,interes)=>Number((valor+valor*interes).toFixed(2))

function crearPrestamo(prestamo,interes){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const error = false
      if(!error){
        resolve(calculoInteres(prestamo,interes))
      }else{
        reject("No te conozco")
      }
    })
  })
}
crearPrestamo(1000,0.1)
  .then(pintar)
  .catch(err=>console.log(err))


/* createPost({title:"Post three", body:"Awesome post "})
  .then(getPosts)
  .catch(err=>console.log(err))
 */

// try{
//   await createPost({title:"Post Three", body:"Awesome post"})
//   getPosts()
// }catch(err){
//   console.log(err)
// }