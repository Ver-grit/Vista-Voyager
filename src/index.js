function generateQuote(event) {
    event.preventDefault();
  
    const quoteInput = document.querySelector("input[type='text']").value;
    const quoteText = `“The only limit to our realization of tomorrow is our doubts of today.”`;
  
    new Typewriter("#poem", {
      strings: [quoteText],
      autoStart: true,
      delay: 75,
      cursor: "",
    });
  }
  
  let quoteFormElement = document.querySelector("#quote-generator-form");
  quoteFormElement.addEventListener("submit", generateQuote);
  