//WAP to find the factorial using recursion in JS
//ALGO.  1) Identify base case:  0!==1 

const factorial=(n)=>{ return (n===0)?1:n*factorial(n-1);} 
console.log(factorial(5));


function factoRec(num){
    
    if(num<=1) return 1;
    return num* factoRec(num-1);
    
}
console.log(factoRec(5));

// ------------------------------------------------------------------------------