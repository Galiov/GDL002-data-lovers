

document.getElementById("welcome").addEventListener("click", showWelcome);
document.getElementById("story").addEventListener("click", showStory);
document.getElementById("howToPlay").addEventListener("click", showHowToPlay);
document.getElementById("pokemons").addEventListener("click", showPokemons1);

const viewOne = document.getElementById("welcomeView");
const viewTwo = document.getElementById("storyView");
const viewThree =document.getElementById("howToPlayView");
const viewFour = document.getElementById("pokemonsView");

function showWelcome(){
	viewOne.style.display = 'block';
	viewTwo.style.display = 'none';
	viewThree.style.display = 'none';
	viewFour.style.display = 'none';
}

function showStory(){
	viewOne.style.display = 'none';
	viewTwo.style.display = 'block';
	viewThree.style.display = 'none';
	viewFour.style.display = 'none';
}

function showHowToPlay(){
	viewOne.style.display = 'none';
	viewTwo.style.display = 'none';
	viewThree.style.display = 'block';
	viewFour.style.display = 'none';
}

function showPokemons1(){
	viewOne.style.display = 'none';
	viewTwo.style.display = 'none';
	viewThree.style.display = 'none';
	viewFour.style.display = 'block';
}

function pokemonIconTemplate(pokemon){
	return `
	<div class="poke-box">
		<div class="pokemon-name">
			<img src="${pokemon.img}">
			${pokemon.name}
			<br>
			Número de PokeDex: ${pokemon.num}
		</div>
		<div class="detail">
			<img src="${pokemon.img}">
			<h2>${pokemon.name} / ${pokemon.num}
			<br>
			Tipo: ${pokemon.type}</h2>
			<h3>Dulce con el que evoluciona:</h3> 
			<p>-${pokemon.candy}.</p>
			<h3>Caramelos que necesitas para tu siguiente Evolución:</h3>
			<p>-${pokemon.candy_count}.</p>
			<h3>Para encontrar un Huevo de este Pókemon debes caminar:</h3>
			<p>-${pokemon.egg}.</p>
		</div>
	</div>
`; 
}

function pokemonIcon (data){
	document.getElementById("showTypes").innerHTML = `
	<p>Pokemons (${data.length} results)</p>
	${data.map(pokemonIconTemplate).join("")}`;
}

//funcion de prueba para mostrar el tipo
function showFilter(type){
	let divPokemonList = document.getElementById('showTypes');
	divPokemonList.innerHTML = "";
	const typeResult = window.filterType(POKEMON.pokemon, type.value);
	pokemonIcon(typeResult);
	return typeResult;
}


//funciones que muestran el tipo
//llamando funcion de prueba que muestra el tipo, aparece activada sin hacer click
const grass = document.getElementById("typeGrass");
grass.addEventListener("click", function () {
	showFilter(grass);});

const water = document.getElementById("typeWater");
water.addEventListener("click",function () {showFilter(water);});

const ground = document.getElementById("typeGround");
ground.addEventListener("click",function () {showFilter(ground);});

const psychic = document.getElementById("typePsychic");
psychic.addEventListener("click",function () {showFilter(psychic);});

const ghost = document.getElementById("typeGhost");
ghost.addEventListener("click",function () {showFilter(ghost);});

const dark = document.getElementById("typeDark");
dark.addEventListener("click",function () {showFilter(dark); showText();});

const poison = document.getElementById("typePoison");
poison.addEventListener("click",function () {showFilter(poison);});

const fighting = document.getElementById("typeFighting");
fighting.addEventListener("click",function () {showFilter(fighting);});

const steel = document.getElementById("typeSteel");
steel.addEventListener("click",function () {showFilter(steel); showText();});

const bug = document.getElementById("typeBug");
bug.addEventListener("click",function () {showFilter(bug);});

const fire = document.getElementById("typeFire");
fire.addEventListener("click",function () {showFilter(fire);});

const dragon = document.getElementById("typeDragon");
dragon.addEventListener("click",function () {showFilter(dragon);});

const flying = document.getElementById("typeFlying");
flying.addEventListener("click",function () {showFilter(flying);});

const normal = document.getElementById("typeNormal");
normal.addEventListener("click",function () {showFilter(normal);});

const electric = document.getElementById("typeElectric");
electric.addEventListener("click",function () {showFilter(electric);});

const rock = document.getElementById("typeRock");
rock.addEventListener("click",function () {showFilter(rock);});

const ice = document.getElementById("typeIce");
ice.addEventListener("click",function () {showFilter(ice);});

//boton A-Z
function showAlphabetical () {
	const allPokemons = POKEMON.pokemon;
	const ordererPokemons = alphabeticalOrder(allPokemons);
	pokemonIcon(ordererPokemons);
}

//boton Z-A
function showAlphabeticalInverse () {
	const allPokemons = POKEMON.pokemon;
	const ordererPokemons = alphabeticalInverseOrder(allPokemons);
	pokemonIcon(ordererPokemons);
}

//y cómo obtengo la data que debo pasarle al boton?
const aToZ = document.getElementById("alphabetical");
aToZ.addEventListener("click", showAlphabetical);

const zToA = document.getElementById("alphabeticalInverse");
zToA.addEventListener("click", showAlphabeticalInverse);




function showText(){
	const text = ("Este tipo de pokemon no se encuentra en la region de kanto");
	document.getElementById("showTypes").innerHTML= text;
}


function showModaResult () {
const resultModa = moda(POKEMON.pokemon);
const templateModa= `
<div class="moda">
	<p><img class="icon-img" src="https://i.postimg.cc/J0KBD2WJ/poison.png">
	<br>
	Venenoso: ${resultModa.Poison}</p>
	<p><img class="icon-img" src="https://i.postimg.cc/1zN6CBph/water.png">
		<br>
		Agua: ${resultModa.Water}</h3>
	<p><img class="icon-img" src="https://i.postimg.cc/MT7BxGP9/normal.png">
	<br>
	Normal: ${resultModa.Normal}</p>
	<p><img class="icon-img" src="https://i.postimg.cc/k4s5fRhP/flying.png">
	<br>
	Volador: ${resultModa.Flying}</p>
	<p><img class="icon-img" src="https://i.postimg.cc/g0vjLTVJ/grass.png">
		<br>
		Planta: ${resultModa.Grass}</p>
	<p><img class="icon-img" src="https://i.postimg.cc/2SLVr63n/ground.png">
		<br>
		Tierra: ${resultModa.Ground}</h3>
	<p><img class="icon-img" src="https://i.postimg.cc/8kbv0jr5/psychic.png">
		<br>
		Psiquico: ${resultModa.Psychic}</p>
	<p><img class="icon-img" src="https://i.postimg.cc/0NLGPF8y/bug.png">
		<br>
		Bicho: ${resultModa.Bug}</p>
	<p><img class="icon-img" src="https://i.postimg.cc/L5s874rY/fire.png">
		<br>
		Fuego: ${resultModa.Fire}</p>
	<p><img class="icon-img" src="https://i.postimg.cc/dVfrjpZj/rock.png">
		<br>
		Roca: ${resultModa.Rock}</p>
	<p><img class="icon-img" src="https://i.postimg.cc/zXXhZ8nk/electric.png">
		<br>
		Electrico: ${resultModa.Electric}</p>
	<p><img class="icon-img" src="https://i.postimg.cc/DzVmZTbH/fighting.png">
		<br>
		Lucha: ${resultModa.Fighting}</p>
	<p><img class="icon-img" src="https://i.postimg.cc/brqtvj4p/ice.png">
		<br>
		Hielo: ${resultModa.Ice}</p>
	<p><img class="icon-img" src="https://i.postimg.cc/yxr8z4Hf/dragon.png">
		<br>
		Dragón: ${resultModa.Dragon}</p>
	<p><img class="icon-img" src="https://i.postimg.cc/MTqT7m5Y/ghost.png">
		<br>
		Fantasma: ${resultModa.Ghost}</p>
	<p><img class="icon-img" src="https://i.postimg.cc/rpdC6M2H/dark.png">
		<br>
		Siniestro: 0</p>
	<p><img class="icon-img" src="https://i.postimg.cc/cHy3V3mK/steel.png">
		<br>
		Acero: 0</p>
</div>`;
document.getElementById("showTypes").innerHTML= templateModa;

}

const botonModaDescendente= document.getElementById("moda-descendente");
botonModaDescendente.addEventListener("click", showModaResult);
