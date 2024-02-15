// forof

const arr=[1,2,3,4,5]
for (const val of arr) {
   // console.log(val)
    
}

const welcome="Hello Js users"
for (const val2 of welcome) {
    //console.log(val2)
}


const map = new Map()
map.set('in',"india")
map.set('Aus',"australia")
map.set('Nz',"new zealand")

for (const key of map) {
    //console.log(key)
}

for (const [key,value] of map) {
   // console.log(key, ':-', value)
    
}



const myGame={
    indoor:"chess",
    outdoor:"cricket"
}


// for (const key of myGame) {
//     console.log(key)
// }

for (const [key,value] of myGame) {
    console.log(key, ":-",value)
    
}
