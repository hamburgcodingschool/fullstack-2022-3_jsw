const pokeList = document.querySelector("#pokeList");
const pokeDetailImage = document.querySelector("#pokeDetailImage");
const pokeDetailName = document.querySelector("#pokeDetailName");
const pokeDetailExp = document.querySelector("#pokeDetailExp");
const pokeDetailHeight = document.querySelector("#pokeDetailHeight");
const listPrevButton = document.querySelector("#listPrevButton");
const listNextButton = document.querySelector("#listNextButton");

let nextURL = null;
let prevURL = null;

fetchPokeList("https://pokeapi.co/api/v2/pokemon/");
fetchPokeDetails("https://pokeapi.co/api/v2/pokemon/1");

pokeList.addEventListener("click", function(event) {
    if (event.target.tagName !== "A") {
        return;
    }
    event.preventDefault();
    
    fetchPokeDetails(event.target.href);
});

listNextButton.addEventListener("click", function(event) {
    fetchPokeList(nextURL);
});

listPrevButton.addEventListener("click", function(event) {
    fetchPokeList(prevURL);
});


