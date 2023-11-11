// Create an empty array to store the filtered type items in pokedex
const filteredTypeArray = [];

// Iterate the pokedex array and get all the types inside
pokedex.forEach(pokemon => {
     pokemon.type.forEach(type => {
          if (filteredTypeArray.includes(type) === false) {
               filteredTypeArray.push(type);
          }
     });
});

// console.log(filteredTypeArray)

// Create an array to store the sorted array in the alphabetical order
const sortedTypeArray = filteredTypeArray.sort((a, b) => {
     if (a < b) {
          return -1
     } else if (a > b) {
          return 1
     } else {
          return 0
     }
});

// console.log(sortedTypeArray)


// Use types to create anchors as the navigation bar
const navBar = document.querySelector('.nav-bar');

// Iterate the sorted array to create the navigation bar
sortedTypeArray.forEach(type => {
     const a = document.createElement('a');
     a.textContent = type;
     a.href = `#${type}`;
     navBar.appendChild(a);
});

// Iterate the sorted array to count number in a same type
function countPokemon(type) {
     return pokedex.filter(pokemon => pokemon.type.includes(type)).length
}

// // Iterate the sorted array to store the pokemons in a same type
function sameTypePokemon(type) {
     return pokedex.filter(pokemon => pokemon.type.includes(type))
          .sort((a, b) => {
               if (a.name < b.name) {
                    return -1;
               } else if (a.name > b.name) {
                    return 1;
               } else {
                    return 0;
               }
          });
};

// Create new array to store sorted pokemon info
const typeInfoArray = sortedTypeArray.map(type => ({
     type: type,
     countNum: countPokemon(type),
     totalHp: sameTypePokemon(type).reduce((total, pokemon) => total + pokemon.base.HP, 0),
     totalAttack: sameTypePokemon(type).reduce((total, pokemon) => total + pokemon.base.Attack, 0)
}));

// Create a function to back to top of the page
function backToTop() {
     const backToTopAnchor = document.createElement('a');

     // Control the anchor href link
     backToTopAnchor.href = '#top';
     backToTopAnchor.textContent = 'Back to Top';
     backToTopAnchor.classList.add('back-button');

     backToTopAnchor.addEventListener('click', (e) => {
          e.preventDefault(); 
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });

     return backToTopAnchor;
}


// Create a function to generate the pokemon card
function createPokeCard(pokemon) {
     // Create the link wrapper
     const detailLink = document.createElement('a');
     detailLink.href = pokemon.url;
     detailLink.target = '_blank';
     detailLink.classList.add('pokemon-card-link');

     // Create the card container
     const card = document.createElement('div');
     card.classList.add('pokemon-card');

     // Add pokemon name
     const pokemonName = document.createElement('h3');
     pokemonName.textContent = pokemon.name;
     card.appendChild(pokemonName);

     // Add image container and element
     const imgContainer = document.createElement('div');
     imgContainer.classList.add('pk-img-container');
     const imgItem = document.createElement('img');
     imgItem.src = pokemon.sprite;
     imgItem.alt = `Sprite of ${pokemon.name}`;
     imgContainer.appendChild(imgItem);
     card.appendChild(imgContainer);

     // Add Pokemon attributes list
     const pokeAttriList = document.createElement('ul');
     pokeAttriList.classList.add('pk-attributes');

     for (const attri in pokemon.base) {
          const attriValue = document.createElement('li');

          // Create bold style attribute name
          const attriName = document.createElement('span')
          attriName.textContent = `${attri}: `;
          attriName.style.fontWeight = 'bold';

          // Create attribute value
          const attriNumber = document.createElement('span');
          attriNumber.textContent = `${pokemon.base[attri]}`;

          // Insert attribute name and value in the list element
          attriValue.appendChild(attriName);
          attriValue.appendChild(attriNumber);

          // Sanitize attribute name by using reg-exp
          const className = `pk-attri-${attri.toLowerCase().replace(/[\s\.'']/g, '-')}`
          attriValue.classList.add(className);
          pokeAttriList.appendChild(attriValue);
     }
     card.appendChild(pokeAttriList);

     // Append the card container into the anchor div
     detailLink.appendChild(card);


     return detailLink;
}

// Create a function to insert pokemon info and card into the web page
function displayPokemonInfo(typeInfoArray) {
     // Create a section for each type of the pokemon
     typeInfoArray.forEach(info => {
          const section = document.createElement('section');
          section.id = info.type;

          // Create and add H2 title
          const h2 = document.createElement('h2');
          h2.textContent = `Type: ${info.type} (${info.countNum})`;
          section.appendChild(h2)

          // Create and paragraph element
          const p = document.createElement('p');
          p.textContent = `Total HP: ${info.totalHp} | Total Attack: ${info.totalAttack}`;
          section.appendChild(p);

          // Insert the back to top element
          const backLink = backToTop();
          section.appendChild(backLink);

          // Create pokemon info card and insert into section
          sameTypePokemon(info.type).forEach(pokemon => {
               const card = createPokeCard(pokemon);
               section.appendChild(card);
          });

          // Insert entire section into the container
          document.querySelector('.main-container').appendChild(section);
     });
}

displayPokemonInfo(typeInfoArray);