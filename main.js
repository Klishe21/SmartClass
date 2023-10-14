let alumnos = [{
    name: "Micaela" ,
    price : 70
    },
{
    name: "Valentina" ,
    price : 90
},
{
    name: "Rodrigo" ,
    price : 80
},
{
    name: "Santiago" ,
    price : 80
}]

const prev = document.querySelectorAll(".add-lesson span");
function cargarNombre() {
    alumnos.forEach( alumnos =>{
        const div = document.createElement("div")
        div.classList.add("nombre")
        div.innerHTML = `
            <h2>${alumnos.name}</h2>
            <p>Precio X Hra : S/ ${alumnos.price}</p>
        `
    })
} 

console.log(nombres)

