//methods of linear search in JS -->
// *indexOf  *includes *find *findIndex
let arr=[1,3,2,4,9,66,32,11,9,101,109,117]
console.log(arr.indexOf(9))
console.log(arr.includes(9))
// console.log(arr.find(66))
// -----------------------------------------------------------
// Linear Search Exercise:// Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.
// Don't use indexOf to implement this function!--:// Examples:
// linearSearch([10, 15, 20, 25, 30], 15) // 1
// linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
// linearSearch([100], 100) // 0
// linearSearch([1,2,3,4,5], 6) // -1
// linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) // -1
// linearSearch([100], 200) // -1
const linearSearch=(arr,val)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]==val) return `the index of the val is ${i}`
    }
    return "Not Present"
}
arr=[1,2,3,4,5,6,7,8,9,0]
console.log(linearSearch(arr,4))



