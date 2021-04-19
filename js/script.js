let quoteContainer = document.querySelector("#quote-container");
let quote = document.querySelector(".quote");
let author = document.querySelector("#author");
let quoteButton = document.querySelector(".new-quote");
let tweetButton = document.querySelector("#twitter");

// let apiQuote = [];

// // API Method to GetCode
// async function getQuotes() {
//   // API Quote URL
//   const apiUrl = "https://type.fit/api/quotes";

//   try {
//     const response = await fetch(apiUrl);
//     apiQuote = await response.json();
//     // console.log(apiQuote[1]);
//     newQuote();
//   } catch (error) {
//     console.log(error);
//     // if error print error
//   }

//   // loading function complete end.
//   complete();
// }

// print single string in apiQuote variable using Math.random or Math.floor function
// function newQuote() {
//   const randomQuote = apiQuote[Math.floor(Math.random() * apiQuote.length)];
//   let quoteText = randomQuote.text;
//   let quoteAuthor = randomQuote.author;

//   quote.textContent = quoteText;

//   // if author is null print unknown
//   if (quoteAuthor === null) {
//     author.textContent = "~ unknown";
//   } else {
//     author.textContent = `~ ${quoteAuthor}`;
//   }
// }

// // when NewQuote button click, then getQuote function run
// quoteButton.addEventListener("click", getQuotes);

// Twitter button function
tweetButton.addEventListener("click", () => {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.textContent} ${author.textContent}`;
  window.open(twitterUrl, "_blank");
});

// just for clue or just for learning or understanding.

function getQuotes() {
  const randomQuote =
    localQuotes[Math.floor(Math.random() * localQuotes.length)];

  let quoteText = randomQuote.text;
  let quoteAuthor = randomQuote.author;

  quote.innerHTML = quoteText;

  if (quoteAuthor === null) {
    author.innerText = "~ unknown";
  } else {
    author.innerText = `~ ${quoteAuthor}`;
  }

  // console.log(randomQuote);
}

quoteButton.addEventListener("click", () => {
  getQuotes();
});
