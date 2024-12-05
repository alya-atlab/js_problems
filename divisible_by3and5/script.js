const x = parseInt(prompt("Enter x: "));
for (let i = 1; i < x; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i);
  }
}
