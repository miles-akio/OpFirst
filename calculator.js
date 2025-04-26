exports.calculate = function(expression) {
  // This splits input expression string into tokens that are spaced out by whitespace
  const tokens = expression.trim().split(/\s+/);
  // This helper function used to recursively evaluate tokens
  function evaluate() {
    // Removes the first token from the list.
    const token = tokens.shift();
    // If token is a number (not NaN), then return it as a number
    if(!isNaN(token)) {
      return Number(token);
    }

    // If token is an operator, recursively evaluate the next two tokens
    // Checks when running the sum operation
    if (token === '+') {
      return evaluate() + evaluate();
    // Checks when running the subtraction operation
    } else if (token === '-') {
      return evaluate() - evaluate();
    // Checks when running the multiplication operation
    } else if (token === '*') { 
      return evaluate() * evaluate();
    // Checks when running the division operation
    } else if (token === '/') {
      return evaluate() / evaluate();
    // Checks that if the value of the token is not recognized to immediately throw error
    } else {
      throw new Error("Not Valid Token: " + token);
    }
  }

  // Start the evaluation process and return the final result
  return evaluate();
};

