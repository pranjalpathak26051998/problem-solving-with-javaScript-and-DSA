// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
function areThereDuplicates(){
    console.log(arguments)
 let x=[...arguments].sort((a,b)=>a-b)
 let start=0;
 let next =1;
 while(next<x.length){
    if(x[start]==x[next]){
        return true
    }
    start++;
    next++; 
 }
  return false
}
console.log(areThereDuplicates(1,2,3,5,2))

