
// closure =  a function defined inside another function,
//              the innter function has access to the variables
//              and scopes of outer function.
//              Allows for private variables and state maintenance
//              Used frequently in JS frameworks:React, Vue, Angular

function outer(){
    let message = "Hello";
    function inner(){
        console.log(message)
    }
    inner();
}
message = "Goodbye"
outer()

console.log("------------ Example 2 ---------------")


function createCounter(){

    let count = 0;

    function increment(){
        count++;
        console.log(`Count increased to ${count}`)
    }

    function getCount(){
        return count;
    }

    return {increment,getCount};
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();

console.log(`The current count is ${counter.getCount()}`);

console.log("------------ Example 2 ---------------")

function createGame(){

    let score = 0;
    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`)
    }

    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`)
    }

    function getScore(){
        return score;
    }
    
    return{increaseScore,decreaseScore,getScore}
}

const game = createGame()
game.increaseScore(5)
game.increaseScore(6)
game.decreaseScore(3)
console.log(`The final score is ${game.getScore()}pts`)

