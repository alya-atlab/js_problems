function repeat_calculation(i) {
  return parseInt(i * 2 + 1);
}

function space_calculation(x, i) {
  return parseInt((x * 2 - 1) / 2 - i);
}
const x = parseInt(prompt("Enter x: "));
for (let i = 0; i < x; i++) {
  console.log(
    " ".repeat(space_calculation(x, i)) + "*".repeat(repeat_calculation(i))
  );
}
for (let i = x - 1; i > -1; i--) {
  console.log(
    " ".repeat(space_calculation(x, i)) + "*".repeat(repeat_calculation(i))
  );
}
