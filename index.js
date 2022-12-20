function capitalize(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
}

function reverseString(str) {
  if (typeof str !== "string") return "Error: value is not a string";
  return str.split("").reverse().join("");
}

const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};

function _getCeasarKey(shift) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let shifted = alphabet.slice(shift) + alphabet.slice(0, shift);

  return {
    abc: alphabet + alphabet.toUpperCase(),
    key: shifted + shifted.toUpperCase(),
  };
}

function _encodeCeasar(str, abc, shifted) {
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (abc.indexOf(str[i]) === -1) {
      str[i] = str[i];
    } else {
      str[i] = shifted[abc.indexOf(str[i])];
    }
  }
  return str.join("");
}

function _decodeCeasar(str, abc, shifted) {
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (abc.indexOf(str[i]) === -1) {
      str[i] = str[i];
    } else {
      str[i] = abc[shifted.indexOf(str[i])];
    }
  }
  return str.join("");
}
function ceasarCipher(str, shift = 2, mode = "encode") {
  const { abc, key } = _getCeasarKey(shift);
  if (mode === "decode") {
    return _decodeCeasar(str, abc, key);
  } else {
    return _encodeCeasar(str, abc, key);
  }
}

function analyzeArray(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  const obj = {
    average: Math.floor(arr.reduce((a, b) => a + b) / arr.length),
    min: sortedArr[0],
    max: sortedArr[arr.length - 1],
    length: arr.length,
  };

  return obj;
}

export { capitalize, reverseString, calculator, ceasarCipher, analyzeArray };
