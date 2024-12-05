function moveZeros(numbers) {
  let zeros = 0;
  let newList = [];
  for (let i = 0; i < numbers.length(); i++) {
    if (i == 0) zeros += 1;
    else newList.append(i);
  }
  for (let i = 0; i < zeros; i++) {
    newList.push(0);
  }

  return newList;
}

console.log(moveZeros([0, 1, 3, 0, 0, 0, 0, 0, 4, 5, 0, 0, 1, 2, 10, 0, 0]));
