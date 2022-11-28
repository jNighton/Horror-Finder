// Variables Declaired Here
var submitEl = document.querySelector('#submit');
var btnHuluEl = document.querySelector('#btn-hulu');
var btnNetflixEl = document.querySelector('#btn-netflix');
var btnPrimeEl = document.querySelector('#btn-prime');
var btnHboEl = document.querySelector('#btn-hbo');
var movieEl = document.querySelector('#movie');
var movieTitleEl = document.querySelector('#movie-title');
var moviePosterEl = document.querySelector('#movie-poster');
var movieDescriptionEl = document.querySelector('#movie-description');
var movieYearEl = document.querySelector('#movie-year');
var movieRatingEl = document.querySelector('#movie-rating');
var iconNetflixEl = document.querySelector('#icon-netflix');
var iconHuluEl = document.querySelector('#icon-hulu');
var iconPrimeEl = document.querySelector('#icon-prime');
var iconHBOEl = document.querySelector('#icon-HBO');
var movie = '';
var smashedBtnEl = document.querySelector('#get-smashed-button');
var drinkCardEl = document.querySelector('.drink-card');
var streamingService = '';

var mainScreen = $('#main-screen').css('display', 'block');
var huluScreen = $('#hulu-screen').css('display', 'block');
var netflixScreen = $('#netflix-screen').css('display', 'block');
var primeScreen = $('#prime-screen').css('display', 'block');
var hboScreen = $('#hbo-screen').css('display', 'block');

// Streaming Service Buttons sectiion
btnHuluEl.addEventListener('click', function (event) {
    event.preventDefault();
    streamingService = 'hulu'
    mainScreen.css('display', 'none');
    huluScreen.css('display', 'block');
    getMotNAPI()
})
btnNetflixEl.addEventListener('click', function (event) {
    event.preventDefault();
    streamingService = 'netflix'
    mainScreen.css('display', 'none');
    netflixScreen.css('display', 'block');
    getMotNAPI()
})
btnPrimeEl.addEventListener('click', function (event) {
    event.preventDefault();
    streamingService = 'prime'
    mainScreen.css('display', 'none');
    primeScreen.css('display', 'block');
    getMotNAPI()
})
btnHboEl.addEventListener('click', function (event) {
    event.preventDefault();
    streamingService = 'hbo'
    mainScreen.css('display', 'none');
    hboScreen.css('display', 'block');
    getMotNAPI()
})

// Movie Of The Night API 
function getMotNAPI() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '54664c79a4msh5e441cee8ee88b1p10830cjsn8417ae33858b',
            'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
        }
    };

    fetch('https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=' + streamingService + '&type=movie&genre=27&page=1&output_language=en&language=en', options)

        .then(function (response) {
            return response.json();
        })
        .then(function (movieData) {
            console.log(movieData)
            movieTitleEl ='Title: '+movieData.results[0].title 
            movieDescriptionEl ='Destcription: '+movieData.results[0].overview
            movieYearEl ='Year: '+movieData.results[0].year 
            var movieImg = movieData.results[0].posterURLs.original

            moviePosterEl.setAttribute('src', movieImg)

            console.log(movieTitleEl)
            console.log(movieDescriptionEl)
            console.log(movieYearEl)
            console.log(movieImg)
        })
}

// mainScreen.style.display = 'block';

// if (streamingService === 'hulu') {

// } else if (streamingService == 'netflix') {

// } else if (streamingService == 'hbo') {

// } else (streamingService == 'prime') 

// submitEl.addEventListener('click', function(event){
//     event.preventDefault();

//     movie = $('#movie').val().trim()
//     console.log(movie) 

//     getTmdbAPI(movie);
//     getMotNAPI(movie);
//     // move this -> getCocktailDB();
// })

// function getTmdbAPI(movie){
//     var apiKey = 'b17d58183a19638723e4cef78264f6c2';
//     var tmdbQueryUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=b17d58183a19638723e4cef78264f6c2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&vote_average.gte=6&with_genres=27';

//     fetch(tmdbQueryUrl)
//     .then(function (response){
//         return response.json();
//     })
//     .then(function (movieData){
//         console.log(movieData);
//     })
// }

/*populate movie variables with api data
 
*/
// }

// Cocktail API
smashedBtnEl.addEventListener('click', function (event) {
    event.preventDefault();
    getCocktailDB();   
})

function getCocktailDB() {
    var cocktails = ['bloody_mary', 'bloody_maria', 'bleeding_surgeon', 'zombie', 'shark_attack', 'vampiro', 'berry_deadly', 'death_in_the_afternoon', 'hot_chocolate_to_die_for', 'bruised_heart'];

    var random = Math.floor(Math.random() * cocktails.length);
    console.log(random, cocktails[random]);

    var queryUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + cocktails[random];
    var drinkThumbNail = document.createElement('img');
    var drinkName = document.createElement('h3');
    var drinkIngredients = document.createElement('p');
    var drinkInstructions = document.createElement('p');

    fetch(queryUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (cocktailData) {
            console.log(cocktailData);

            var drinkImg = cocktailData.drinks[0].strDrinkThumb;

            console.log(cocktailData.drinks[0].strDrinkThumb);

            drinkThumbNail.setAttribute('src', drinkImg);
            drinkName.textContent = cocktailData.drinks[0].strDrink;
            drinkIngredients.textContent = 'Ingredients: ' + cocktailData.drinks[0].strIngredient1 + ', ' + cocktailData.drinks[0].strIngredient2 + ', ' + cocktailData.drinks[0].strIngredient3 + ', ' + cocktailData.drinks[0].strIngredient4 + ', ' + cocktailData.drinks[0].strIngredient5 + ', ' + cocktailData.drinks[0].strIngredient6 + ', ' + cocktailData.drinks[0].strIngredient7 + ', ' + cocktailData.drinks[0].strIngredient8 + ', ' + cocktailData.drinks[0].strIngredient9 + ', ' + cocktailData.drinks[0].strIngredient10 + ', ' + cocktailData.drinks[0].strIngredient11 + ', ' + cocktailData.drinks[0].strIngredient12;

            drinkInstructions.textContent = 'Insctructions: ' + cocktailData.drinks[0].strInstructions;

            console.log(drinkName);
            console.log(drinkIngredients);
            console.log(drinkInstructions);

            drinkCardEl.appendChild(drinkThumbNail);
            drinkCardEl.appendChild(drinkName);
            drinkCardEl.appendChild(drinkIngredients);
            drinkCardEl.appendChild(drinkInstructions);


        })


}
