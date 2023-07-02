
function productOfN(n){
    //base condition
    if(n<=0)return 1
    // recursive condition
    return n*productOfN(n-1)
}
//console.log(productOfN(5))


res=(m)=>{
    if(m>100)return 5*m
    else return "does not match the condition"
}
console.log(res(productOfN(4)))
// -----------------------------------------
// let num=1231
// function product(num)
// {    let str = num.toString()
//     let res=1
//     for(let i=0;i<str.length;i++){
//         res *=str[i]
//     }
  
// return res
// }
// console.log(product(1231))
// -----------------------------------------------
function prodRecur(nums){
    //base condition
    if(nums<1)return 1
    //recursive condition
    let a=(nums%10)  //--  a=1
    // 123     1
    let b= Math.floor(nums/10)
    //let b=Math.floor((nums/10)%10)
    return a*prodRecur(b)
}
console.log(prodRecur(1))
