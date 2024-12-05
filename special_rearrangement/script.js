function specialRearrangement(nums) {
  let newList = [];
  for (let i = 0; i < nums.length(); i++) {
    if (i % 2 == 0) {
      newList.push(i);
      nums.remove(i);
    }
  }

  return [...(newList + nums)];
}

console.log(specialRearrangement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
