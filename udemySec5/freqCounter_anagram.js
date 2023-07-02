// write a program to check whether the given input string is an anagram or not

var anagramCheck=(a,b)=>{
     a=a.split('').sort().join('')
     b=b.split('').sort().join('')
 let hasMap1=new Map();
 for(let item of a){
    if(hasMap1.has(item)){
        hasMap1.set(item,hasMap1.get(item)+1)
    }else{
        hasMap1.set(item,1)
    }
 }
 
 console.log(hasMap1)
 let hasMap2=new Map();
 for(let item of b){
        if(hasMap2.has(item)){
            hasMap2.set(item,hasMap2.get(item) + 1)
        }else{
            hasMap2.set(item,1)
        }
 }
 console.log(hasMap2)
 //Object.keys is not applicable in hasMap objects it is valid only for plain objects use "size"
//   if(Object.keys(hasMap1).length!==Object.keys(hasMap2)) return "Not an Anagram"
//   for(let key in hasMap1 ){
//     if(hasMap1.hasOwnProperty(key) && hasMap1[key] !== hasMap2[key]) return "Not an Anagram"
//   }
if(hasMap1.size!==hasMap2.size) return "Not an Anagram"
for(let [key,value] of hasMap1){
    if(value!== hasMap2.get(key)){
        return "Not an Anagram"
    }
}
return "The given strings are An Anagram"
//  let str1 = JSON.stringify(hasMap1);
//  let str2 = JSON.stringify(hasMap2);
//  if(str1===str2) return "Anagram"
//  return "Not an anagram"
}
console.log(anagramCheck("cccbbaaa","aaabbccc"))
console.log(anagramCheck("bb","aa"))
