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

const cipher = (char, shift) => {
  // prettier-ignore
  const alphabet = {
		lowercase: [
			'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
			'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
		],
		uppercase: [
			'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
			'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
		],
	}

  for (const arr of Object.values(alphabet)) {
    if (arr.indexOf(char) !== -1) {
      const ind = arr.indexOf(char);
      // For character wrapping at the end of alphabet
      if (ind + shift > 25) return arr[ind + shift - 26];
      return arr[ind + shift];
    }
  }
  // If char is not alphabet char then don't cipher it(just return it)
  return char;
};

const caesarCipher = (string, shift) => {
  return string
    .split('')
    .map((char) => cipher(char, shift))
    .join('');
};

export { capitalize, reverseString, calculator, caesarCipher };
