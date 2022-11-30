// Variables Declaired Here
var logoEl = document.querySelector('.logo');
var btnHuluEl = document.querySelector('#btn-hulu');
var btnNetflixEl = document.querySelector('#btn-netflix');
var btnPrimeEl = document.querySelector('#btn-prime');
var btnHboEl = document.querySelector('#btn-hbo');
var movieListEl = document.querySelector('.movie-list-container');
var flexContainerEl = document.querySelector(".flex-container");
var movie = '';
var streamingService = '';

logoEl.addEventListener('click', function (){
    location.reload();
});

function getTmdbAPI() {
    // apiKey = "b17d58183a19638723e4cef78264f6c2";
    var tmdbQueryUrl = "https://api.themoviedb.org/3/discover/movie?api_key=b17d58183a19638723e4cef78264f6c2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&vote_average.gte=6&with_genres=27";
    fetch(tmdbQueryUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (movieData) {
            for (var i = 0; i < 10; i++) {
                var movieEl = document.createElement('section');
                movieEl.setAttribute('class', 'movie-card');
                var movieTitle = document.createElement("h2");
                movieTitle.setAttribute('id', 'movie-title');
                var moviePoster = document.createElement("img");
                moviePoster.setAttribute('id', 'movie-poster-img');
                var movieDescription = document.createElement("p");
                movieDescription.setAttribute('id', 'movie-description');
                var movieYear = document.createElement("p");
                movieYear.setAttribute('id', 'movie-year');
                var posterImg = "https://image.tmdb.org/t/p/w185/" + movieData.results[i].poster_path;

                moviePoster.setAttribute("src", posterImg);
                movieTitle.textContent = movieData.results[i].title;
                movieDescription.textContent = movieData.results[i].overview;
                movieYear.textcontent = movieData.results[i].release_date;

                flexContainerEl.appendChild(movieEl);
                movieEl.appendChild(movieTitle);
                movieEl.appendChild(moviePoster);
                movieEl.appendChild(movieDescription);
                movieEl.appendChild(movieYear);

                generateGetSmashedBtn(movieEl);
            }
        })
}

function hideTmdbApi() {
    flexContainerEl.setAttribute('style', 'display: none');
}

// Streaming Service Buttons section
btnHuluEl.addEventListener('click', function (event) {
    event.preventDefault();
    streamingService = 'hulu';
    movieListEl.innerHTML = '';
    getMotNAPI();
    hideTmdbApi();
})
btnNetflixEl.addEventListener('click', function (event) {
    event.preventDefault();
    streamingService = 'netflix';
    movieListEl.innerHTML = '';
    getMotNAPI();
    hideTmdbApi();
})
btnPrimeEl.addEventListener('click', function (event) {
    event.preventDefault();
    streamingService = 'prime';
    movieListEl.innerHTML = '';
    getMotNAPI();
    hideTmdbApi();
})
btnHboEl.addEventListener('click', function (event) {
    event.preventDefault();
    streamingService = 'hbo';
    movieListEl.innerHTML = '';
    getMotNAPI();
    hideTmdbApi();
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
    var randomPage = Math.floor(Math.random() * 23);
    console.log(randomPage);

    fetch('https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=' + streamingService + '&type=movie&genre=27&page=' + [randomPage] + '&output_language=en&language=en', options)

        .then(function (response) {
            return response.json();
        })
        .then(function (streamMovieData) {
            console.log(streamMovieData);

            for (var i = 0; i < 7; i++) {
                var movieEl = document.createElement('section');
                movieEl.setAttribute('class', 'movie-card');
                var moviePosterEl = document.createElement('img');
                moviePosterEl.setAttribute('id', 'movie-poster-img');
                var movieTitleEl = document.createElement('h2');
                movieTitleEl.setAttribute('id', 'movie-title');
                var movieDescriptionEl = document.createElement('p');
                movieDescriptionEl.setAttribute('id', 'movie-description');
                var movieYearEl = document.createElement('p');
                movieYearEl.setAttribute('id', 'movie-year');
                var movieImg = streamMovieData.results[i].posterURLs.original;

                moviePosterEl.setAttribute('src', movieImg);
                movieTitleEl.innerHTML = `${streamMovieData.results[i].title}`;
                movieDescriptionEl.innerHTML = `${streamMovieData.results[i].overview}`;
                movieYearEl.innerHTML = `Year: ${streamMovieData.results[i].year}`;


                console.log(movieTitleEl);
                console.log(movieTitleEl);
                console.log(movieTitleEl);
                console.log(movieTitleEl);


                movieListEl.appendChild(movieEl)
                movieEl.appendChild(moviePosterEl)
                movieEl.appendChild(movieTitleEl)
                movieEl.appendChild(movieDescriptionEl)
                movieEl.appendChild(movieYearEl)


                generateGetSmashedBtn(movieEl);
            }
        })
}

// Cocktail API
function generateGetSmashedBtn(movieEl) {

    var smashedContainerEl = document.createElement('div');
    smashedContainerEl.setAttribute('class', 'get-smashed-container');

    var smashedBtnEl = document.createElement('button');
    smashedBtnEl.setAttribute('id', 'get-smashed-button');
    smashedBtnEl.setAttribute('class', 'waves-effect waves-light');
    smashedBtnEl.textContent = 'Get Smashed?';

    movieEl.appendChild(smashedContainerEl);
    smashedContainerEl.appendChild(smashedBtnEl);

    smashedBtnEl.addEventListener('click', function (event) {
        event.preventDefault();
        getCocktailDB(movieEl);
        smashedBtnEl.setAttribute('style', 'display: none');
    })
}

function getCocktailDB(movieEl) {
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

            // var movieCardEl = document.querySelector('.movie-card');

            var drinkCardEl = document.createElement('div');
            drinkCardEl.setAttribute('class', 'drink-card');

            var drinkImg = cocktailData.drinks[0].strDrinkThumb;

            console.log(cocktailData.drinks[0].strDrinkThumb);

            drinkThumbNail.setAttribute('src', drinkImg);
            drinkName.textContent = cocktailData.drinks[0].strDrink;
            drinkName.setAttribute('id', 'drink-name');
            drinkIngredients.textContent = 'Ingredients: ' + cocktailData.drinks[0].strIngredient1 + ', ' + cocktailData.drinks[0].strIngredient2 + ', ' + cocktailData.drinks[0].strIngredient3 + ', ' + cocktailData.drinks[0].strIngredient4 + ', ' + cocktailData.drinks[0].strIngredient5 + ', ' + cocktailData.drinks[0].strIngredient6 + ', ' + cocktailData.drinks[0].strIngredient7 + ', ' + cocktailData.drinks[0].strIngredient8 + ', ' + cocktailData.drinks[0].strIngredient9 + ', ' + cocktailData.drinks[0].strIngredient10 + ', ' + cocktailData.drinks[0].strIngredient11 + ', ' + cocktailData.drinks[0].strIngredient12;
            drinkIngredients.setAttribute('id', 'ingredients');
            drinkInstructions.textContent = 'Instructions: ' + cocktailData.drinks[0].strInstructions;
            drinkInstructions.setAttribute('id', 'instructions');

            console.log(drinkName);
            console.log(drinkIngredients);
            console.log(drinkInstructions);

            movieEl.appendChild(drinkCardEl);
            drinkCardEl.appendChild(drinkThumbNail);
            drinkCardEl.appendChild(drinkName);
            drinkCardEl.appendChild(drinkIngredients);
            drinkCardEl.appendChild(drinkInstructions);


        })

}

getTmdbAPI();