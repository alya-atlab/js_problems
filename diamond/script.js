function repeatCalculation(i) {
  return parseInt(i * 2 + 1);
}

function spaceCalculation(x, i) {
  return parseInt((x * 2 - 1) / 2 - i);
}
const x = parseInt(prompt("Enter x: "));
for (let i = 0; i < x; i++) {
  console.log(
    " ".repeat(spaceCalculation(x, i)) + "*".repeat(repeatCalculation(i))
  );
}
for (let i = x - 1; i > -1; i--) {
  console.log(
    " ".repeat(spaceCalculation(x, i)) + "*".repeat(repeatCalculation(i))
  );
}
