const x = parseInt(prompt("Enter x: "));
let f = [0, 1];
for (let i = 2; i < x; i++) {
  f.push(f[i - 1] + f[i - 2]);
  console.log(i);
}
console.log(f);
