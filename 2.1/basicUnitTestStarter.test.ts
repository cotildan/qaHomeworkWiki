describe("Testing the calculator", () => {
    test("Example test", () => {
      /* 
      checking that using the add() that 
       2 + 50 = 52 
       */
      expect(calculator.add(2, 50)).toBe(52);
    });

    test("Addition works", () => {
      /* 

      checking that using the add() in the calculator that 
       4 + 5 = 9 
       */
      expect(calculator.add(4,5)).toBe(9);
    });

    test("Subtraction works", () => {
      /* 

      checking that using the subtract() in the calculator that 
       5 - 4 = 1 
       */
      expect(calculator.subtract(5,4)).toBe(1);
    });

    test("Multiplication works", () => {
      /* 

      checking that using the multiply() in the calculator that 
       4 * 5 = 20 
       */
      expect(calculator.multiply(4,5)).toBe(20);
    });

    test("Division works", () => {
      /* 
      
      checking that using the divide() in the calculator that 
       20 / 4 = 5 
       */
      expect(calculator.divide(20,4)).toBe(5);
    });

    describe("Stretch Goals", () => {
      /*

      checking that using the all operations in the calculator that 
      (2+2)/4 = 1 
      (4)/4 = 1
      */
      test("(2+2)/4 == 1", () => {
        expect(calculator.divide(calculator.add(2, 2), 4)).toBe(1);
      });

      test("(28/4)*(6/2)*(30-27+(3-4)) == 42", () => {
      /*
      
      checking that using the all operations in the calculator that 
      (28/4)*(6/2)*(30-27+(3-4)) = 42
      (7)*(3)*(30-27+(-1)) = 42
      (7)*(3)*(3+(-1)) = 42
      (7)*(3)*(2) = 42
      (21)*(2) = 42
      */
        expect(calculator.multiply(calculator.multiply(calculator.divide(28,4),calculator.divide(6,2)),
        calculator.add(calculator.subtract(30,27),calculator.subtract(3,4)))).toBe(42);
      });
    });
  });
  
  const calculator = {
    /** Takes two numbers and adds them together.
     * @example
     * calculator.add(2, 3) == 5
     */
    add: (a: number, b: number): number => a + b,
    /** Takes two numbers and subtracts the second from the first.
     * @example
     * calculator.subtract(2, 3) == -1
     */
    subtract: (a: number, b: number): number => a - b,
    /** Takes two numbers and multiplies them together.
     * @example
     * calculator.multiply(2, 3) == 6
     */
    multiply: (a: number, b: number): number => a * b,
    /** Takes two numbers and divides the first by the second.
     * @example
     * calculator.divide(2, 3) == 0.5
     */
    divide: (a: number, b: number): number => a / b,
  };