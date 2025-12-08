// static = Keyword that defines properties or method that belong to a class it self rather than the onbjects created
//          form that class (class owns anything static, not the object)

class MathUtil{
    static PI =  3.14159;

    static getDiameter(radius){
        return radius * 2;
    }

    static getcircumference(radius){
        return 2* this.PI * radius;
    }

    static getArea(radius){
        return this.PI*radius*radius;
    }
}

console.log(MathUtil.PI)
console.log(MathUtil.getDiameter(10))
console.log(MathUtil.getcircumference(10))
console.log(MathUtil.getArea(10))
console.log("_______________________________________________")

class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users Online`)
    }

    sayHello(){
        console.log(`Hello, my username is ${this.username}`)
    }

}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");

console.log(user1.username)
user1.sayHello();
console.log(user2.username)
user2.sayHello();
console.log(user3.username)
user3.sayHello();
User.getUserCount();
console.log(User.userCount)
