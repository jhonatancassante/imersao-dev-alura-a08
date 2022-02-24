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
var foilChance = 1;

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
            imprimirMensagem("As cartas acabaram, sorteie novamente para embaralhar o deck.", 3000);
        }
        setTimeout(() => {
            pokeballSpin();
        }, 2000)
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

    if (percent <= foilChance) {
        card.classList.add("foil");
    }

    return;
}

function exibirCarta(carta, who) {
    var content = document.querySelector(who + " .content");
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

    cardImg.style.backgroundImage = "url(" + carta.links.linkBg + ")";
    cardImg.style.border = "2px solid " + typeColor(carta.tipos.primario);
    content.style.backgroundImage = cardColor(carta.tipos.primario, carta.tipos.secundario)

    return;
}

function cardColor(primario, secundario) {
    var color1 = typeColor(primario);
    var color2 = typeColor(secundario);

    if (secundario === "") {
        color2 = typeColor(primario);
    }

    return "linear-gradient(" + color1 + " 0%, " + color1 + " 45%, " + color2 + " 75%, " + color2 + " 100%)";
}

function typeColor(type) {
    var color = "";

    switch (type) {
        case 'Bug':
            color = "#90c12c";
            break;
        case 'Dark':
            color = "#5a5366";
            break;
        case 'Dragon':
            color = "#0a6dc4";
            break;
        case 'Electric':
            color = "#f3d23b";
            break;
        case 'Fairy':
            color = "#ec8fe6";
            break;
        case 'Fighting':
            color = "#ce4069";
            break;
        case 'Fire':
            color = "#ff9c54";
            break;
        case 'Flying':
            color = "#8fa8dd";
            break;
        case 'Ghost':
            color = "#5269ac";
            break;
        case 'Grass':
            color = "#63bb5b";
            break;
        case 'Ground':
            color = "#d97746";
            break;
        case 'Ice':
            color = "#74cec0";
            break;
        case 'Normal':
            color = "#9099a1";
            break;
        case 'Poison':
            color = "#ab6ac8";
            break;
        case 'Psychic':
            color = "#f97176";
            break;
        case 'Rock':
            color = "#c7b78b";
            break;
        case 'Steel':
            color = "#5a8ea1";
            break;
        case 'Water':
            color = "#4d90d5";
            break;
        default:
            color = "#f8f8f8";
    }

    return color;
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
        var msgTime = 2000;

        if (valorJogador > valorMaquina) {
            gameStatus = 3;
            imprimirMensagem("Você venceu!", msgTime);
            changeScore(3, 0);
        } else if (valorJogador < valorMaquina) {
            gameStatus = 0;
            imprimirMensagem("Você perdeu!", msgTime);
            changeScore(0, 3);
        } else {
            gameStatus = 1;
            imprimirMensagem("Deu empate!", msgTime);
            changeScore(1, 1);
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
    var content = document.querySelector(".machine .content");

    content.style.backgroundImage = "none";

    for (var item of atributo) {
        if (item.checked) {
            item.checked = false;
        }
    }

    return;
}

function imprimirMensagem(mensagem, time) {
    let tagBody = document.querySelector("body");

    let tagSpan = document.createElement("span");
    let tagDiv1 = document.createElement("div");
    let tagDiv2 = document.createElement("div");

    tagDiv2.appendChild(tagSpan);
    tagDiv1.appendChild(tagDiv2);
    tagBody.appendChild(tagDiv1);

    tagDiv1.classList.add("modal-mensagem");
    tagDiv1.classList.add("center");

    tagSpan.innerHTML = mensagem;
    tagDiv2.classList.add("animate__animated");
    tagDiv2.classList.add("animate__pulse");
    tagDiv2.classList.add("center");

    if (gameStatus == 3) {
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
        tagDiv1.remove();
    }, time);

    return;
}

function changeScore(pPoint, mPoint) {
    var playerScore = document.querySelector(".playerScore");
    var machineScore = document.querySelector(".machineScore");
    var pointsTemp = 0;

    pointsTemp = parseInt(playerScore.value);
    pointsTemp += pPoint;
    playerScore.value = pointsTemp;

    pointsTemp = parseInt(machineScore.value);
    pointsTemp += mPoint;
    machineScore.value = pointsTemp;
}