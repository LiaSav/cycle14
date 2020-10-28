let n = prompt(
  "Hi, friend! \nEnter a positive number N. \nThe result will be represented in binary notation."
);
if (n) {
  alert("Result: " + cycle(n) + ".");
} else {
  alert("You didn`t enter number N");
}
function cycle(n) {
  let x = "";
  // another way
  // x = Number(n).toString(2);
  let y;
  let z;
  while (n) {
    y = Math.trunc(n / 2);
    z = n - y * 2;
    n = y;
    x = z + x;
  }
  return x;
}
