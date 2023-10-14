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
    
},
{
    name: "Camila" ,
    price : 70
}]

const contenedorCards = document.querySelector("#contenedor-cards");


// FUNCION ENCARGADA DE GENERAR CARDS DE ALUMNOS
function cargarNombre() {
    alumnos.forEach( alumnos =>{
        const div = document.createElement("div")
        div.classList.add("resumen-estudiantes-card")
        div.innerHTML = `
            <div class="nombre">
				<h2>${alumnos.name}</h2>
				<p>Precio X Hra : S/ ${alumnos.price}</p>
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
				<span id="prev"> <i class="bi bi-plus-circle"></i></span>
			</div>
        `
        contenedorCards.append(div)
    })
} 
cargarNombre()
