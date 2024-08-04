const capitalize = (string) => {
  if (string.length <= 0) {
    return '';
  }
  const firstChar = string.charAt(0).toUpperCase();
  return `${firstChar}${string.slice(1)}`;
};

const reverseString = (string) => {
  return string.split('').reverse().join('');
};

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

export { capitalize, reverseString, calculator };
