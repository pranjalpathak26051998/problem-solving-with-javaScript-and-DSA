// // ------write a program to find unique Values in an array using multiple pointer method
// function countUnique(arr){
//     let i=0;
//     let j=1;
//     while(j<arr.length){
//         if(arr[i]===arr[j]){
//             j++
//         }
//         else if(arr[i]!==arr[j] && arr[i]<arr[j]){
//             arr[i+1]=arr[j]
//             i++;
//         }        
//     }
//    if(i!=0) {return i+1 }else {return 0;}
// }
// console.log(countUnique([1,1,1,1,2,3,4,5]))
// console.log(countUnique([1,1,1,1,1,2]))
// console.log(countUnique([]))
// console.log(countUnique([-2,-1,-1,0,1]))

// // ------------------------------------------------------------------
function countUniqueValues(a){
    // add whatever parameters you deem necessary - good luck!
    let hasMap=new Map()
    for(let item of a)
    {
        if(hasMap.has(item))
        {
            hasMap.set(item,hasMap.get(item)+1)
        }else
        {
            hasMap.set(item,1)
        }
    }
   // console.log(hasMap)
    const keys= Array.from(hasMap.keys()).length
   // console.log(keys)
    return keys
  }
  console.log(countUniqueValues([1,1,1,1,2,2,3,3]))
  
  
  
  