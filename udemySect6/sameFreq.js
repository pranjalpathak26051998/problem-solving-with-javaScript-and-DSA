// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// let x=123
// console.log(`x=${x}, is a ${typeof x}`)
// let str= x.toString()  
// console.log(`str=${str}, is a ${typeof str}`)

function sameFrequency(a,b){
    a=a.toString()
    b=b.toString()
    hasMap1= new Map()
    hasMap2= new Map()
    for(let item of a){
        if(hasMap1.has(item)){
            hasMap1.set(item,hasMap1.get(item,hasMap1.get(item,1)))
        }else{
            hasMap1.set(item,1)
        }
    }

    for(let item of b){
        if(hasMap2.has(item)){
            hasMap2.set(item,hasMap2.get(item,hasMap2.get(item,1)))
        }else{
            hasMap2.set(item,1)
        }
    }

    if(hasMap1.size !== hasMap2.size){
        return false
    }

    for(let [key,value] of hasMap1){
        if(hasMap2.get(key) !== value){
            return false;
        }
    }
    return true
}
console.log(sameFrequency(123,321))

