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
        const name = prompt("1. Agrege nombre completo")
        const price = prompt("2. Agrege el valor de la hora de clase")
        alert("ALUMNO CREADO CON EXITO")
        const student = new Student(name, price, [])
        const div = document.createElement("div")
        div.classList.add("resumen-estudiantes-card")
        div.innerHTML = `
            <div class="nombre">
				<h2>${name}</h2>
				<p>Precio X Hra : S/ ${price}</p>
			</div>
			<div class="resumen-clases">
				<div class="resumen-estudiantes-card-actual">
					<h3>Actual</h3>
				</div>
				<div class="resumen-estudiantes-card-acumulado">
					<h3>Acumulado</h3>
				</div>
			</div>
			<div class="add-lesson">
				<h3>Agregar Clase</h3>
				<span id="iconPlus"> <i class="bi bi-plus-circle"></i></span>
			</div>
        `
        contenedorCards.append(div)
    }
})