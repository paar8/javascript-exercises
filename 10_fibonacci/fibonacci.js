const fibonacci = function (n) {
  let a = 0;
  let b = 1;
  let num = Number(n);
  if (typeof num !== "number" || num < 0) return "OOPS";
  if (num === 0) return a;
  if (num === 1) return b;
  for (let i = 0; i < num - 1; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
