function peaksinArrays(array) {
  let peaksNum = [];
  let index = 0;

  for (let i = 1; i < array.length(); i++) {
    index += 1;
    if (i < array[index - 1] && i < array[index + 1]) {
      peaksNum.push(index);
    }
  }

  return peaksNum;
}

console.log(peaksinArrays([5, 2, 3, 4, 3, 5, 6, 5, 7, 1, 9, 8, 10]));
