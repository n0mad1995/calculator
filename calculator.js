const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please type first number: ', (num1Input) => {
  const num1 = parseFloat(num1Input);

  rl.question('Please type operator (+, -, *, /): ', (operator) => {
    rl.question('Please type second number: ', (num2Input) => {
      const num2 = parseFloat(num2Input);

      let result;

      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          if (num2 === 0) {
            result = 'Division by zero is impossible';
          } else {
            result = num1 / num2;
          }
          break;
        default:
          result = 'Incorrect operator';
      }

      console.log(`Result: ${result}`);
      rl.close();
    });
  });
});
