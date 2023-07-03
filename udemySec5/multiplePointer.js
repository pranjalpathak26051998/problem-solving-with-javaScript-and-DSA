// brute -force technique

const sumZero=(arr)=>{
    for(let i =0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==0){
                return [arr[i],arr[j]]
            }
        }
    }
    return "no such pairs exists"
}
console.log(sumZero([-3,-2,-1,0,2,4]))
// -----------------------------------------------------------------------------

// now solve using multiple pointers---
function sumZero1(arr){
    let left=0;
    let right=arr.length-1

    while(left<right){
        let sum= arr[left]+arr[right]
        if(sum===0) return [arr[left],arr[right]]
        else if(sum<0) left++;
        else if(sum>0) right--
    }
    return "No such pairs exists"
}
console.log(sumZero1([-3,-2,-1,0,2,4]))