function maxSubarraySum(array) {
    let currentSum = array[0];
    let maxSum = array[0];
  
    for (let i = 1; i < array.length; i++) {
      currentSum = Math.max(array[i], currentSum + array[i]);
      maxSum = Math.max(maxSum, currentSum);
    }
  
    return maxSum;
  }
//   readLine( ).split(" ").map(Number)
  
  // Example usage:
  let array =[10 ,20 ,30 ,40 ,50 ,60 ,70 ,80 ,90 ,100] // [-100 ,-990 ,-10 ,-1 ,-5] //[-10] //[1 ,2 ,-3 ,4 ,5 ,1 ,2 ,3 ,4 ,-5] 
  //[0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,1] //c [-20 ,-12 ,42 ,-10 ,25] //[-2, 3, -4, 5, 7, -8, 2];
  let largestSum = maxSubarraySum(array);
  console.log(largestSum);
  

// let arr=["roy","james","ron",]
// ------------------------------------------------

for(let i=0;i<5;i++){
    //console.log("*")
    for(let j=1;j<4;j++)
    {
      console.log("#")
    }
    // for(let j=4;j>0;j--){
    //     console.log("*")
    // }
}
// ----------------------------------------------------------------------
// -------------------------------------------------
//creating object
let obj0 = {
  "a":1,
  "b":2,
  "c":3
}
console.log(obj0)
// -----------------------------------------------------------------------
function obj1(a,b,c){
  this.a=a,
  this.b=b,
  this.c=c
}
let object1 = new obj1(1,2,3)
console.log(object1)
// ---------------------------------------------------------------------------
let person =new Object()
person.name="Pranjal Pathak",
person.city="Prayagraj",
person.pinCode=211010

console.log(person)
// -------------------------------------------------------------------------
function charCount(str){
  let obj={}
  for(let i of str){
    let char =i.toLowerCase()
     if(obj[char]>0){
      obj[char]++
     }else{
      obj[char]=1
     }
  }
  return obj
}
console.log(charCount("a a A bbCCd"))
// ---------------------------------------
//check by adding regex also for finding the frequency of the letters
function characterCount(s){
  let obj1={}
  for(let ch of s){
    ch=ch.toLowerCase();
    if(/^[a-z0-9]/.test(ch)){
      obj1[ch] = ++obj1[ch] || 1 //-->using truthy/falsy statement
      //(obj1[ch]>0)?obj1[ch]++:obj1[ch]=1;//
      
      // if(obj1[ch]>0){
      //   obj1[ch]++;
      // }else{
      //   obj1[ch]=1;
      // }
    }
  }
  return obj1
}
// TC: O(n) as a single loop run
console.log(characterCount("helllo0@* oo")) 
// -------------------------------------------------------
const obj = {
  number1: 10,
  number2: 5,
  number3: 20,
  number4: 15
};

let highest = -Infinity;
let secondHighest = -Infinity;

// Iterate over the values of the object
for (const value of Object.values(obj)) {
  if (value > highest) {
    secondHighest = highest;
    highest = value;
  } else if (value > secondHighest && value < highest) {
    secondHighest = value;
  }
}

console.log('Highest number:', highest);
console.log('Second highest number:', secondHighest);
// -------------------------------------------------------------------------------------------
// creating a same function with input as two arrays where the elements of second array is the square of elements of first array
const same=(a,b)=>{
  if(a.length!=b.length) return "invalid input"
  let res=[]
  for(let i of a){
    for(let j of b){
      if(i*i ==j){
        res.push(i)
        break
       // console.log(j)
      }
    }
  }
  //console.log(res)
  if(res.length==a.length){
  for(let k=0;k<res.length;k++){
  if(res[k]==a[k]){
    console.log(res)
    return true
   
  }  
}
}
console.log(res)
  return false
  
}
let x = same([1,2,4,4],[25,4,1,16])
console.log(x)

