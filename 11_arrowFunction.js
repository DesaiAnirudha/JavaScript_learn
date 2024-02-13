// const userVal={
//     username:"Anirudha",
//     id:545,
//     userInfo:function(){
//         console.log(`welcome to js ${this.username}`)
//         console.log(this)
//     }
// }
// // userVal.userInfo();
// // userVal.username="sami"
// // userVal.userInfo();
// console.log(this)// u have to use in browser environment....global object is window object



// function ArrowFn(){
//     let user="ani desai"
//     console.log(this.user)// undefined
// }
// ArrowFn()



// const learnJS= function() {
//     let user2="ani desai"
//     console.log(this.user2)
// }
// learnJS()


// const learnjs=()=>{
// let value=456
// console.log(this.value)
// }
// learnjs()


// // const SumTwo=(a,b)=>{
// //     return a+b
// // }

// // console.log(SumTwo(45,569))



// const SumTwo=(a,b)=> a+b//(a+b) return a+b
// console.log(SumTwo(45,45))



// const obj=()=>({user:"ani"})

//console.log(obj())





//            +++++++++++++ IIFE ++++++++++++++

// (function chai(){

//     console.log(`DB connected`);
    
//     })();



(function chai22(){
    // named IIFE
    console.log("DB CONNECTED");
})();


((username)=>{
console.log(`db connected,${username}`)
})("Anirudha");