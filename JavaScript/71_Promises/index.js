// Promise = An object that manages asynchronous operatons.
//          wrap an promise object around (asynchronouse code)
//          "I promise to return a value"
//          PENDING => resulved or rejected
//          new Promise((resolve, reject) -> {asynchronous code})


/*
function walkdog(callback){
    setTimeout(() =>{
        console.log("you walk the dog")
        callback();
    },1500)
}

function cleanKitchen(callback){
    setTimeout(() =>{
        console.log("you clean the kitchen")
        callback();
    },2500)
}

function takeOutTrash(callback){
    setTimeout(() =>{
        console.log("you take out the trash")
        callback();
    },500)
}

walkdog(() =>{
    cleanKitchen(()=>{
        takeOutTrash(() =>{
            console.log("you finished all the chores!")
        })
    })
})
*/

function walkdog(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            const dogwalked = false;
            if(dogwalked){
                resolve("you walk the dog")
            }
            else{
                reject("you didn't walk the dog")
            }
        },1500)
    });
}

function cleanKitchen(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            const kitchenCleaned = true;
            if(kitchenCleaned){
                resolve("you clean the kitchen")
            }
            else{
                reject("you didn't clean the kitchen")
            }
        },2500)
    });
}

function takeOutTrash(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{

            const trashTakenOut = false;
            if(trashTakenOut){
                resolve("you take out the trash")
            }
            else{
                reject("you didn't take out the trash")
            }

        },500)
    });
}

walkdog()
    .then(value => {
        console.log(value); return cleanKitchen()
    }) 
    .then(value => {
        console.log(value); return takeOutTrash()
    })
    .then(value => {
        console.log(value); 
        console.log("You finished all the chores")
    })
    .catch(error =>{
        console.error(error)
    });


