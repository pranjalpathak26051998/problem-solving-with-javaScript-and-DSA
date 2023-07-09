var findDisappearedNumbers = function(nums) {
    let n=nums.length+1;
    let arr=[];
  
    let numberSet= new Set(nums)
    console.log(numberSet)
    for(let i=1;i<=n;i++){
      if(!numberSet.has(i)){
        arr.push(i)
      }
    }
    return arr
  };
  console.log(findDisappearedNumbers([9,4,3,2,6,7,1]))


  