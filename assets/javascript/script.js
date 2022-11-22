// var requestMDBapi =
// var requestMotNapi =
var submitEl = document.querySelector("#submit");
var movieEl = document.querySelector("#movie");
var movieTitleEl = document.querySelector("#movie-title");
var moviePosterEl = document.querySelector("#movie-poster");
var movieDescriptionEl = document.querySelector("#movie-description");
var movieYearEl = document.querySelector("#movie-year");
var movieRatingEl = document.querySelector("#movie-rating");
var iconNetflixEl = document.querySelector("#icon-netflix");
var iconHuluEl = document.querySelector("#icon-hulu");
var iconPrimeEl = document.querySelector("#icon-prime");
var iconHBOEl = document.querySelector("#icon-HBO");
// var streamingServices = {

// }






submitEl.addEventListener("click", function(event){
    event.preventDefault();
    console.log("u working bb?");
    var movie = movieEl.value; 
    getMovieAPI(movie);
    getCocktailDB();
})


function getMovieAPI(movie){
/*populate movie variables with api data


for every streaming service
    if movie is on netflix{
        display netflix icon
    }else{
        hide netflix icon
    }
    if movie is on hulu{
        display hulu icon
    }else{
        hide hulu icon
    }
    if movie is on prime{
        display prime icon
    }else{
        hide prime icon
    }
    if movie is on HBO{
        display HBO icon
    }else{
        hide HBO icon
    }
   */ 
}


function getCocktailDB(){
    var queryUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

    fetch(queryUrl)
        .then(function (response){
            console.log("working?");
            return response.json();
        })
        .then(function (cocktailData){
            console.log(cocktailData);
        })


}
