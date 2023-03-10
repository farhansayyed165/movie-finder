// const api_url = 'http://www.omdbapi.com/apikey.aspx?VERIFYKEY=1e4c370b-f11a-45a3-9caa-54b0773b01cf';
const api_url = 'http://www.omdbapi.com/?i=tt3896198&apikey=57f800fa&s='
const api_url_search = ' http://www.omdbapi.com/?apikey=57f800fa&i=';

var search_inp = document.getElementById("search_input");
var card = document.getElementById("movie-cards")

document.getElementsByClassName("search")[0].addEventListener("click", function(){
    console.log(search_inp.value);
    const query = search_inp.value;
    if(query){
        getMovies(api_url+query)}
})

async function getMovies(url){
    const resp = await fetch(url);
    const respdata = await resp.json()
    console.log(respdata);
    showMovies(respdata.Search)
    console.log(respdata.Search);
}



function movie_display(imovie){
    const movieElm = document.createElement("div");
    movieElm.classList.add("movie-card");
    movieElm.innerHTML = `<div class="card">
                             <img src="${imovie.Poster}" alt = "Poster" width = "300px" height = "300px"/>
                             <br>
                             <div class="movie-description">
                                <span class = "movie-titile"><b>Title</b><span class="value">${imovie.Title}</span></span> 
                                <span class = "movie-titile"><b>Title</b><span class="value">${imovie.imdbRating} </span></span>
                                <span class = "movie-titile"><b>Title</b><span class="value">${imovie.Director} </span></span>
                                <span class = "movie-titile"><b>Title</b><span class="value">${imovie.Released} </span></span>
                                <span class = "movie-titile"><b>Title</b><span class="value">${imovie.Genre} </span></span>
                            </div>
                         </div>`;
    card.appendChild(movieElm)
}

function showMovies(movies){
    card.innerHTML = "";
    movies.forEach(async function(movie){
        const movieData = await fetch(api_url_search+movie.imdbID);
        const moviedataobj = await movieData.json();
        movie_display(moviedataobj);
        console.log(movie_display(moviedataobj));
    })
}