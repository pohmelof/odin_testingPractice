import {
  capitalize,
  reverseString,
  calculator,
  ceasarCipher,
  analyzeArray,
} from "./index.js";

describe("capitalize function tests:", () => {
  test("home => Home", () => {
    expect(capitalize("home")).toBe("Home");
  });

  test("GHOST => Ghost", () => {
    expect(capitalize("GHOST")).toBe("Ghost");
  });

  test("i am speed => I am speed", () => {
    expect(capitalize("i am speed")).toBe("I am speed");
  });

  test("aRgHhh! => Arghhh!", () => {
    expect(capitalize("aRgHhh!")).toBe("Arghhh!");
  });
});

describe("reverseString function tests:", () => {
  test("moon => noom", () => {
    expect(reverseString("moon")).toBe("noom");
  });

  test("Dracula => alucarD", () => {
    expect(reverseString("Dracula")).toBe("alucarD");
  });

  test("error if value is number", () => {
    expect(reverseString(100200300)).toMatch(/Error/);
  });
});

describe("calulator object test suite", () => {
  describe("add():", () => {
    test("69 + 420 = 489", () => {
      expect(calculator.add(69, 420)).toEqual(489);
    });
  });

  describe("subtract():", () => {
    test("420 - 69 = 351", () => {
      expect(calculator.subtract(420, 69)).toEqual(351);
    });
  });

  describe("divide():", () => {
    test("420 / 42 = 10", () => {
      expect(calculator.divide(420, 42)).toBe(10);
    });
  });
  describe("multiply():", () => {
    test("42 * 69 = 2898", () => {
      expect(calculator.multiply(42, 69)).toEqual(2898);
    });
  });
});

describe("ceasarCipher function tests", () => {
  test("abcdef => cdefgh", () => {
    expect(ceasarCipher("abcdef")).toBe("cdefgh");
  });

  test("Abc Def? => Cde Fgh?", () => {
    expect(ceasarCipher("Abc Def?")).toBe("Cde Fgh?");
  });

  test("Cde Fgh! => Abc Def!", () => {
    expect(ceasarCipher("Cde Fgh!", 2, "decode")).toBe("Abc Def!");
  });
});

describe("analyzeArray function tests:", () => {
  test("average: 3, min: 1, max: 5, length: 5", () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toMatchObject({
      average: 3,
      min: 1,
      max: 5,
      length: 5,
    });
  });

  test("average: 5, min: 1, max: 9, length: 7", () => {
    expect(analyzeArray([8, 4, 6, 2, 1, 7, 9])).toMatchObject({
      average: 5,
      min: 1,
      max: 9,
      length: 7,
    });
  });
});
