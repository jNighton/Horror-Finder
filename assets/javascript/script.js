
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
var movie = '';

var drinkCardEl = document.querySelector("#drink-card");



// var streamingServices = {
    
    // }
    
    submitEl.addEventListener("click", function(event){
        event.preventDefault();
        
        movie = $('#movie').val().trim()
        console.log(movie) 
        
        getMovieAPI(movie);
        getCocktailDB();
    })
    
    
    function getMovieAPI(movie){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '54664c79a4msh5e441cee8ee88b1p10830cjsn8417ae33858b',
                'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
            }
        };
        
        fetch('https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&genre=18&page=1&output_language=en&language=en', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err)); 
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
    var cocktails = ["bloody_mary", "bloody_maria", "bleeding_surgeon", "zombie", "shark_attack", "vampiro", "berry_deadly", "death_in_the_afternoon", "hot_chocolate_to_die_for", "bruised_heart"];

    var random = Math.floor(Math.random() * cocktails.length);
    console.log(random, cocktails[random]);

    var queryUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktails[random];
    var drinkThumbNail = document.createElement("img");
    var drinkName = document.createElement("h3");
    var drinkIngredients = document.createElement("li");
    var drinkInstructions = document.createElement("p");

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
            drinkIngredients = cocktailData.drinks[0].strIngredient1;
            drinkInstructions = cocktailData.drinks[0].strInstructions;

            drinkCardEl.append(drinkThumbNail);
            drinkCardEl.append(drinkName);
            drinkCardEl.append(drinkIngredients);
            drinkCardEl.append(drinkInstructions);
        })



}
