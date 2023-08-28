//WAP for fibonacci series using recursion and iteration both
//base case f(0)=0 and f(1)=1;

// const fibonacci=(n)=>{
//     if(n < 2){
//         return 1;
//     }
//      return fibonacci(n-2)+fibonacci(n-1);
// }
// console.log(fibonacci(10))

function fibonacci(n) {
    if (n < 2){
        return n;
    } else {
        var num= fibonacci(n-2) + fibonacci(n-1);
    }
    return num%10;
}

console.log(fibonacci(7)); //Returns 21

function getLastDigit(index) {
    // write your code below. Good luck!
  if(index<=1){
    return index;
  }
  let num = getLastDigit(index-1)+getLastDigit(index-2);
  return num%10 ;
}
console.log(getLastDigit(7))

