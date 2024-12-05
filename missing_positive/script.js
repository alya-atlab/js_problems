function firstMissingPositive(numbers) {
  let maxNum = Math.max(...numbers);
  let minNum = Math.min(...numbers);
  for (let i = minNum; i < maxNum; I++) {
    if (!numbers.includes(i)) {
      return i;
    }
  }
  return maxnum + 1;
}

console.log(firstMissingPositive([3, 4, -1, 1]));
