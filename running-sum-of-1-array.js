var runningSum = function (nums) {
   let arr = [nums[0]];
   for (let i = 0; i < nums.length - 1; i++) {
      arr.push(arr[i] + nums[i + 1])
   }
   return (arr);
};