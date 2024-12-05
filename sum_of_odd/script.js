function sum_of_odd(x) {
  let sumOdd = 0;

  for (let i = 0; i < x; i++) {
    if (i % 2 != 0) {
      sumOdd++;
    }
  }

  return sumOdd;
}
const x = parseInt(prompt("Enter x: "));
console.log(`The sum of all the odd number from 0 to ${x} is ${sum_of_odd(x)}`);
