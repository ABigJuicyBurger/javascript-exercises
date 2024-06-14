const sumAll = function (m, n) {
  if (!Number.isInteger(m) || !Number.isInteger(n)) return "ERROR";
  if (m < 0 || n < 0) return "ERROR";
  // This was confusing, had to look at answer to figure out for test 3
  if (m > n) {
    const temp = m;
    m = n;
    n = temp;
  }

  let sum = 0;
  for (let i = m; i <= n; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
