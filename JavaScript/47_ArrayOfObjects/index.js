const fruits = [
    {name:"apple",color:"red",calories:95},
    {name:"orange",color:"orange",calories:45},
    {name:"banana",color:"yellow",calories:105},
    {name:"coconut",color:"white",calories:159},
    {name:"pineapple",color:"yellow",calories:37},
]

// console.log(fruits[1].name)
// console.log(fruits[1].color)
// console.log(fruits[1].calories)

// fruits.push({name:"grapes",color:"purple",calories:62})
// fruits.pop()
// fruits.splice(1,2)

// console.log(fruits)

// ----------------------- forEach() ----------------------
// fruits.forEach(fruits => console.log(fruits.name))

// ----------------------- map() ----------------------
// const fruitNames = fruits.map(fruits => fruits.name)
// const fruitColor = fruits.map(fruits => fruits.color)
//
// console.log(fruitNames)
// console.log(fruitColor)

// ----------------------- filter() ----------------------
// const yellowFruits = fruits.filter(fruits => fruits.color === "yellow");
// const lowCalFruits = fruits.filter(fruits => fruits.calories < 100);
// const highCalFruits = fruits.filter(fruits => fruits.calories >= 100);
//
// console.log(yellowFruits)
// console.log(lowCalFruits)
// console.log(highCalFruits)

// ----------------------- reduce() ----------------------
const maxFruits = fruits.reduce((max,fruits) => fruits.calories > max.calories ? fruits:max)
const minFruits = fruits.reduce((min,fruits) => fruits.calories < min.calories ? fruits:min)
console.log(maxFruits);
console.log(minFruits);

