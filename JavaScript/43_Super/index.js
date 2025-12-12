// super= keyword is use in classes to call the constructor or 
//          acess the properties and methods of a paren (supercalss)
//          this = this object
//          super = the parent

class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}mph`)
    }
}

class Rabbit extends Animal{
    constructor(name,age,runspeed){
        super(name,age);
        this.runspeed = runspeed;
    }

    run(){
        console.log(`This ${this.name} can run`)
        super.move(this.runspeed)
    }
}


class Fish  extends Animal{
    constructor(name,age,swimspeed){
        super(name,age)
        this.swimspeed = swimspeed;
    }

    swim(){
        console.log(`This ${this.name} can swim`)
        super.move(this.swimspeed)
    }
}
class Hawk  extends Animal{
    constructor(name,age,flyspeed){
        super(name,age)
        this.flyspeed = flyspeed
    }

    fly(){
        console.log(`This ${this.name} can fly`)
        super.move(this.flyspeed)
    }
}

const rabbit = new Rabbit("rabbit",1,25)
console.log(`Name:${rabbit.name},Age:${rabbit.age},RunSpeed:${rabbit.runspeed}`);
rabbit.run();

console.log("___________________________________________");

const fish = new Fish("fish",2,12)
console.log(`Name:${fish.name},Age:${fish.age},SwimSpeed:${fish.swimspeed}`);
fish.swim();

console.log("___________________________________________");
const hawk = new Hawk("hawk",3,50)
console.log(`Name:${hawk.name},Age:${hawk.age},FlySpeed:${hawk.flyspeed}`);
hawk.fly()


