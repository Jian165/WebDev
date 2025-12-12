// getter = special method that makes a property readable
// setter = special method that makes a property writeable 
//
// validate and modify a value when reading/writing a property 

class Rectangle{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("Width must be a postive number");
        }
    }

    get width(){
        return `${this._width.toFixed(1)}cm`;
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("Height must be a postive number");
        }
    }

    get height(){
        return `${this._height.toFixed(1)}cm`;
    }

    get area(){
        return `${(this._width * this._height).toFixed(2)}cm^2`
    }

}

const rectangle = new Rectangle(3,4)
console.log(rectangle.width)
console.log(rectangle.height)
console.log(rectangle.area)

console.log("_________________________________________")

class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error("First name must be a non-empty string")
        }
    }

    get firstName(){
        return this._firstName;
    }

    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else{
            console.error("Last name must be a non-empty string")
        }
    }

    get lastName(){
        return this._lastName;
    }


    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
            this._age = newAge;
        }
        else{
            console.error("age must be a nun-negateive number")
        }
    }

    get age(){
        return this._age;
    }

    get fullName(){
        return this._firstName +" "+this._lastName;
    }

}

const person = new Person("Spongebob","Squarepants",30)
console.log(person.firstName)
console.log(person.lastName)
console.log(`Full Name:${person.fullName}`)
console.log(person.age)


