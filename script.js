function typeMessage(elementId, message, typingSpeed) {
    let i = 0;
    const element = document.getElementById(elementId);
    
    // Function to insert a bold tag for bolded words
    function boldText(word) {
      return `<b>${word}</b>`;
    }
    
    // Example: Bold specific words
    const boldWords = ["business", "ideas"];  // List of words to bold
    console.log("boldWords", boldWords)
  
    // Function to check if a word should be bolded
    function processMessage(message) {
      let processedMessage = message;
      boldWords.forEach(word => {
        const regex = new RegExp(`(${word})`, 'gi'); // Case-insensitive match
        processedMessage = processedMessage.replace(regex, boldText("$1"));
      });
      return processedMessage;
    }
  
    const processedMessage = processMessage(message); // Bold specific words
  
    function typeCharacter() {
      if (i < processedMessage.length) {
        element.innerHTML += processedMessage.charAt(i);
        i++;
        setTimeout(typeCharacter, typingSpeed);
      }
    }
  
    typeCharacter();
  }
  
  // Example usage: 
  const message = "Here are some business ideas you can explore...";
  typeMessage('ai-response', message, 100);  // Adjust the speed as needed
  
