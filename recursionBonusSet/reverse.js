// Write a recursive function called reverse which accepts a string and returns a new string in reverse
// ---------------iterative solution-------
function revString(s){
    let arr=[];
    for(let i=s.length-1;i>=0;i--){
        arr.push(s[i]);
    }
    return arr.join('')
}
console.log(revString("Pranjal"))

/////-----------trying using recursion---------------
function reverseString(s,i=0){
    if(i === s.length){ return ''};

    return reverseString(s,i+1) + s[i];
}
console.log(reverseString("Pathak"))


