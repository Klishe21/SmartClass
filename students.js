// const Students = [{
//     name: "Micaela" ,
//     price : 70
//     },
// {
//     name: "Valentina" ,
//     price : 90
// },
// {
//     name: "Rodrigo" ,
//     price : 80
// },
// {
//     name: "Santiago" ,
//     price : 80
    
// },
// {
//     name: "Camila" ,
//     price : 70
// },
// {
//     name: "Micaela" ,
//     price : 70
//     }]
class Student {
    constructor(name, price){
        this.name = name
        this.price = price
        this.history = []
    }
    getName(){
    return this.name
    }
    getPrice(){
        return this.price
    }
    getHistory(){
        return this.history
    }
    setName(newName){
        this.name = newName
    }
    setPrice(newPrice){
        this.price = newPrice
    }
    setHistory(newHistory){
        this.history = newHistory
    }
}