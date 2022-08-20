var permute = function (nums) {
  let remain = new Set(nums);
  console.log(remain);
  let result = [];

  let stack = [];

  helper(0, nums, stack, result, remain);
  return result;
};

function helper(index, nums, stack, result, remain) {
  if (remain.size === 0) {
    result.push([...stack]);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    stack.push(nums[i]);
    remain.delete(nums[i]);
    helper(index + 1, nums, stack, result, remain);
    stack.pop();
    remain.add(nums[i]);
  }
}

console.log(permute([1, 2, 3]));
