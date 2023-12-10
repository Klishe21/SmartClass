const contenedorCards = document.querySelector("#contenedor-cards");
const listaAlumnos = document.querySelector("#lista-alumnos");
const botonesMenu = document.querySelectorAll(".boton-menu")

// FUNCION ENCARGADA DE GENERAR CARDS DE ALUMNOS
function cargarCards() {
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
cargarCards()

//FUNCION ENCARGADA DE ACTUALIZAR LOS FILTROS DE ALUMNOS
function filtrarNombres () {
    alumnos.forEach ( alumnos => {
        const ul = document.createElement ("ul")
        ul.innerHTML = `
            <li><button class="boton-main">${alumnos.name}</button></li>
        `
        listaAlumnos.append(ul)
    })
}
filtrarNombres()

//FUNCION ANONIMA ENCARGADA DE QUITAR Y PONER LA CLASE ACTIVE DEL ASIDE
botonesMenu.forEach( boton =>{
    boton.addEventListener("click" , (e) =>{

        botonesMenu.forEach( boton => boton.classList.remove("active"))

        e.currentTarget.classList.add("active")
    })
})

