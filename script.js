let btnSortear = document.querySelector(".btnSortear");
let btnJogar = document.querySelector(".btnJogar");
let contentP = document.querySelector(".player .content");
let contentM = document.querySelector(".machine .content");
let choice = document.querySelector(".choice");

var deck = pokemons();
var cardPlayer = 0;
var cardMachine = 0;
var newGame = false;
var gameStatus = 0;
var foilChance = 10;

function tirarCarta() {
    if (!btnSortear.classList.contains("inactive")) {
        gameStatus = -1;
        choice.innerHTML = '';
        choice.innerHTML = 'Clique em um atributo para escolher qual jogar...';
        cleanSelectionAtrib();

        if (deck.length > 1) {
            cardMachine = sortearCarta();
            cardPlayer = sortearCarta();
            pokeballSpin();

            contentM.classList.add("fliped");
            btnSortear.classList.add("inactive");
            contentP.classList.remove("fliped");
            foilGeneretor();
            exibirCarta(cardPlayer, ".player");
            newGame = true;
        } else {
            deck = pokemons();
            imprimirMensagem("As cartas acabaram, sorteie novamente para embaralhar o deck.");
        }
    }

    return;
}

function sortearCarta() {
    var indice = parseInt(Math.random() * deck.length);
    var carta = 0;

    carta = deck[indice];
    deck.splice(indice, 1);

    return carta;
}

function pokeballSpin() {
    var pokeball = document.querySelector(".pokeball");

    pokeball.classList.toggle("spinPokeball");

    return;
}

function foilGeneretor() {
    var card = document.querySelector(".player");
    var percent = parseInt(Math.random() * 100);

    card.classList.remove("foil");

    if (percent <= foilChance)
    {
        card.classList.add("foil");
    }

    return;
}

function exibirCarta(carta, who) {
    var cardNumber = document.querySelector(who + " .cardNumber");
    var cardName = document.querySelector(who + " .cardName");
    var cardImg = document.querySelector(who + " .cardImg");
    var tagImage = document.createElement("img");
    var hp = document.querySelector(who + " .hp");
    var atk = document.querySelector(who + " .ataque");
    var def = document.querySelector(who + " .defesa");
    var spatk = document.querySelector(who + " .spAtaque");
    var spdef = document.querySelector(who + " .spDefesa");
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

    return;
}

function atribSelected() {
    if (newGame == true) {
        btnJogar.classList.remove("inactive");
    }
}

function jogar() {
    if (!btnJogar.classList.contains("inactive")) {

        atributoSelecionado = obtemAtributo();

        var valorJogador = cardPlayer.atributos[atributoSelecionado];
        var valorMaquina = cardMachine.atributos[atributoSelecionado];
        var selectMachine = document.querySelector(".machine ." + atributoSelecionado);

        if (valorJogador > valorMaquina) {
            gameStatus = 2;
            imprimirMensagem("Você venceu!");
        } else if (valorJogador < valorMaquina) {
            gameStatus = 0;
            imprimirMensagem("Você perdeu!");
        } else {
            gameStatus = 1;
            imprimirMensagem("Deu empate!");
        }

        btnSortear.classList.remove("inactive");
        contentM.classList.remove("fliped");
        selectMachineAtrib(selectMachine);
        exibirCarta(cardMachine, ".machine");
        btnJogar.classList.add("inactive");
        newGame = false;
        choice.innerHTML = '';
        choice.innerHTML = 'Clique no botão Sortear Carta para jogar novamente...';
    }

    return;
}

function obtemAtributo() {
    var atributo = document.getElementsByName("atributos");

    for (var item of atributo) {
        if (item.checked) {
            return item.value;
        }
    }
}

function selectMachineAtrib(selectMachine) {
    var hp = document.querySelector(".machine .hp");
    var atk = document.querySelector(".machine .ataque");
    var def = document.querySelector(".machine .defesa");
    var spatk = document.querySelector(".machine .spAtaque");
    var spdef = document.querySelector(".machine .spDefesa");
    var speed = document.querySelector(".machine .speed");

    hp.classList.remove("actived");
    atk.classList.remove("actived");
    def.classList.remove("actived");
    spatk.classList.remove("actived");
    spdef.classList.remove("actived");
    speed.classList.remove("actived");
    selectMachine.classList.add("actived");

    return;
}

function cleanSelectionAtrib() {
    var atributo = document.getElementsByName("atributos");

    for (var item of atributo) {
        if (item.checked) {
            item.checked = false;
        }
    }

    return;
}

function imprimirMensagem(mensagem) {
    let tagBody = document.querySelector("body");

    let tagSpan = document.createElement("span");
    let tagDiv = document.createElement("div");

    tagDiv.appendChild(tagSpan);
    tagBody.appendChild(tagDiv);

    tagDiv.classList.add("modal-mensagem");
    tagDiv.classList.add("center");

    tagSpan.innerHTML = mensagem;
    tagSpan.classList.add("animate__animated");
    tagSpan.classList.add("animate__heartBeat");
    tagSpan.classList.add("center");

    if (gameStatus == 2) {
        tagSpan.classList.add("msgWin");
    }
    else if (gameStatus == 0) {
        tagSpan.classList.add("msgLose");
    }
    else if (gameStatus == 1) {
        tagSpan.classList.add("msgDraw");
    }
    else {
        tagSpan.classList.add("msgStandard");
    }

    setTimeout(() => {
        tagDiv.remove();
    }, 2500);

    return;
}