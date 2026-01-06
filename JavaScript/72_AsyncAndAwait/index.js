// Asnyc =  Async = makes a function return a promise 
//          Await = makes an async function wait for a promise
//
//          Allows you to write asynchronous code in a synchronous manner
//          Async doesn't have resloved or reject parameters
//          everything after Await is paclced in an event queue



function walkdog(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            const dogwalked = true;
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
            // const kitchenCleaned = false;
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
            const trashTakenOut = true;
            if(trashTakenOut){
                resolve("you take out the trash")
            }
            else{
                reject("you didn't take out the trash")
            }
        },500)
    });
}

async function doChores(){
    try{
        const walkDogResult = await walkdog();
        console.log(walkDogResult)

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult)

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult)

        console.log("You finished all the chores!")
    }
    catch(error){
        console.error(error)
    }
}

doChores()

