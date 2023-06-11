// Information to reach API
const apiKey = '<Your API Key>';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// Asynchronous functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  
  //we set up the POST request by providing the endpoint and the object containing all the necessary information(method,headers,body).
	fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'apikey': apiKey
    },
    body: data
  })
  //now we handle the response
  .then(response=>{
      if(response.ok){
          return response.json();
      }
      //throw a new error in case response.ok is falsy
      throw new Error('Request failed!');
  },
  //now the second argument, in case that network returns an error
  networkError=>{
    console.log(networkError.message);
                }
      )
    .then(jsonResponse=>{//elaborate the output
        renderResponse(jsonResponse)
    })
}

// Clear page and call Asynchronous functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);
