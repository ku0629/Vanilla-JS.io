const quotes = [
  {
    quote:
      "Liberty without learning is always in peril; learning without liberty is always in vain.",
    author: "John F. Kennedy",
  },
  {
    quote:
      "You have to have confidence in your ability, and then be tough enough to follow through.",
    author: "Rosalynn Carter",
  },
  {
    quote:
      "Although the world is full of suffering, it is full also of the overcoming of it.",
    author: "Helen Keller",
  },
  {
    quote: "Underneath this flabby exterior is an enormous lack of character.",
    author: "Oscar Levant",
  },
  {
    quote:
      "Martyrdom... is the only way in which a man can become famous without ability.",
    author: "George Bernard Shaw",
  },
  {
    quote:
      "What we have to do is to be forever curiously testing new opinions and courting new impressions.",
    author: "Walter Pater",
  },
  {
    quote:
      "I have always found that mercy bears richer fruits than strict justice.",
    author: "Abraham Lincoln",
  },
  {
    quote: "Reading is to the mind what exercise is to the body.",
    author: "Sir Richard Steele",
  },
  {
    quote: "A man's homeland is wherever he prospers.",
    author: "Aristophanes",
  },
  {
    quote: "Risk comes from not knowing what you're doing.",
    author: "Warren Buffett",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
