
// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

function isPalindrome(s){
    if(s.length<=1) return true;
    if(s[0]===s[s.length-1])
    {
        return isPalindrome(s.slice(1,-1))
    }
    return false
   
}

console.log(isPalindrome("1331"))
console.log(isPalindrome("Pranjal"))
console.log(isPalindrome("racecar"))

let str="Pranjal"
console.log(str.slice(1,-1))