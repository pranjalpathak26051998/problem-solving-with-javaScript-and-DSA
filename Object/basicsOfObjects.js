//creation , insertion, removal , access of key value in an object using JS
// ----------------------------insertion below-----------------------------O(1)-----
let obj={}
obj.fname="pranjal"
obj['lname']="pathak"
console.log(obj)
// -----------------------------access below-------------O(1)----
let val=obj.lname
let vall=obj['fname']
console.log(val)
console.log(vall)
// -----------------------------------removal below=------O(1)---
delete obj.fname
delete obj['lname']
console.log(obj)
// -------------------------------------------------------------------------------------------------------------------------------------
let obj2 ={
    name:"pranjal pathak",
    class:11,
    subject:"PCM",
    house:"Blue-house",
    pos:'Blue-House Captain',
    roll_no:1121644,
    mobile:9616901024,
    emailId:"pranjalpathak010@gmail.com"
}
console.log(obj2.name,obj2.class,obj2.mobile)   //searching using object.keys
let objArr=Object.keys(obj2)
console.log(objArr)
console.log(objArr[3])
// ------------------------------------using Object.entries(obj2)
let entryObj= Object.entries(obj2)
let x = Object.entries(obj2)
  x[1].push('section')
  x[1].push('A')
console.log(x)
//---------using Obj2.hasOwnProperty('key1')
if(obj2.hasOwnProperty('name'))
{ return console.log(obj2.name)} 
else
{ return console.log("does not exists")};


