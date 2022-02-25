let btnSortear = document.querySelector(".btnSortear");
let btnJogar = document.querySelector(".btnJogar");
let contentP = document.querySelector(".player .content");
let contentM = document.querySelector(".machine .content");
let choice = document.querySelector(".choice");

var deck = pokemons();
var cardPlayer = 0;
var cardMachine = 0;
var atribSelected = "";
var gameStatus = 0;
var foilChance = 1;
var typeSelected = "";

function tirarCarta() {
    if (!btnSortear.classList.contains("inactive")) {
        gameStatus = -1;
        choice.innerHTML = '';
        choice.innerHTML = 'Clique em um atributo e tipo para escolher qual jogar...';
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
            selectType(1);
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
    var typeOne = document.querySelector(who + " .typeOne");
    var typeOneImage = document.createElement("img");
    var typeTwo = document.querySelector(who + " .typeTwo");
    var cardImg = document.querySelector(who + " .cardImg");
    var pokeImage = document.createElement("img");
    var hp = document.querySelector(who + " .hp");
    var atk = document.querySelector(who + " .ataque");
    var def = document.querySelector(who + " .defesa");
    var spatk = document.querySelector(who + " .spAtaque");
    var spdef = document.querySelector(who + " .spDefesa");
    var speed = document.querySelector(who + " .speed");

    cardNumber.innerHTML = '';
    cardName.innerHTML = '';
    typeOne.innerHTML = '';
    typeTwo.innerHTML = '';
    cardImg.innerHTML = '';
    hp.innerHTML = '';
    atk.innerHTML = '';
    def.innerHTML = '';
    spatk.innerHTML = '';
    spdef.innerHTML = '';
    speed.innerHTML = '';

    typeOne.appendChild(typeOneImage);
    cardImg.appendChild(pokeImage);

    cardNumber.innerHTML = carta.number;
    cardName.innerHTML = carta.nome;
    typeOneImage.src = carta.links.linkTipo1;
    typeOneImage.alt = carta.tipos.primario;

    typeOne.classList.remove("typeActive");
    typeTwo.classList.remove("typeActive");

    if (carta.tipos.secundario != "") {
        var typeTwoImage = document.createElement("img");

        typeTwo.appendChild(typeTwoImage);

        typeTwoImage.src = carta.links.linkTipo2;
        typeTwoImage.alt = carta.tipos.secundario;
    }

    pokeImage.src = carta.links.linkImg;
    pokeImage.alt = carta.nome;
    hp.innerHTML = carta.atributos.hp;
    atk.innerHTML = carta.atributos.ataque;
    def.innerHTML = carta.atributos.defesa;
    spatk.innerHTML = carta.atributos.spAtaque;
    spdef.innerHTML = carta.atributos.spDefesa;
    speed.innerHTML = carta.atributos.speed;

    cardImg.style.backgroundImage = "url(" + carta.links.linkBg + ")";
    cardImg.style.border = "2px solid " + typeColor(carta.tipos.primario);
    content.style.backgroundImage = cardColor(carta.tipos.primario, carta.tipos.secundario);

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

function atribClicked(tagValue) {
    atribSelected = tagValue;

    verifySelections();
}

function verifySelections() {
    if (atribSelected != "" && typeSelected != "") {
        btnJogar.classList.remove("inactive");
    }
}

function jogar() {
    if (!btnJogar.classList.contains("inactive")) {

        var valorJogador = cardPlayer.atributos[atribSelected];
        var valorMaquina = cardMachine.atributos[atribSelected];
        var selectMachine = document.querySelector(".machine ." + atribSelected);
        var msgTime = 2000;
        var atribSel = document.querySelector(".player ." + atribSelected);

        valorJogador = Math.round(valorJogador * bonusCalc());
        atribSel.innerHTML = valorJogador;
        Math.round

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
        typeSelected = "";
        atribSelected = 0;
        choice.innerHTML = '';
        choice.innerHTML = 'Clique no botão Sortear Carta para jogar novamente...';
    }

    return;
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

function selectType(typeNum) {
    var typeOne = document.querySelector(".typeOne");
    var typeTwo = document.querySelector(".typeTwo");

    if (typeNum == 1) {
        typeOne.classList.add("typeActive");
        typeTwo.classList.remove("typeActive");
        typeSelected = cardPlayer.tipos.primario;
    } else if (typeNum == 2) {
        typeOne.classList.remove("typeActive");
        typeTwo.classList.add("typeActive");
        typeSelected = cardPlayer.tipos.secundario;
    }

    verifySelections();

    return;
}

function bonusCalc() {
    var bonusDamage = 0.00;
    var type1Bonus = 0.00;
    var type2Bonus = 1.00;
    var index1 = 0;
    var index2 = 0;

    index1 = getTypeIndex(typeSelected);
    // console.log("Index 1: " + index1);
    index2 = getTypeIndex(cardMachine.tipos.primario);
    // console.log("Index 2: " + index2);
    type1Bonus = getTypeBunos(index1, index2);
    // console.log("Bonus 1: " + type1Bonus);

    if (cardMachine.tipos.secundario != "") {
        index2 = getTypeIndex(cardMachine.tipos.secundario);
        // console.log("Index 3: " + index2);
        type2Bonus = getTypeBunos(index1, index2);
        // console.log("Bonus 2: " + type2Bonus);
    }

    bonusDamage = type1Bonus * type2Bonus;
    console.log("Bonus Total: " + bonusDamage);

    return bonusDamage;
}

function getTypeIndex(type) {
    var index = 0;

    switch (type) {
        case 'Bug':
            index = 0;
            break;
        case 'Dark':
            index = 1;
            break;
        case 'Dragon':
            index = 2;
            break;
        case 'Electric':
            index = 3;
            break;
        case 'Fairy':
            index = 4;
            break;
        case 'Fighting':
            index = 5;
            break;
        case 'Fire':
            index = 6;
            break;
        case 'Flying':
            index = 7;
            break;
        case 'Ghost':
            index = 8;
            break;
        case 'Grass':
            index = 9;
            break;
        case 'Ground':
            index = 10;
            break;
        case 'Ice':
            index = 11;
            break;
        case 'Normal':
            index = 12;
            break;
        case 'Poison':
            index = 13;
            break;
        case 'Psychic':
            index = 14;
            break;
        case 'Rock':
            index = 15;
            break;
        case 'Steel':
            index = 16;
            break;
        case 'Water':
            index = 17;
            break;
        default:
            index = -1;
    }

    return index;
}

function getTypeBunos(typeIndAtk, typeIndDef) {
    const typesDamage = [
    /*     BUG   DARK  DRAG  ELEC  FAIR  FIGH  FIRE  FLYI  GHOS  GRAS  GROU  ICE   NORM  POIS  PSYC  ROCK  STEE  WATE   */
/* BUG  */[1.00, 1.25, 1.00, 1.00, 0.80, 0.80, 0.80, 0.80, 0.80, 1.25, 1.00, 1.00, 1.00, 0.80, 1.25, 1.00, 0.80, 1.00],
/* DARK */[1.00, 0.80, 1.00, 1.00, 0.80, 0.80, 1.00, 1.00, 1.25, 1.00, 1.00, 1.00, 1.00, 1.00, 1.25, 1.00, 1.00, 1.00],
/* DRAG */[1.00, 1.00, 1.25, 1.00, 0.60, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 0.80, 1.00],
/* ELEC */[1.00, 1.00, 0.80, 0.80, 1.00, 1.00, 1.00, 1.25, 1.00, 0.80, 0.60, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.25],
/* FAIR */[1.00, 1.25, 1.25, 1.00, 1.00, 1.25, 0.80, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 0.80, 1.00, 1.00, 0.80, 1.00],
/* FIGH */[0.80, 1.25, 1.00, 1.00, 0.80, 1.00, 1.00, 0.80, 0.60, 1.00, 1.00, 1.25, 1.25, 0.80, 0.80, 1.25, 1.25, 1.00],
/* FIRE */[1.25, 1.00, 0.80, 1.00, 1.00, 1.00, 0.80, 1.00, 1.00, 1.25, 1.00, 1.25, 1.00, 1.00, 1.00, 0.80, 1.25, 0.80],
/* FLYI */[1.25, 1.00, 1.00, 0.80, 1.00, 1.25, 1.00, 1.00, 1.00, 1.25, 1.00, 1.00, 1.00, 1.00, 1.00, 0.80, 0.80, 1.00],
/* GHOS */[1.00, 0.80, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.25, 1.00, 1.00, 1.00, 0.60, 1.00, 1.25, 1.00, 1.00, 1.00],
/* GRAS */[0.80, 1.00, 0.80, 1.00, 1.00, 1.00, 0.80, 0.80, 1.00, 0.80, 1.25, 1.00, 1.00, 0.80, 1.00, 1.25, 0.80, 1.25],
/* GROU */[0.80, 1.00, 1.00, 1.25, 1.00, 1.00, 1.25, 0.60, 1.00, 0.80, 1.00, 1.00, 1.00, 1.25, 1.00, 1.25, 1.25, 1.00],
/* ICE  */[1.00, 1.00, 1.25, 1.00, 1.00, 1.00, 0.80, 1.25, 1.00, 1.25, 1.25, 0.80, 1.00, 1.00, 1.00, 1.00, 0.80, 0.80],
/* NORM */[1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 0.60, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 0.80, 0.80, 1.00],
/* POIS */[1.00, 1.00, 1.00, 1.00, 1.25, 1.00, 1.00, 1.00, 0.80, 1.25, 0.80, 1.00, 1.00, 0.80, 1.00, 0.80, 0.60, 1.00],
/* PSYC */[1.00, 0.60, 1.00, 1.00, 1.00, 1.25, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.25, 0.80, 1.00, 0.80, 1.00],
/* ROCK */[1.25, 1.00, 1.00, 1.00, 1.00, 0.80, 1.25, 1.25, 1.00, 1.00, 0.80, 1.25, 1.00, 1.00, 1.00, 1.00, 0.80, 1.00],
/* STEE */[1.00, 1.00, 1.00, 0.80, 1.25, 1.00, 0.80, 1.00, 1.00, 1.00, 1.00, 1.25, 1.00, 1.00, 1.00, 1.25, 0.80, 0.80],
/* WATE */[1.00, 1.00, 0.80, 1.00, 1.00, 1.00, 1.25, 1.00, 1.00, 0.80, 1.25, 1.00, 1.00, 1.00, 1.00, 1.25, 1.00, 0.80]
    ];
    var bonus = typesDamage[typeIndAtk][typeIndDef];

    return bonus;
}