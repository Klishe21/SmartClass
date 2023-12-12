const Students = [{
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
    
},
{
    name: "Camila" ,
    price : 70
},
{
    name: "Micaela" ,
    price : 70
    }]
class Student {
    constructor(name, price, history){
        this.name = name
        this.price = price
        this.history = history
    }
} 
const iconStudent = document.getElementById("addStudent")
iconStudent.addEventListener("click", () => {
    const validacion = confirm("Desea agregar a un alumno nuevo?")
    if (validacion === true) {
    console.log("creado")        
    } else {
        console.log("no creado")
    }
})

