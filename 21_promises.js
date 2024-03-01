// const firstPromise=new Promise(function(resolve, reject){
//     // do an ASync task
//     // DB calls, Network , file handlimg
//     setTimeout(function(){
//         console.log("Async task is completed")
//         resolve()
//     },1000)
    
// })

// firstPromise.then(function(){

//     console.log("promise consumed")
// })



// new Promise(function(resolve, reject){
//     setTimeout(function(){
//             console.log("js task is completed")
//             resolve()
//     },1000)
// }).then(function(){
//     console.log("js is consumed")
// })




// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"Anirudha Desai", id:457, Company:"capg"})   // return the value to then
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user)
//     console.log(user.username)
// })






// const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false //true
        

//         if(!error){    // check it with false
//             resolve({UserName:"Ani" , Id:456})
//         }
//         else{
//             reject("error occoured")
//         }
     
    
//     },2000)
// })
// promiseFour
// .then(function(user){
//         return user.UserName
// })
// .then(function(username){
//     console.log(username)
// })
// .catch(function(error){
//     console.log(error)
// })
// .finally(function(){
//     console.log("The promise is either resolved or rejected")
// })




// const promioseFive=new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error=false // if condition is true then error occoures catch not found like thats why use try and catch block
//         if(!error)
//         {
//             resolve({Username:"Desai Ani", Id:4578, email:"desaiani@google.com"},)
//         }
//         else{
//             reject("error occoured")
//         }
//     },1000)

// })

// async function consumePromiseFive(){
//    const response =await promioseFive
//    console.log(response)
// }
// consumePromiseFive()




// how to use async by using try and catch block

const promiseSix=new Promise(function(resolve, reject){
    setTimeout(function(){
        let val=true   // false
        if(!val){
            resolve({Comapany:"CG", Location:"Pune"})
        }
        else{
            reject("error occourd")
        }
    },1000)
})

async function consumePromiseSix(){
    try {
      const consumeSix  =await promiseSix
      console.log(consumeSix)
    } catch (error) {
        console.log(error)
    }
}
//consumePromiseSix()



//  +++++++++++++     fetch +++++++


async function asyncFetch(){
    try{
        const resp  =await fetch('https://jsonplaceholder.typicode.com/users')
        const data =await resp.json()
        console.log(data)
    }
    catch(error){
        console.log("error occoured", error)
    }
}
asyncFetch()




fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))


