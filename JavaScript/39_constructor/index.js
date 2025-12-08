// constructor =  special method for definding the properties

function Car(make,model,year,color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){console.log(`You Drive the ${this.model}`)}
}

const car1 = new Car("Ford","Musting",2024,"red")
console.log(car1.make)
console.log(car1.model)
console.log(car1.year)
console.log(car1.color)
car1.drive()

console.log("___________________________________")

const car2 = new Car("Chevrolet","Camaro",2025,"blue")
console.log(car2.make)
console.log(car2.model)
console.log(car2.year)
console.log(car2.color)
car2.drive()

console.log("___________________________________")

const car3 = new Car("Doge","Charge",2026,"silve")
console.log(car3.make)
console.log(car3.model)
console.log(car3.year)
console.log(car3.color)
car3.drive()
