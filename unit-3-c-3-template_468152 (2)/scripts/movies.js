// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page


// var length = cartArr.length;
//     console.log(length);    
var amount = document.getElementById('wallet');
amount.innerText = length;

let movies_div = document.getElementById("movies");
let id;
async function searchMovies(){
    try{
        const search = document.getElementById("search").value;

        const res = await fetch(`http://www.omdbapi.com/?apikey=bbbdc91c&s=${search}`)

        const data = await res.json();
        console.log("data:",data);
    
        const movies = data.Search;
        appendMovies(movies);
    }
    catch(err){
        console.log("err:",err);
    }  
}
var cartArr = JSON.parse(localStorage.getItem("movies")) || []

function appendMovies(data){
    movies_div.innerHTML = null;

    data.forEach(function(el) {

        var movies_div = document.createElement("div");
        movies_div.style.border = "1px solid blue";
        movies_div.style.width = "95%";
        movies_div.style.height = "530px";

        let Poster = document.createElement("img");
        Poster.src = el.Poster;

        let p = document.createElement("p");
        p.innerText =el.Title;

        var btn = document.createElement("button");
        btn.setAttribute("class","book_now");
        btn.textContent = " Book Now ";
        btn.addEventListener("click", function() {
          addToCart(data);
        });

        movies_div.append(Poster, p, btn)
        document.querySelector("#movies").append(movies_div);
    });
    function addToCart(data)
    {
      console.log(data);
      cartArr.push(data);
      console.log(cartArr);
      localStorage.setItem('movies',JSON.stringify(cartArr));
      alert("item added to cart");
        window.location.href="checkout.html"
    }
}

async function main(){
    let data = await searchMovies();

    if(data === undefined){
        return false;
    }
    appendMovies(data);
}

function debounce(func, delay){
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(function (){
        func();
    }, delay);
}




