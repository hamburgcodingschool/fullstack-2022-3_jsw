function createCard(person) {
    const output = `
    <div class="card">
        <table>
            <tr>
                <th>Name</th>
                <td>${person.name}</td>
            </tr>
            <tr>
                <th>Age</th>
                <td>${person.age}</td>
            </tr>
            <tr>
                <th>City</th>
                <td>${person.city}</td>
            </tr>
        </table>
    </div>`;
    return output;
}

function sortPeopleByName() {
    people.sort(function(a, b) {
        if (a.name < b.name) {
            return -1;
        } else if (a.name > b.name) {
            return 1;
        } else {
            return 0;
        }
    });
}

function sortPeopleByAge() {
    people.sort(function(a, b) {
        return a.age - b.age;
    });
}

function displayPeopleCards() {
    outputBox.innerHTML = "";
    for (let i = 0; i < people.length; i++) {
    
        const output = createCard(people[i]);
        
        console.log(output);
        outputBox.innerHTML += output;
    }
}

const outputBox = document.querySelector("#outputBox");
const sortByNameButton = document.querySelector("#sortByNameButton");
const sortByAgeButton = document.querySelector("#sortByAgeButton");

displayPeopleCards();

sortByNameButton.addEventListener("click", function() {
    sortPeopleByName();
    displayPeopleCards();
});

sortByAgeButton.addEventListener("click", function() {
    sortPeopleByAge();
    displayPeopleCards();
});