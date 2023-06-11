
/**
 * In this exercise, we called the fetch() function to make a GET request to the Datamuse API endpoint. 
 * Then, you chained a .then() method and passed two callback functions as arguments — one to handle the promise if it resolves,
 * and one to handle network errors if the promise is rejected.
 */

// Information to reach API
const url = 'https://api.datamuse.com/words?sl=';

// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// Asynchronous function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = url+wordQuery; //concatenate the input with the url from datamuse.

  //The fetch() function is a built-in function in JavaScript that is used to make network requests and 
  //retrieve resources from a server. When you call fetch(), 
  //it returns a Promise that represents the eventual completion or failure of the request.

  //The fetch() function takes at least one argument, which is the URL(endpoint in this ex) of the resource you want to fetch.
  fetch(endpoint,{cache: 'no-cache'})
      .then((response)=>{
          if(response.ok){
            return response.json()
          }
          throw new Error('Request failed!');
      },//second argument, it works like a promise, you need the secon
          networkError =>{
            console.log(networkError.message);
      })
  };

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);
