//create an array of fruits
const fruits =['apple','banana','apple','orange','apple']
//create a function to count the frequency of each element in an array
function countFrequency(arr){
    //create a new Map object
     const map = new Map();
     //loop through the array
     for(let i of arr)
     {
        //check if the element exist in the given array
        if(fruits[i]){
            map.set(i,map.get(i)+1)
        }
        else{
            map.set(i,1)
        }
}
return map
}


console.log(countFrequency(fruits))