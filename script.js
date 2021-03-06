let btnDraw = document.querySelector(".btnDraw");
let btnPlay = document.querySelector(".btnPlay");
let contentPlayer = document.querySelector(".player .content");
let contentMachine = document.querySelector(".machine .content");
let subtitle = document.querySelector(".subtitle");

let deck = pokemons();
let cardPlayer = 0;
let cardMachine = 0;
let attributeSelected = "";
let gameStatus = 0;
let foilChance = 1;
let typeSelected = "";
let newGame = 0;

function drawCard() {
    clearBonus();

    if (!btnDraw.classList.contains("inactive")) {
        newGame = 1;
        gameStatus = -1;
        subtitle.innerHTML = '';
        subtitle.innerHTML = 'Clique em um atributo e tipo para escolher qual jogar...';
        cleanSelectedAttribute();

        if (deck.length > 1) {
            cardMachine = shuffleCard();
            cardPlayer = shuffleCard();
            pokeballSpin();

            contentMachine.classList.add("fliped");
            btnDraw.classList.add("inactive");
            contentPlayer.classList.remove("fliped");
            foilGeneretor();
            showCard(cardPlayer, ".player");
            selectType(1);
        } else {
            deck = pokemons();
            printMsg("As cartas acabaram, sorteie novamente para embaralhar o deck.", 3000);
        }
        setTimeout(() => {
            pokeballSpin();
        }, 2000)
    }

    return;
}

function clearBonus() {
    if (attributeSelected != "") {
        let attribSel = document.querySelector(".player ." + attributeSelected);
        let multiplier = document.querySelector(".multiplier");
        attribSel.classList.remove("buff");
        attribSel.classList.remove("debuff");
        multiplier.classList.remove("buff");
        multiplier.classList.remove("debuff");
        attributeSelected = "";
        console.clear();
        multiplier.innerHTML = "";
    }

    return;
}

function cleanSelectedAttribute() {
    let attributes = document.getElementsByName("attributes");
    let content = document.querySelector(".machine .content");

    content.style.backgroundImage = "none";

    for (let item of attributes) {
        if (item.checked) {
            item.checked = false;
        }
    }

    return;
}

function shuffleCard() {
    let index = parseInt(Math.random() * deck.length);
    let card = 0;

    card = deck[index];
    deck.splice(index, 1);

    return card;
}

function pokeballSpin() {
    let pokeball = document.querySelector(".pokeball-bg");

    pokeball.classList.toggle("spinPokeball");

    return;
}

function foilGeneretor() {
    let card = document.querySelector(".player");
    let percent = parseInt(Math.random() * 100);

    card.classList.remove("foil");

    if (percent <= foilChance) {
        card.classList.add("foil");
    }

    return;
}

function showCard(card, who) {
    let content = document.querySelector(who + " .content");
    let cardNumber = document.querySelector(who + " .cardNumber");
    let cardName = document.querySelector(who + " .cardName");
    let typeOne = document.querySelector(who + " .typeOne");
    let typeOneImage = document.createElement("img");
    let typeTwo = document.querySelector(who + " .typeTwo");
    let cardImg = document.querySelector(who + " .cardImg");
    let pokeImage = document.createElement("img");
    let hp = document.querySelector(who + " .hp");
    let atk = document.querySelector(who + " .attack");
    let def = document.querySelector(who + " .defense");
    let spAtk = document.querySelector(who + " .spAttack");
    let spDef = document.querySelector(who + " .spDefense");
    let speed = document.querySelector(who + " .speed");

    cardNumber.innerHTML = '';
    cardName.innerHTML = '';
    typeOne.innerHTML = '';
    typeTwo.innerHTML = '';
    cardImg.innerHTML = '';
    hp.innerHTML = '';
    atk.innerHTML = '';
    def.innerHTML = '';
    spAtk.innerHTML = '';
    spDef.innerHTML = '';
    speed.innerHTML = '';

    typeOne.appendChild(typeOneImage);
    cardImg.appendChild(pokeImage);

    cardNumber.innerHTML = card.number;
    cardName.innerHTML = card.name;
    typeOneImage.src = card.links.linkType1;
    typeOneImage.alt = card.types.primary;

    typeOne.classList.remove("typeActive");
    typeTwo.classList.remove("typeActive");

    if (card.types.secondary != "") {
        let typeTwoImage = document.createElement("img");

        typeTwo.appendChild(typeTwoImage);

        typeTwoImage.src = card.links.linkType2;
        typeTwoImage.alt = card.types.secondary;
    }

    pokeImage.src = card.links.linkImg;
    pokeImage.alt = card.name;
    hp.innerHTML = card.attributes.hp;
    atk.innerHTML = card.attributes.attack;
    def.innerHTML = card.attributes.defense;
    spAtk.innerHTML = card.attributes.spAttack;
    spDef.innerHTML = card.attributes.spDefense;
    speed.innerHTML = card.attributes.speed;

    cardImg.style.backgroundImage = "url(" + card.links.linkBg + ")";
    cardImg.style.border = "2px solid " + typeColor(card.types.primary);
    content.style.backgroundImage = cardColor(card.types.primary, card.types.secondary);

    return;
}

function typeColor(type) {
    let color = "";

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

function cardColor(primary, secondary) {
    let color1 = typeColor(primary);
    let color2 = typeColor(secondary);

    if (secondary === "") {
        color2 = typeColor(primary);
    }

    return "linear-gradient(" + color1 + " 0%, " + color1 + " 45%, " + color2 + " 75%, " + color2 + " 100%)";
}

function selectType(typeNum) {
    let typeOne = document.querySelector(".typeOne");
    let typeTwo = document.querySelector(".typeTwo");

    if (typeNum == 1) {
        typeOne.classList.add("typeActive");
        typeTwo.classList.remove("typeActive");
        typeSelected = cardPlayer.types.primary;
    } else if (typeNum == 2) {
        typeOne.classList.remove("typeActive");
        typeTwo.classList.add("typeActive");
        typeSelected = cardPlayer.types.secondary;
    }

    verifySelections();

    return;
}

function attributeClicked(tagValue) {
    attributeSelected = tagValue;

    verifySelections();
}

function verifySelections() {
    if (attributeSelected != "" && typeSelected != "" && newGame == 1) {
        btnPlay.classList.remove("inactive");
    }
}

function playGame() {
    if (!btnPlay.classList.contains("inactive")) {

        let valuePlayer = cardPlayer.attributes[attributeSelected];
        let valueMachine = cardMachine.attributes[attributeSelected];
        let selectMachine = document.querySelector(".machine ." + attributeSelected);
        let msgTime = 2000;
        let attribSel = document.querySelector(".player div." + attributeSelected);
        let bonusApplied = Math.round(bonusCalc());

        valuePlayer = Math.round(valuePlayer * bonusApplied);
        attribSel.innerHTML = valuePlayer;

        applyMultiplier(attribSel,bonusApplied);

        if (valuePlayer > valueMachine) {
            gameStatus = 3;
            printMsg("Voc?? venceu!", msgTime);
            changeScore(3, 0);
        } else if (valuePlayer < valueMachine) {
            gameStatus = 0;
            printMsg("Voc?? perdeu!", msgTime);
            changeScore(0, 3);
        } else {
            gameStatus = 1;
            printMsg("Deu empate!", msgTime);
            changeScore(1, 1);
        }

        btnDraw.classList.remove("inactive");
        contentMachine.classList.remove("fliped");
        selectMachineAttribute(selectMachine);
        showCard(cardMachine, ".machine");
        btnPlay.classList.add("inactive");
        typeSelected = "";
        subtitle.innerHTML = '';
        newGame = 0;
        subtitle.innerHTML = 'Clique no bot??o Sortear Carta para jogar novamente...';
    }

    return;
}

function bonusCalc() {
    let bonusDamage = 0.00;
    let type1Bonus = 0.00;
    let type2Bonus = 1.00;
    let index1 = 0;
    let index2 = 0;

    index1 = getTypeIndex(typeSelected);
    // console.log("Index 1: " + index1);
    index2 = getTypeIndex(cardMachine.types.primary);
    // console.log("Index 2: " + index2);
    type1Bonus = getTypeBunos(index1, index2);
    // console.log("Bonus 1: " + type1Bonus);

    if (cardMachine.types.secondary != "") {
        index2 = getTypeIndex(cardMachine.types.secondary);
        // console.log("Index 3: " + index2);
        type2Bonus = getTypeBunos(index1, index2);
        // console.log("Bonus 2: " + type2Bonus);
    }

    bonusDamage = type1Bonus * type2Bonus;
    console.log("Bonus Total: " + bonusDamage);

    return bonusDamage;
}

function getTypeIndex(type) {
    let index = 0;

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
/* BUG  */[1.00, 2.00, 1.00, 1.00, 0.50, 0.50, 0.50, 0.50, 0.50, 2.00, 1.00, 1.00, 1.00, 0.50, 2.00, 1.00, 0.50, 1.00],
/* DARK */[1.00, 0.50, 1.00, 1.00, 0.50, 0.50, 1.00, 1.00, 2.00, 1.00, 1.00, 1.00, 1.00, 1.00, 2.00, 1.00, 1.00, 1.00],
/* DRAG */[1.00, 1.00, 2.00, 1.00, 0.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 0.50, 1.00],
/* ELEC */[1.00, 1.00, 0.50, 0.50, 1.00, 1.00, 1.00, 2.00, 1.00, 0.50, 0.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 2.00],
/* FAIR */[1.00, 2.00, 2.00, 1.00, 1.00, 2.00, 0.50, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 0.50, 1.00, 1.00, 0.50, 1.00],
/* FIGH */[0.50, 2.00, 1.00, 1.00, 0.50, 1.00, 1.00, 0.50, 0.00, 1.00, 1.00, 2.00, 2.00, 0.50, 0.50, 2.00, 2.00, 1.00],
/* FIRE */[2.00, 1.00, 0.50, 1.00, 1.00, 1.00, 0.50, 1.00, 1.00, 2.00, 1.00, 2.00, 1.00, 1.00, 1.00, 0.50, 2.00, 0.50],
/* FLYI */[2.00, 1.00, 1.00, 0.50, 1.00, 2.00, 1.00, 1.00, 1.00, 2.00, 1.00, 1.00, 1.00, 1.00, 1.00, 0.50, 0.50, 1.00],
/* GHOS */[1.00, 0.50, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 2.00, 1.00, 1.00, 1.00, 0.00, 1.00, 2.00, 1.00, 1.00, 1.00],
/* GRAS */[0.50, 1.00, 0.50, 1.00, 1.00, 1.00, 0.50, 0.50, 1.00, 0.50, 2.00, 1.00, 1.00, 0.50, 1.00, 2.00, 0.50, 2.00],
/* GROU */[0.50, 1.00, 1.00, 2.00, 1.00, 1.00, 2.00, 0.00, 1.00, 0.50, 1.00, 1.00, 1.00, 2.00, 1.00, 2.00, 2.00, 1.00],
/* ICE  */[1.00, 1.00, 2.00, 1.00, 1.00, 1.00, 0.50, 2.00, 1.00, 2.00, 2.00, 0.50, 1.00, 1.00, 1.00, 1.00, 0.50, 0.50],
/* NORM */[1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 0.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 0.50, 0.50, 1.00],
/* POIS */[1.00, 1.00, 1.00, 1.00, 2.00, 1.00, 1.00, 1.00, 0.50, 2.00, 0.50, 1.00, 1.00, 0.50, 1.00, 0.50, 0.00, 1.00],
/* PSYC */[1.00, 0.00, 1.00, 1.00, 1.00, 2.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 2.00, 0.50, 1.00, 0.50, 1.00],
/* ROCK */[2.00, 1.00, 1.00, 1.00, 1.00, 0.50, 2.00, 2.00, 1.00, 1.00, 0.50, 2.00, 1.00, 1.00, 1.00, 1.00, 0.50, 1.00],
/* STEE */[1.00, 1.00, 1.00, 0.50, 2.00, 1.00, 0.50, 1.00, 1.00, 1.00, 1.00, 2.00, 1.00, 1.00, 1.00, 2.00, 0.50, 0.50],
/* WATE */[1.00, 1.00, 0.50, 1.00, 1.00, 1.00, 2.00, 1.00, 1.00, 0.50, 2.00, 1.00, 1.00, 1.00, 1.00, 2.00, 1.00, 0.50]
    ];
    let bonus = typesDamage[typeIndAtk][typeIndDef];

    return bonus;
}

function applyMultiplier(attribSel, bonusApplied) {
    let multiplier = document.querySelector(".multiplier");

    if (bonusApplied > 1) {
        attribSel.classList.add("buff");
        multiplier.classList.add("buff");
        multiplier.innerHTML = "x" + bonusApplied;
    } else if (bonusApplied < 1) {
        attribSel.classList.add("debuff");
        multiplier.classList.add("debuff");
        multiplier.innerHTML = "x" + bonusApplied;
    }

    return;
}

function printMsg(mensagem, time) {
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

    msgTypeColor(tagSpan);

    setTimeout(() => {
        tagDiv1.remove();
    }, time);

    return;
}

function msgTypeColor(tagSpan) {
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

    return;
}

function changeScore(playerPoint, machinePoint) {
    let playerScore = document.querySelector(".playerScore");
    let machineScore = document.querySelector(".machineScore");
    let pointsTemp = 0;

    pointsTemp = parseInt(playerScore.value);
    pointsTemp += playerPoint;
    playerScore.value = pointsTemp;

    pointsTemp = parseInt(machineScore.value);
    pointsTemp += machinePoint;
    machineScore.value = pointsTemp;
}

function selectMachineAttribute(selectMachine) {
    let hp = document.querySelector(".machine .hp");
    let atk = document.querySelector(".machine .attack");
    let def = document.querySelector(".machine .defense");
    let spAtk = document.querySelector(".machine .spAttack");
    let spDef = document.querySelector(".machine .spDefense");
    let speed = document.querySelector(".machine .speed");

    hp.classList.remove("actived");
    atk.classList.remove("actived");
    def.classList.remove("actived");
    spAtk.classList.remove("actived");
    spDef.classList.remove("actived");
    speed.classList.remove("actived");
    selectMachine.classList.add("actived");

    return;
}