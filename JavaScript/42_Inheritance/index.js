// inheritance =  allws new calss to inherit properties and methods
//                  from an exsisting calss (parent -> child)
//                  helps with code reusability

class Animal{
    alive = true
    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    name = "rabbit";
    run(){
        console.log(`This ${this.name} is running`)
    }
}

class Fish extends Animal{
    name = "fish";
    swim(){
        console.log(`This ${this.name} is swimming`)
    }
}

class Hawk extends Animal{
    name = "hawk";
    fly(){
        console.log(`This ${this.name} is fliying`)
    }
}

const rabbit  = new Rabbit();
const fish  = new Fish();
const hawk  = new Hawk();

console.log(rabbit.alive);
rabbit.eat()
rabbit.sleep()
rabbit.run()

console.log(fish.alive);
fish.eat()
fish.sleep()
fish.swim()

console.log(hawk.alive);
hawk.eat()
hawk.sleep()
hawk.fly()
