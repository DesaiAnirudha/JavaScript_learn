

for(let i=1; i<=10;i++){
    if(i==5){
       // console.log(`the value is equals to ${i}`)
}
//console.log(i)
}


for(let i=1; i<=10; i++){
   // console.log(`inner loop value is ${i}`)
         for(let j=1;j<3;j++)
         {
            // console.log(`outer loop value is ${j}`)
            // console.log(`${i}*${j}  =${i*j}`)

         }
}



let arr=["Doremon", "Nobita", "Jiyan"]

for(let i=0;i<arr.length;i++){
    let element=arr[i]
   // console.log(element)
}



// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
   console.log(`Value of i is ${index}`);
    
}


for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}