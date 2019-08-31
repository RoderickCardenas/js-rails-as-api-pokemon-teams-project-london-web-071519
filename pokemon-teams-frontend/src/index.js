const BASE_URL = 'http://localhost:3000';
const TRAINERS_URL = `${BASE_URL}/trainers`;
const POKEMONS_URL = `${BASE_URL}/pokemons`;

//Referencing elements
const mainTag = document.querySelector('main');

//Creating card HTML
renderCard = (card) => {
	let divTag = document.createElement('div');
	mainTag.append(divTag);
	divTag.className = 'card';
	divTag.dataset.id = card.id;
	divTag.innerHTML = `
        <p>${card.name}</p>
        <button class="add-poke" data-trainer-id="${card.id}">Add Pokemon</button>
        <ul></ul>
    `;
	cardPokeList = (pokeList) => {
		if (pokeList) {
			pokeList.forEach((pokemon) => {
				let liTag = document.createElement('li');
				liTag.innerHTML = `
            <li>${pokemon.nickname} (${pokemon.species}) <button class="release" data-pokemon-id="${pokemon.id}">Release</button></li>
            `;
				divTag.children[2].append(liTag);
			});
		}
	};
    fetch(`${TRAINERS_URL}/${card.id}`)
    .then((resp) => resp.json())
    .then(cardPokeList);
};


fetch('http://localhost:3000/trainers')
	.then((resp) => resp.json())
	.then((cards) => cards.forEach((card) => renderCard(card)));
