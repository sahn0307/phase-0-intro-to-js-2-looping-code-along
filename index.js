function writeCards(names, eventName) {
    let thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages;
  }
  
  function countDown(startingNumber) {
    // Check if the input is a positive integer
    if (startingNumber < 0 || !Number.isInteger(startingNumber)) {
      console.log("Please provide a positive integer.");
      return;
    }
  
    for (let i = startingNumber; i >= 0; i--) {
      console.log(i);
    }
  }