function prime(num){
    let flag = true
     

    for(let i=2;i<num;i++){
        if(num%i===0) flag == false
    }
    if((num!=1 || num!=0) && flag==true){
    return "the given number is prime"}
    else if(flag==false) {return "the given num is not prime"}
}
console.log(prime(12))