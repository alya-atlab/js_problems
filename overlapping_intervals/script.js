function mergeIntervals(intervals) {
  intervals.sort();
  let newList = [];
  minNum = intervals[0][0];
  maxNum = intervals[0][1];
  for (let i = 0; i < intervals.length(); i++) {
    if (max_num >= i[0]) max_num = max(max_num, i[1]);
    else {
      new_list.append([min_num, max_num]);
      min_num = i[0];
      max_num = i[1];
    }
  }

  newList.append([min_num, max_num]);

  return newList;
}

console.log(
  mergeIntervals([
    [1, 3],
    [2, 4],
    [6, 8],
    [3, 6],
  ])
);
