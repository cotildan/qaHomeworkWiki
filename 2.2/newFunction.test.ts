import { myFunction } from "./newFunction";

describe("myFunction", () => {
  it("returns the word 'true' if I pass the function the number 5", () => {
    // checking when myfunction EQUALS 5 it should say true
    expect(myFunction(5)).toBe("true");
  });
  it("returns the word 'false' if I pass in a number less than 5", () => {
    // checking when myfunction < 5  it should say  false
    expect(myFunction(1)).toBe("false");
  });
  it("returns the word 'big' if I pass in a numbewr greater than 5", () => {
    // checking when myfunction > 5  it should say  big
    expect(myFunction(100)).toBe("big");
  });
  it("returns the word 'negative' if a negative number is passed in", () => {
    // checking when myfunction > 0 it should say  negative
    expect(myFunction(-1)).toBe("negative");
  });
});