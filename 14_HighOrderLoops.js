// ++++++++++++++     forof

const arr=[1,2,3,4,5]
for (const val of arr) {
 //console.log(val)
    
}

const welcome="Hello Js users"
for (const val2 of welcome) {
    //console.log(val2)
}


//const map = new Map()
// map.set('in',"india")
// map.set('Aus',"australia")
// map.set('Nz',"new zealand")

// for (const key of map) {
//     //console.log(key)
// }

// for (const [key,value] of map) {
//    // console.log(key, ':-', value)
    
// }


const myGame={
    indoor:"chess",
    outdoor:"cricket"
}


// for (const key of myGame) {
//     console.log(key)
// }



// for (const [key,value] of myGame) {
//    console.log(key, ":-",value)
    
// }




// ++++++++++++++ for in Loop ++++++++++++


const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}