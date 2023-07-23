//solve using multiple pointer technique

function twoSum(nums, target){
let left = 0;
let right = nums.length-1;
let sum=0;
while(left<right){
    sum = nums[right]+nums[left]
    if(sum===target){
        return [left, right];
    }else if(sum < target){
        left++;  
    }else if(sum > target){
        right--;
    }
}
return [];
}
console.log(twoSum([-1,-2,-3,-4,-5],-8))

