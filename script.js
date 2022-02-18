let btnSortear = document.querySelector(".btnSortear");
let btnJogar = document.querySelector(".btnJogar");
let contentP = document.querySelector(".player .content");
let contentM = document.querySelector(".machine .content");
let choice = document.querySelector(".choice");

var deck = pokemons();
var cardPlayer = 0;
var cardMachine = 0;

function tirarCarta() {
    if (!btnSortear.classList.contains("inactive")) {
        console.log("Sortear");
        choice.classList.remove("inactive");

        if (deck.length > 1) {
            cardMachine = sortearCarta();
            cardPlayer = sortearCarta();

            contentM.classList.add("fliped");
            btnSortear.classList.add("inactive");
            contentP.classList.remove("fliped");
            btnJogar.classList.remove("inactive");
            exibirCarta(cardPlayer, ".player");
            console.log(cardPlayer);
            console.log(cardMachine);
        } else {
            deck = pokemons();
            console.error(
                "As cartas acabaram, sorteie novamente para embaralhar o deck."
            );
        }
    }
}

function sortearCarta() {
    var indice = parseInt(Math.random() * deck.length);
    var carta = 0;

    carta = deck[indice];
    deck.splice(indice, 1);

    return carta;
}

function exibirCarta(carta, who) {
    var cardNumber = document.querySelector(who + " .cardNumber");
    var cardName = document.querySelector(who + " .cardName");
    var cardImg = document.querySelector(who + " .cardImg");
    var tagImage = document.createElement("img");
    var hp = document.querySelector(who + " .hp");
    var atk = document.querySelector(who + " .atk");
    var def = document.querySelector(who + " .def");
    var spatk = document.querySelector(who + " .spatk");
    var spdef = document.querySelector(who + " .spdef");
    var speed = document.querySelector(who + " .speed");

    cardNumber.innerHTML = '';
    cardName.innerHTML = '';
    cardImg.innerHTML = '';
    tagImage.innerHTML = '';
    hp.innerHTML = '';
    atk.innerHTML = '';
    def.innerHTML = '';
    spatk.innerHTML = '';
    spdef.innerHTML = '';
    speed.innerHTML = '';

    cardImg.appendChild(tagImage);

    cardNumber.innerHTML = carta.number;
    cardName.innerHTML = carta.nome;
    tagImage.src = carta.links.linkImg;
    hp.innerHTML = carta.atributos.hp;
    atk.innerHTML = carta.atributos.ataque;
    def.innerHTML = carta.atributos.defesa;
    spatk.innerHTML = carta.atributos.spAtaque;
    spdef.innerHTML = carta.atributos.spDefesa;
    speed.innerHTML = carta.atributos.speed;
}

function jogar() {
    if (!btnJogar.classList.contains("inactive")) {
        console.log("Jogar");

        atributoSelecionado = obtemAtributo();

        console.log(atributoSelecionado);

        btnSortear.classList.remove("inactive");
        contentM.classList.remove("fliped");
        exibirCarta(cardMachine, ".machine");
        btnJogar.classList.add("inactive");
        choice.classList.add("inactive");
    }
}

function obtemAtributo() {
    var atributo = document.getElementsByName("atributos");

    for (var item of atributo) {
        if (item.checked) {
            return item.value;
        }
    }
}