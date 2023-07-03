// ------write a program to find unique Values in an array using multiple pointer method
function countUnique(arr){
    let i=0;
    let j=1;
    while(j<arr.length){
        if(arr[i]===arr[j]){
            j++
        }
        else if(arr[i]!==arr[j] && arr[i]<arr[j]){
            arr[i+1]=arr[j]
            i++;
        }
        
    }
   if(i!=0) {return i+1 }else {return 0;}
}
console.log(countUnique([1,1,1,1,2,3,4,5]))
console.log(countUnique([1,1,1,1,1,2]))
console.log(countUnique([]))
console.log(countUnique([-2,-1,-1,0,1]))