// Get quote from API

async function getQuote() {
  const proxyUrl = 'https://boiling-atoll-28659.herokuapp.com/';
  const apiUrl =
    'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    getQuote();
    console.log('whoops, no quote', error);
  }
}

// on load
getQuote();
