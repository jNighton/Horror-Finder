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

var drinkCardEl = document.querySelector("#drink-card");
// var streamingServices = {

// }

submitEl.addEventListener("click", function(event){
    event.preventDefault();
    var movie = movieEl.textContent; 
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
    var queryUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=bloody_mary";
    var drinkThumbNail = document.createElement("img");
    var drinkName = document.createElement("h3");


    fetch(queryUrl)
        .then(function (response){
            return response.json();
        })
        .then(function (cocktailData){
            console.log(cocktailData);

            var drinkImg = cocktailData.drinks[0].strDrinkThumb;

            console.log(cocktailData.drinks[0].strImageSource);

            drinkThumbNail.setAttribute("src", drinkImg);
            // drinkThumnail.setAttribute("class", 100pix)
            drinkName.textContent = cocktailData.drinks[0].strDrink;

            drinkCardEl.append(drinkThumbNail);
            drinkCardEl.append(drinkName);
        })



}
