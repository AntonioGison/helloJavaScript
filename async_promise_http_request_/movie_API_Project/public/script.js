const tmdbKey = '5344be14561573b9aeda3449e256de13';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');

const getGenres = async () => {
  const genreRequestEndpoint = '/genre/movie/list';
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;

  try{
    const response = await fetch(urlToFetch);
    if(response.ok){
      let jsonResponse = await response.json();
      let genres = jsonResponse.genres;
      //console.log(genres);
      return genres;
    }
    

  } catch(error){
    console.log(error);
  };
};

const getMovies = async () => {
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint = '/discover/movie';
  const requestParams =`?api_key=${tmdbKey}&with_genres=${selectedGenre}`;
  const urlToFetch =`${tmdbBaseUrl}${discoverMovieEndpoint}${requestParams}`;

  try{
    const response = await fetch(urlToFetch);
    if(response.ok){
      let jsonResponse = await response.json();
      return jsonResponse;
      console.log(jsonResponse);
      }
  }catch(error){
    console.log(error);
  }
};


const getMovieInfo = async (movie) => {
  let movieId = movie.id;
  const movieEndpoint = `/movie/${movieId}`;
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = `${tmdbBaseUrl}${movieEndpoint}${requestParams}`;
  try{
    const response = await fetch(urlToFetch);
    if(response.ok){
      console.log(`response2 is ok`);
      let movieInfo = response.json();
      console.log(movieInfo);
      return movieInfo;
    }
  }catch(error){
    console.log(error);
  }
};


// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async () => {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  };
   const movies = await getMovies();
   console.log({movies});
   const randomMovie = getRandomMovie(movies.results);
   const info = await getMovieInfo(randomMovie);
   displayMovie(info);
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;