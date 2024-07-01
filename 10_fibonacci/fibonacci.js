const fibonacci = function (member) {
  member = parseInt(member);

  if (member === 0) {
    return 0;
  }
  if (member === 1 || member === 2) {
    return 1;
  }
  if (typeof member !== "number" || member < 0) {
    return "OOPS";
  }

  let prev1 = 1;
  let prev2 = 1;
  let current = 0;

  for (let i = 3; i <= member; i++) {
    current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }
  return prev1;
};

// Do not edit below this line
module.exports = fibonacci;
