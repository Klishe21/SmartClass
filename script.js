// calendario
const currentDate = document.querySelector(".current-date");

let date = new Date();

let currentYear = date.getFullYear();
let currentMonth = date.getMonth();

const months = ["Enero" , "Febrero" , "Marzo" , "Abril" , "Mayo" , "Junio" , "Julio" , 
                "Agosto" , "Septiembre", "Octubre" , "Nomviembre", "Diciembre"]

console.log(date)
console.log(currentYear)
console.log(currentMonth)

const renderCalender = () => {
currentDate.innerText=`${months[currentMonth]} ${currentYear}`
}
renderCalender();