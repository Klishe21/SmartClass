const contenedorCards = document.querySelector("#contenedor-cards");
const listaStudents = document.querySelector("#lista-Students");
const botonesMenu = document.querySelectorAll(".boton-menu")
const container = []
// FUNCION ENCARGADA DE GENERAR CARDS DE Students
// function cargarCards() {
//     Students.forEach( Students =>{
//         const div = document.createElement("div")
//         div.classList.add("resumen-estudiantes-card")
//         div.innerHTML = `
//             <div class="nombre">
// 				<h2>${Students.name}</h2>
// 				<p>Precio X Hra : S/ ${Students.price}</p>
// 			</div>
// 			<div class="resumen-clases">
// 				<div class="resumen-estudiantes-card-actual">
// 					<h3>Actual</h3>
// 				</div>
// 				<div class="resumen-estudiantes-card-acumulado">
// 					<h3>Acumulado</h3>
// 				</div>
// 			</div>
// 			<div class="add-lesson">
// 				<h3>Agregar Clase</h3>
// 				<span id="iconPlus"> <i class="bi bi-plus-circle"></i></span>
// 			</div>
//         `
//         contenedorCards.append(div)
//     })
// } 
// cargarCards()

//FUNCION ENCARGADA DE ACTUALIZAR LOS FILTROS DE Students
// function filtrarNombres () {
//     Student.forEach ( Students => {
//         const ul = document.createElement ("ul")
//         ul.innerHTML = `
//             <li><button class="boton-main">${Students.name}</button></li>
//         `
//         listaStudents.append(ul)
//     })
// }
// filtrarNombres()

//FUNCION ANONIMA ENCARGADA DE QUITAR Y PONER LA CLASE ACTIVE DEL ASIDE
botonesMenu.forEach( boton =>{
    boton.addEventListener("click" , (e) =>{
        botonesMenu.forEach( boton => boton.classList.remove("active"))
        e.currentTarget.classList.add("active")
    })
})

//FUNCION ENCARGADA DE AGREGAR UNA CLASE DICTADA
const iconPlus = document.querySelectorAll("#iconPlus")
iconPlus.forEach(icon =>{
    icon.addEventListener("click", () =>{
        console.log(container)
    })
})