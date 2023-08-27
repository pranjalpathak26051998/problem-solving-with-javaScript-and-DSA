let brushteeth=()=>{
    return "Teeth is Brushed";
}

let bathing=()=>{
    return "Bathing is done";
}

let praying=()=>{
    return "Praying done"
}

let breakfast=()=>{
    let items=["roti", "omelette", "naan", "chowmein", "Maggi"];
    let randomBreakFast= Math.floor(Math.random()*items.length);
    return randomBreakFast
}

let wakeup=()=>{
    brushteeth();
    bathing();
    praying();
    breakfast;

    return "Off to Office"
}
wakeup()
console.log(wakeup())

// let items = ["roti", "omelette", "naan", "chowmein", "Maggi"];

// // Generate a random index within the range of the array length
// let randomIndex = Math.floor(Math.random() * items.length);

// // Get the random element from the array
// function randomItem(){
//     let randomName=[]
// for(let i=0;i<9;i++){
// let randomItem = items[randomIndex];
// return randomName.push(randomItem)
// }
// }
// console.log(randomItem())
// // console.log("Random item:", randomItem());