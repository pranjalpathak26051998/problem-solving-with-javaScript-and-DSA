// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

function averagePair(arr,t){
    let start=0;
    let next=1;
    
    while(next<arr.length){
        let avg = (arr[start]+arr[next])/2
        if(avg==t){
            return true
        }
        start++;
        next++;
    }
    return false
}

console.log(averagePair([-1,0,3,4,5,6], 4.1))