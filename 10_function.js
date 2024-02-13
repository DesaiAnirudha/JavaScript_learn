function myName(){

console.log("Anirudha")

}

//myName();
//myName();



// function addTwoNumber(num1, num2){
// console.log(num1+num2)
// }
// addTwoNumber(52,45)



function addTwoNumber(num1, num2){
    // console.log(num1+num2)//.......undefined
    //return(num1+num2)
    }
   const val= addTwoNumber(52,45)
//    console.log(val)        //......undefined


// function loginUserMessage(username){

// return`${username} welcome to javascript`
// }
// console.log(loginUserMessage("anirudha"))



// function loginUserMessage(username="sam"){      //instead od if statement write sam
//     if(!username){
//         console.log("please enter username")
//     }
//     else{
//         return`${username} welcome to javascript`
//     }
    
//     }
   // console.log(loginUserMessage())
    //console.log(loginUserMessage("Anirudha"))




// function calculatePrice(...num1){   // num1 =>200rest operator

// return num1
// }
// console.log(calculatePrice(200,400,600,2000))


function calculatePrice(val1, val2, ...num1){   // num1=> 600, 2000

    return num1
    }
   // console.log(calculatePrice(200,400,600,2000))


    

// const user ={
//     username: "Anirudha Desai",
//     user_id: 455,
// }

// function get_value(anyobject){
//     return(`hii ${anyobject.username} your id is ${anyobject.user_id}`)
// }

// console.log(get_value(user))






function myCourese(anyobject){
    return(`hii course fee for FrontEnd Developer ${anyobject.price}`)
}

console.log(myCourese({
    price:499,
    name:"front end dev",
}))




// const newArray =[22, 24,26,56]
// function HandleArray(getArray){
//     return getArray[1]
// }

// console.log("the second value of array is", HandleArray(newArray))



function TravelAgency(getArray){
    return getArray[2]
}
   console.log( "the agency price ", TravelAgency([200,522,569,658]))
