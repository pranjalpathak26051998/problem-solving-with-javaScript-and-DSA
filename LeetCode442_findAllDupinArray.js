// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.
//https://leetcode.com/problems/find-all-duplicates-in-an-array/description/

var findDuplicates = function(nums) {
    let hashMap = new Map()
    for(let item of nums){
        if(hashMap.has(item)){
            hashMap.set(item,hashMap.get(item)+1)
        }else{
            hashMap.set(item,1)
        }
    }
 
     let arr=[]
    for(let [key,value] of hashMap){
        if(hashMap.get(key)>1){
            arr.push(key) 
        }
    }
    return arr
 };

 

