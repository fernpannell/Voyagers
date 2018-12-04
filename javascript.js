var quotes = [
  "Hello",
  "Random sentences",
  "more tyffbdhfgzhj",
  "dfbghjk",
  "dfsghvjbgfd",
  "s`dfghjkfsdghjdfgsfgbdcwwqweweerrt",
  "dfgfdhjgdsyfgyurgdfyusgvifbyudsgcydsughvdfhgvyudsgcuyhfbhfdbhjdfbfhjfhsfbd"
]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes*length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
