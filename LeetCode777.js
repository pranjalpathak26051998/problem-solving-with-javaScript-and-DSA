// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".
function numJewelsInStones(jewels, stones) {
 let hasJewelMap=new Map();
 let count=0;
 // create a hashMap for jewels
 for(let j in jewels){
    hasJewelMap.set(jewels[j],j++)
 }

 // creating hashMap for stones
 for(let s of stones){
    if(hasJewelMap.has(s)){
        count++;
    }
 }
 return count
};
console.log(numJewelsInStones('Ba','aAbbb'))


