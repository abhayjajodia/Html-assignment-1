let numCheck = parseInt(prompt("Enter an integer:"));
    let isPrime = true;
    if (numCheck <= 1) {
      isPrime = false;
    } else {
      for (let i = 2; i <= Math.sqrt(numCheck); i++) {
        if (numCheck % i === 0) {
          isPrime = false;
          break;
        }
      }
    }
    if (isPrime) {
      document.write(numCheck + " is a prime number.<br>");
    } else {
      document.write(numCheck + " is not a prime number.<br>");
    }