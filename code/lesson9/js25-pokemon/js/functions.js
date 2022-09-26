function fillPokeList(arrayOfPokemons) {
    let listElement = "";
    for (let i = 0; i < arrayOfPokemons.length; i++) {
        // const pokemon = arrayOfPokemons[0];
        // const name = pokemon.name;
        // const url = pokemon.url;
        const { name, url } = arrayOfPokemons[i];

        // console.log(name);
        // console.log(url);

        listElement += `<li><a href="${url}">${name}</a></li>`;
    }
    
    pokeList.innerHTML = listElement;
}

function fillPokeDetails(pokemon) {
    console.log(pokemon.sprites.other["official-artwork"].front_default);
    pokeDetailImage.src = pokemon.sprites.other["official-artwork"].front_default;
    pokeDetailName.innerHTML = `${pokemon.id} - ${pokemon.name}`;
    pokeDetailExp.innerHTML = pokemon.base_experience;
    pokeDetailHeight.innerHTML = pokemon.height;
}

function fetchPokeList(url) {
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {
            nextURL = result.next;
            prevURL = result.previous;
            updateButtonState();
            fillPokeList(result.results);
        })
        .catch(function(error) {
            alert("There was an Error... Maybe your Internet is Down... Maybe it's mine... who knows really...");
        });
}

function fetchPokeDetails(url) {
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {
            fillPokeDetails(result);
        })
        .catch(function(error) {
            alert("There was an Error... Maybe your Internet is Down... Maybe it's mine... who knows really...");
        });
}

function updateButtonState() {
    // nextURL and prevURL are Strings that contain the respective URLs
    // we update their value and the Button state, when we fetch a new List or List page

    if (nextURL) {
        listNextButton.disabled = false;
    } else {
        listNextButton.disabled = true;
    }

    if (prevURL) {
        listPrevButton.disabled = false;
    } else {
        listPrevButton.disabled = true;
    }
}


