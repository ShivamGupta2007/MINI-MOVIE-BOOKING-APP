// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

// var checkPro =JSON.parse(localStorage.getItem("movies")) || [];
// console.log(checkPro);
// appendMovies(checkPro)

// function appendMovies(movie){
//     movies_div.innerHTML = null;

//     movie.forEach(function(data , i,el) {

//         var movies_div = document.createElement("div");
//         movies_div.style.border = "1px solid blue";
//         movies_div.style.width = "95%";
//         movies_div.style.height = "530px";

//         let Poster = document.createElement("img");
//         Poster.src = data.Poster;

//         let p = document.createElement("p");
//         p.innerText =data.Title;

//         movies_div.append(Poster,p)
//         document.querySelector("#movie_div").append(movies_div);
//     });
   
// }



// var cartPro =JSON.parse(localStorage.getItem("movies")) || [];
// console.log(cartPro);

// displayData(cartPro);


// function displayData(movies){
//     document.querySelector("#movie").innerHTML = "";
//     movies.map(function(data, index,elem){

//     var movie_div = document.createElement("div");

//     var Poster = document.createElement("img");
//     Poster.setAttribute("src", data.Poster)

//     var Title = document.createElement("p");
//     Title.textContent = data.Title;

//     movie_div.append(Poster, Title);
//     document.querySelector("#movie").append(movie_div);
//     });
// }
let arr =[];

function Checkout(n,ns){
    this.user_name = n;
    (this.number_of_seats = ns)
  
}


function store_Checkout(e){
    e.preventDefault();

    let form = document.getElementById("checkout_form");

    let user_name = form.user_name.value
    console.log("user_name", user_name);

    let number_of_seats = form.number_of_seats.value
    console.log("number_of_seats", number_of_seats);

   

    let p1 = new Checkout(user_name,number_of_seats);

    arr.push(p1);
    console.log("arr:",arr)

    localStorage.setItem("amount",JSON.stringify(arr))

    alert("Insufficient Balance!")
    alert("Booking successful!")
}

var checkPro = JSON.parse(localStorage.getItem("movies")) || []
//console.log(checkPro)
appendMovies(checkPro)

function appendMovies(items){
    movie.innerHTML = null;

    items.forEach(function(data,i,el) {

        var movie = document.createElement("div");
        movie.style.border = "1px solid blue";
        movie.style.width = "95%";
        movie.style.height = "530px";

        let Poster = document.createElement("img");
        Poster.src = data.Poster;

        let p = document.createElement("p");
        p.innerText =data.Title;

        movie.append(Poster, p)
        document.querySelector("#movie").append(movie);
    });

}
