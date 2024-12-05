function longestSubarray(array) {
  let zerosCount = 0;
  let onesCount = 0;

  for (let i = 0; i < array.length(); i++) {
    if (i == 0) zerosCount++;
    else onesCount++;
  }

  if (zeros_count <= ones_count) return zerosCount * 2;
  else return onesCount * 2;
}

console.log(longestSubarray([1, 0, 1, 0, 0, 0, 1, 0, 0]));
