const quotes = [
  {
    quote: "A rose by any other name would smell as sweet.",
    author: "William Shakespeare",
  },
  {
    quote: "All that glitters is not gold.",
    author: "William Shakespeare",
  },
  {
    quote: "All the world’s a stage, and all the men and women merely players.",
    author: "William Shakespeare",
  },
  {
    quote: "Ask not what your country can do for you; ask what you can do for your country.",
    author: "John Kennedy",
  },
  {
    quote: "Ask, and it shall be given you; seek, and you shall find.",
    author: "the Bible",
  },
  {
    quote: "Eighty percent of success is showing up.",
    author: "Woody Allen",
  },
  {
    quote: "For those to whom much is given, much is required.",
    author: "the Bible",
  },
  {
    quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison",
  },
  {
    quote: "He travels the fastest who travels alone.",
    author: "Rudyard Kipling",
  },
  {
    quote: "Hell is other people.",
    author: "Jean-Paul Sartre",
  },
  {
    quote: "Three can keep a secret, if two of them are dead.",
    author: "Benjamin Franklin",
  },
  {
    quote: "To be or not to be, that is the question.",
    author: "William Shakespeare",
  },
  {
    quote: "What doesn't kill us makes us stronger.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "Whatever you are, be a good one.",
    author: "Abraham Lincoln	",
  },
  {
    quote:
      "You can fool all of the people some of the time, and some of the people all of the time, but you can't fool all of the people all of the time.",
    author: "Abraham Lincoln	",
  },
  {
    quote: "You must be the change you wish to see in the world.",
    author: "Mahatma Ghandi",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
