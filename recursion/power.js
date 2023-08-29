// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.


//by iterative 
function power(b,e){
    let total=1
    if(b===0){
        return 0;
    }else if(e===0){
        return 1;
    }else{
        for(let i =1;i<=e;i++){
            total=total*b;
        }
    }
    return total;
}
console.log(power(2,5))
// ------------------------------------------------------------------------------
//now by recursive;

function power(b,e){
    if(b===0) return 0;
    if(e===0) return 1;
    //base case done
    return b*power(b,e)
}