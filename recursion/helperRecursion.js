function calculateFactorial(n) {
    let result = 1;
  
    function factorialHelper(number) {
      if (number === 0) {
        return 1; // Base case: factorial of 0 is 1
      }
  
      // Recursive call: Multiply the current number by the factorial of (number - 1).
      return number * factorialHelper(number - 1);
    }
  
    result = factorialHelper(n);
    return result;
  }
  
  console.log(calculateFactorial(5)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1)
  