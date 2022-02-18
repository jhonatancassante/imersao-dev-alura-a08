function pokemons() {
    var data = [{
            number: 1,
            nome: "Bulbasaur",
            tipos: { primario: "Grass", secundario: "Poison" },
            atributos: {
                hp: 45,
                ataque: 49,
                defesa: 49,
                spAtaque: 65,
                spDefesa: 65,
                speed: 45
            },
            links: {
                linkIcon: "",
                linkImg: "./img/001.png",
                linkTipo1: "",
                linkTipo2: ""
            }
        },
        {
            number: 2,
            nome: "Ivysaur",
            tipos: { primario: "Grass", secundario: "Poison" },
            atributos: {
                hp: 60,
                ataque: 62,
                defesa: 63,
                spAtaque: 80,
                spDefesa: 80,
                speed: 60
            },
            links: {
                linkIcon: "",
                linkImg: "./img/002.png",
                linkTipo1: "",
                linkTipo2: ""
            }
        },
        {
            number: 3,
            nome: "Venusaur",
            tipos: { primario: "Grass", secundario: "Poison" },
            atributos: {
                hp: 80,
                ataque: 82,
                defesa: 83,
                spAtaque: 100,
                spDefesa: 100,
                speed: 80
            },
            links: {
                linkIcon: "",
                linkImg: "./img/003.png",
                linkTipo1: "",
                linkTipo2: ""
            }
        },
        {
            number: 3,
            nome: "Mega Venusaur",
            tipos: { primario: "Grass", secundario: "Poison" },
            atributos: {
                hp: 80,
                ataque: 100,
                defesa: 123,
                spAtaque: 122,
                spDefesa: 120,
                speed: 80
            },
            links: {
                linkIcon: "",
                linkImg: "./img/003M.png",
                linkTipo1: "",
                linkTipo2: ""
            }
        },
        {
            number: 4,
            nome: "Charmander",
            tipos: { primario: "Fire", secundario: "" },
            atributos: {
                hp: 39,
                ataque: 52,
                defesa: 43,
                spAtaque: 60,
                spDefesa: 50,
                speed: 65
            },
            links: {
                linkIcon: "",
                linkImg: "./img/004.png",
                linkTipo1: "",
                linkTipo2: ""
            }
        },
        {
            number: 5,
            nome: "Charmeleon",
            tipos: { primario: "Fire", secundario: "" },
            atributos: {
                hp: 58,
                ataque: 64,
                defesa: 58,
                spAtaque: 80,
                spDefesa: 65,
                speed: 80
            },
            links: {
                linkIcon: "",
                linkImg: "./img/005.png",
                linkTipo1: "",
                linkTipo2: ""
            }
        },
        {
            number: 6,
            nome: "Charizard",
            tipos: { primario: "Fire", secundario: "Flying" },
            atributos: {
                hp: 78,
                ataque: 84,
                defesa: 78,
                spAtaque: 109,
                spDefesa: 85,
                speed: 100
            },
            links: {
                linkIcon: "",
                linkImg: "./img/006.png",
                linkTipo1: "",
                linkTipo2: ""
            }
        },
        {
            number: 6,
            nome: "Mega Charizard X",
            tipos: { primario: "Fire", secundario: "Dragon" },
            atributos: {
                hp: 78,
                ataque: 130,
                defesa: 111,
                spAtaque: 130,
                spDefesa: 85,
                speed: 100
            },
            links: {
                linkIcon: "",
                linkImg: "./img/006M-X.png",
                linkTipo1: "",
                linkTipo2: ""
            }
        },
        {
            number: 6,
            nome: "Mega Charizard Y",
            tipos: { primario: "Fire", secundario: "Flying" },
            atributos: {
                hp: 78,
                ataque: 104,
                defesa: 78,
                spAtaque: 159,
                spDefesa: 115,
                speed: 100
            },
            links: {
                linkIcon: "",
                linkImg: "./img/006M-Y.png",
                linkTipo1: "",
                linkTipo2: ""
            }
        },
        {
            number: 7,
            nome: "Squirtle",
            tipos: { primario: "Water", secundario: "" },
            atributos: {
                hp: 44,
                ataque: 48,
                defesa: 65,
                spAtaque: 50,
                spDefesa: 64,
                speed: 43
            },
            links: {
                linkIcon: "",
                linkImg: "./img/007.png",
                linkTipo1: "",
                linkTipo2: ""
            }
        },
        {
            number: 8,
            nome: "Wartortle",
            tipos: { primario: "Water", secundario: "" },
            atributos: {
                hp: 59,
                ataque: 63,
                defesa: 80,
                spAtaque: 65,
                spDefesa: 80,
                speed: 58
            },
            links: {
                linkIcon: "",
                linkImg: "./img/008.png",
                linkTipo1: "",
                linkTipo2: ""
            }
        },
        {
            number: 9,
            nome: "Blastoise",
            tipos: { primario: "Water", secundario: "" },
            atributos: {
                hp: 79,
                ataque: 83,
                defesa: 100,
                spAtaque: 85,
                spDefesa: 105,
                speed: 78
            },
            links: {
                linkIcon: "",
                linkImg: "./img/009.png",
                linkTipo1: "",
                linkTipo2: ""
            }
        },
        {
            number: 9,
            nome: "Blastoise (Mega Blastoise)",
            tipos: { primario: "Water", secundario: "" },
            atributos: {
                hp: 79,
                ataque: 103,
                defesa: 120,
                spAtaque: 135,
                spDefesa: 115,
                speed: 78
            },
            links: {
                linkIcon: "",
                linkImg: "./img/009M.png",
                linkTipo1: "",
                linkTipo2: ""
            }
        },
        {
            number: 10,
            nome: "Caterpie",
            tipos: { primario: "Bug", secundario: "" },
            atributos: {
                hp: 45,
                ataque: 30,
                defesa: 35,
                spAtaque: 20,
                spDefesa: 20,
                speed: 45
            },
            links: {
                linkIcon: "",
                linkImg: "./img/010.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 11,
            nome: "Metapod",
            tipos: { primario: "Bug", secundario: "" },
            atributos: {
                hp: 50,
                ataque: 20,
                defesa: 55,
                spAtaque: 25,
                spDefesa: 25,
                speed: 30
            },
            links: {
                linkIcon: "",
                linkImg: "./img/011.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 12,
            nome: "Butterfree",
            tipos: { primario: "Bug", secundario: "Flying" },
            atributos: {
                hp: 60,
                ataque: 45,
                defesa: 50,
                spAtaque: 90,
                spDefesa: 80,
                speed: 70
            },
            links: {
                linkIcon: "",
                linkImg: "./img/012.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 13,
            nome: "Weedle",
            tipos: { primario: "Bug", secundario: "Poison" },
            atributos: {
                hp: 40,
                ataque: 35,
                defesa: 30,
                spAtaque: 20,
                spDefesa: 20,
                speed: 50
            },
            links: {
                linkIcon: "",
                linkImg: "./img/013.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 14,
            nome: "Kakuna",
            tipos: { primario: "Bug", secundario: "Poison" },
            atributos: {
                hp: 45,
                ataque: 25,
                defesa: 50,
                spAtaque: 25,
                spDefesa: 25,
                speed: 35
            },
            links: {
                linkIcon: "",
                linkImg: "./img/014.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 15,
            nome: "Beedrill",
            tipos: { primario: "Bug", secundario: "Poison" },
            atributos: {
                hp: 65,
                ataque: 90,
                defesa: 40,
                spAtaque: 45,
                spDefesa: 80,
                speed: 75
            },
            links: {
                linkIcon: "",
                linkImg: "./img/015.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 15,
            nome: "Beedrill (Mega Beedrill)",
            tipos: { primario: "Bug", secundario: "Poison" },
            atributos: {
                hp: 65,
                ataque: 150,
                defesa: 40,
                spAtaque: 15,
                spDefesa: 80,
                speed: 145
            },
            links: {
                linkIcon: "",
                linkImg: "./img/015M.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 16,
            nome: "Pidgey",
            tipos: { primario: "Normal", secundario: "Flying" },
            atributos: {
                hp: 40,
                ataque: 45,
                defesa: 40,
                spAtaque: 35,
                spDefesa: 35,
                speed: 56
            },
            links: {
                linkIcon: "",
                linkImg: "./img/016.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 17,
            nome: "Pidgeotto",
            tipos: { primario: "Normal", secundario: "Flying" },
            atributos: {
                hp: 63,
                ataque: 60,
                defesa: 55,
                spAtaque: 50,
                spDefesa: 50,
                speed: 71
            },
            links: {
                linkIcon: "",
                linkImg: "./img/017.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 18,
            nome: "Pidgeot",
            tipos: { primario: "Normal", secundario: "Flying" },
            atributos: {
                hp: 83,
                ataque: 80,
                defesa: 75,
                spAtaque: 70,
                spDefesa: 70,
                speed: 101
            },
            links: {
                linkIcon: "",
                linkImg: "./img/018.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 18,
            nome: "Pidgeot (Mega Pidgeot)",
            tipos: { primario: "Normal", secundario: "Flying" },
            atributos: {
                hp: 83,
                ataque: 80,
                defesa: 80,
                spAtaque: 135,
                spDefesa: 80,
                speed: 121
            },
            links: {
                linkIcon: "",
                linkImg: "./img/018M.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 19,
            nome: "Rattata",
            tipos: { primario: "Normal", secundario: "" },
            atributos: {
                hp: 30,
                ataque: 56,
                defesa: 35,
                spAtaque: 25,
                spDefesa: 35,
                speed: 72
            },
            links: {
                linkIcon: "",
                linkImg: "./img/019.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 19,
            nome: "Rattata (Alolan Rattata)",
            tipos: { primario: "Dark", secundario: "Normal" },
            atributos: {
                hp: 30,
                ataque: 56,
                defesa: 35,
                spAtaque: 25,
                spDefesa: 35,
                speed: 72
            },
            links: {
                linkIcon: "",
                linkImg: "./img/019A.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 20,
            nome: "Raticate",
            tipos: { primario: "Normal", secundario: "" },
            atributos: {
                hp: 55,
                ataque: 81,
                defesa: 60,
                spAtaque: 50,
                spDefesa: 70,
                speed: 97
            },
            links: {
                linkIcon: "",
                linkImg: "./img/020.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 20,
            nome: "Raticate (Alolan Raticate)",
            tipos: { primario: "Dark", secundario: "Normal" },
            atributos: {
                hp: 75,
                ataque: 71,
                defesa: 70,
                spAtaque: 40,
                spDefesa: 80,
                speed: 77
            },
            links: {
                linkIcon: "",
                linkImg: "./img/020A.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 21,
            nome: "Spearow",
            tipos: { primario: "Normal", secundario: "Flying" },
            atributos: {
                hp: 40,
                ataque: 60,
                defesa: 30,
                spAtaque: 31,
                spDefesa: 31,
                speed: 70
            },
            links: {
                linkIcon: "",
                linkImg: "./img/021.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 22,
            nome: "Fearow",
            tipos: { primario: "Normal", secundario: "Flying" },
            atributos: {
                hp: 65,
                ataque: 90,
                defesa: 65,
                spAtaque: 61,
                spDefesa: 61,
                speed: 100
            },
            links: {
                linkIcon: "",
                linkImg: "./img/022.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 23,
            nome: "Ekans",
            tipos: { primario: "Poison", secundario: "" },
            atributos: {
                hp: 35,
                ataque: 60,
                defesa: 44,
                spAtaque: 40,
                spDefesa: 54,
                speed: 55
            },
            links: {
                linkIcon: "",
                linkImg: "./img/023.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 24,
            nome: "Arbok",
            tipos: { primario: "Poison", secundario: "" },
            atributos: {
                hp: 60,
                ataque: 95,
                defesa: 69,
                spAtaque: 65,
                spDefesa: 79,
                speed: 80
            },
            links: {
                linkIcon: "",
                linkImg: "./img/024.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 25,
            nome: "Pikachu",
            tipos: { primario: "Electric", secundario: "" },
            atributos: {
                hp: 35,
                ataque: 55,
                defesa: 40,
                spAtaque: 50,
                spDefesa: 50,
                speed: 90
            },
            links: {
                linkIcon: "",
                linkImg: "./img/025.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 25,
            nome: "Pikachu (Partner Pikachu)",
            tipos: { primario: "Electric", secundario: "" },
            atributos: {
                hp: 45,
                ataque: 80,
                defesa: 50,
                spAtaque: 75,
                spDefesa: 60,
                speed: 120
            },
            links: {
                linkIcon: "",
                linkImg: "./img/025LG.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 26,
            nome: "Raichu",
            tipos: { primario: "Electric", secundario: "" },
            atributos: {
                hp: 60,
                ataque: 90,
                defesa: 55,
                spAtaque: 90,
                spDefesa: 80,
                speed: 110
            },
            links: {
                linkIcon: "",
                linkImg: "./img/026.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 26,
            nome: "Raichu (Alolan Raichu)",
            tipos: { primario: "Electric", secundario: "Psychic" },
            atributos: {
                hp: 60,
                ataque: 85,
                defesa: 50,
                spAtaque: 95,
                spDefesa: 85,
                speed: 110
            },
            links: {
                linkIcon: "",
                linkImg: "./img/026A.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 27,
            nome: "Sandshrew",
            tipos: { primario: "Ground", secundario: "" },
            atributos: {
                hp: 50,
                ataque: 75,
                defesa: 85,
                spAtaque: 20,
                spDefesa: 30,
                speed: 40
            },
            links: {
                linkIcon: "",
                linkImg: "./img/027.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 27,
            nome: "Sandshrew (Alolan Sandshrew)",
            tipos: { primario: "Ice", secundario: "Steel" },
            atributos: {
                hp: 50,
                ataque: 75,
                defesa: 90,
                spAtaque: 10,
                spDefesa: 35,
                speed: 40
            },
            links: {
                linkIcon: "",
                linkImg: "./img/027A.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 28,
            nome: "Sandslash",
            tipos: { primario: "Ground", secundario: "" },
            atributos: {
                hp: 75,
                ataque: 100,
                defesa: 110,
                spAtaque: 45,
                spDefesa: 55,
                speed: 65
            },
            links: {
                linkIcon: "",
                linkImg: "./img/028.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 28,
            nome: "Sandslash (Alolan Sandslash)",
            tipos: { primario: "Ice", secundario: "Steel" },
            atributos: {
                hp: 75,
                ataque: 100,
                defesa: 120,
                spAtaque: 25,
                spDefesa: 65,
                speed: 65
            },
            links: {
                linkIcon: "",
                linkImg: "./img/028A.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 29,
            nome: "Nidoran♀",
            tipos: { primario: "Poison", secundario: "" },
            atributos: {
                hp: 55,
                ataque: 47,
                defesa: 52,
                spAtaque: 40,
                spDefesa: 40,
                speed: 41
            },
            links: {
                linkIcon: "",
                linkImg: "./img/029.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 30,
            nome: "Nidorina",
            tipos: { primario: "Poison", secundario: "" },
            atributos: {
                hp: 70,
                ataque: 62,
                defesa: 67,
                spAtaque: 55,
                spDefesa: 55,
                speed: 56
            },
            links: {
                linkIcon: "",
                linkImg: "./img/030.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 31,
            nome: "Nidoqueen",
            tipos: { primario: "Poison", secundario: "Ground" },
            atributos: {
                hp: 90,
                ataque: 92,
                defesa: 87,
                spAtaque: 75,
                spDefesa: 85,
                speed: 76
            },
            links: {
                linkIcon: "",
                linkImg: "./img/031.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 32,
            nome: "Nidoran♂",
            tipos: { primario: "Poison", secundario: "" },
            atributos: {
                hp: 46,
                ataque: 57,
                defesa: 40,
                spAtaque: 40,
                spDefesa: 40,
                speed: 50
            },
            links: {
                linkIcon: "",
                linkImg: "./img/032.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 33,
            nome: "Nidorino",
            tipos: { primario: "Poison", secundario: "" },
            atributos: {
                hp: 61,
                ataque: 72,
                defesa: 57,
                spAtaque: 55,
                spDefesa: 55,
                speed: 65
            },
            links: {
                linkIcon: "",
                linkImg: "./img/033.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 34,
            nome: "Nidoking",
            tipos: { primario: "Poison", secundario: "Ground" },
            atributos: {
                hp: 81,
                ataque: 102,
                defesa: 77,
                spAtaque: 85,
                spDefesa: 75,
                speed: 85
            },
            links: {
                linkIcon: "",
                linkImg: "./img/034.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 35,
            nome: "Clefairy",
            tipos: { primario: "Fairy", secundario: "" },
            atributos: {
                hp: 70,
                ataque: 45,
                defesa: 48,
                spAtaque: 60,
                spDefesa: 65,
                speed: 35
            },
            links: {
                linkIcon: "",
                linkImg: "./img/035.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 36,
            nome: "Clefable",
            tipos: { primario: "Fairy", secundario: "" },
            atributos: {
                hp: 95,
                ataque: 70,
                defesa: 73,
                spAtaque: 95,
                spDefesa: 90,
                speed: 60
            },
            links: {
                linkIcon: "",
                linkImg: "./img/036.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 37,
            nome: "Vulpix",
            tipos: { primario: "Fire", secundario: "" },
            atributos: {
                hp: 38,
                ataque: 41,
                defesa: 40,
                spAtaque: 50,
                spDefesa: 65,
                speed: 65
            },
            links: {
                linkIcon: "",
                linkImg: "./img/037.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 37,
            nome: "Vulpix (Alolan Vulpix)",
            tipos: { primario: "Ice", secundario: "" },
            atributos: {
                hp: 38,
                ataque: 41,
                defesa: 40,
                spAtaque: 50,
                spDefesa: 65,
                speed: 65
            },
            links: {
                linkIcon: "",
                linkImg: "./img/037A.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 38,
            nome: "Ninetales",
            tipos: { primario: "Fire", secundario: "" },
            atributos: {
                hp: 73,
                ataque: 76,
                defesa: 75,
                spAtaque: 81,
                spDefesa: 100,
                speed: 100
            },
            links: {
                linkIcon: "",
                linkImg: "./img/038.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 38,
            nome: "Ninetales (Alolan Ninetales)",
            tipos: { primario: "Ice", secundario: "Fairy" },
            atributos: {
                hp: 73,
                ataque: 67,
                defesa: 75,
                spAtaque: 81,
                spDefesa: 100,
                speed: 109
            },
            links: {
                linkIcon: "",
                linkImg: "./img/038A.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 39,
            nome: "Jigglypuff",
            tipos: { primario: "Normal", secundario: "Fairy" },
            atributos: {
                hp: 115,
                ataque: 45,
                defesa: 20,
                spAtaque: 45,
                spDefesa: 25,
                speed: 20
            },
            links: {
                linkIcon: "",
                linkImg: "./img/039.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 40,
            nome: "Wigglytuff",
            tipos: { primario: "Normal", secundario: "Fairy" },
            atributos: {
                hp: 140,
                ataque: 70,
                defesa: 45,
                spAtaque: 85,
                spDefesa: 50,
                speed: 45
            },
            links: {
                linkIcon: "",
                linkImg: "./img/040.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 41,
            nome: "Zubat",
            tipos: { primario: "Poison", secundario: "Flying" },
            atributos: {
                hp: 40,
                ataque: 45,
                defesa: 35,
                spAtaque: 30,
                spDefesa: 40,
                speed: 55
            },
            links: {
                linkIcon: "",
                linkImg: "./img/041.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 42,
            nome: "Golbat",
            tipos: { primario: "Poison", secundario: "Flying" },
            atributos: {
                hp: 75,
                ataque: 80,
                defesa: 70,
                spAtaque: 65,
                spDefesa: 75,
                speed: 90
            },
            links: {
                linkIcon: "",
                linkImg: "./img/042.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 43,
            nome: "Oddish",
            tipos: { primario: "Grass", secundario: "Poison" },
            atributos: {
                hp: 45,
                ataque: 50,
                defesa: 55,
                spAtaque: 75,
                spDefesa: 65,
                speed: 30
            },
            links: {
                linkIcon: "",
                linkImg: "./img/043.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 44,
            nome: "Gloom",
            tipos: { primario: "Grass", secundario: "Poison" },
            atributos: {
                hp: 60,
                ataque: 65,
                defesa: 70,
                spAtaque: 85,
                spDefesa: 75,
                speed: 40
            },
            links: {
                linkIcon: "",
                linkImg: "./img/044.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 45,
            nome: "Vileplume",
            tipos: { primario: "Grass", secundario: "Poison" },
            atributos: {
                hp: 75,
                ataque: 80,
                defesa: 85,
                spAtaque: 110,
                spDefesa: 90,
                speed: 50
            },
            links: {
                linkIcon: "",
                linkImg: "./img/045.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 46,
            nome: "Paras",
            tipos: { primario: "Bug", secundario: "Grass" },
            atributos: {
                hp: 35,
                ataque: 70,
                defesa: 55,
                spAtaque: 45,
                spDefesa: 55,
                speed: 25
            },
            links: {
                linkIcon: "",
                linkImg: "./img/046.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 47,
            nome: "Parasect",
            tipos: { primario: "Bug", secundario: "Grass" },
            atributos: {
                hp: 60,
                ataque: 95,
                defesa: 80,
                spAtaque: 60,
                spDefesa: 80,
                speed: 30
            },
            links: {
                linkIcon: "",
                linkImg: "./img/047.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 48,
            nome: "Venonat",
            tipos: { primario: "Bug", secundario: "Poison" },
            atributos: {
                hp: 60,
                ataque: 55,
                defesa: 50,
                spAtaque: 40,
                spDefesa: 55,
                speed: 45
            },
            links: {
                linkIcon: "",
                linkImg: "./img/048.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 49,
            nome: "Venomoth",
            tipos: { primario: "Bug", secundario: "Poison" },
            atributos: {
                hp: 70,
                ataque: 65,
                defesa: 60,
                spAtaque: 90,
                spDefesa: 75,
                speed: 90
            },
            links: {
                linkIcon: "",
                linkImg: "./img/049.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 50,
            nome: "Diglett",
            tipos: { primario: "Ground", secundario: "" },
            atributos: {
                hp: 10,
                ataque: 55,
                defesa: 25,
                spAtaque: 35,
                spDefesa: 45,
                speed: 95
            },
            links: {
                linkIcon: "",
                linkImg: "./img/050.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 50,
            nome: "Diglett (Alolan Diglett)",
            tipos: { primario: "Ground", secundario: "Steel" },
            atributos: {
                hp: 10,
                ataque: 55,
                defesa: 30,
                spAtaque: 35,
                spDefesa: 45,
                speed: 90
            },
            links: {
                linkIcon: "",
                linkImg: "./img/050A.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 51,
            nome: "Dugtrio",
            tipos: { primario: "Ground", secundario: "" },
            atributos: {
                hp: 35,
                ataque: 100,
                defesa: 50,
                spAtaque: 50,
                spDefesa: 70,
                speed: 120
            },
            links: {
                linkIcon: "",
                linkImg: "./img/051.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 51,
            nome: "Dugtrio (Alolan Dugtrio)",
            tipos: { primario: "Ground", secundario: "Steel" },
            atributos: {
                hp: 35,
                ataque: 100,
                defesa: 60,
                spAtaque: 50,
                spDefesa: 70,
                speed: 110
            },
            links: {
                linkIcon: "",
                linkImg: "./img/051A.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 52,
            nome: "Meowth",
            tipos: { primario: "Normal", secundario: "" },
            atributos: {
                hp: 40,
                ataque: 45,
                defesa: 35,
                spAtaque: 40,
                spDefesa: 40,
                speed: 90
            },
            links: {
                linkIcon: "",
                linkImg: "./img/052.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 52,
            nome: "Meowth (Alolan Meowth)",
            tipos: { primario: "Dark", secundario: "" },
            atributos: {
                hp: 40,
                ataque: 35,
                defesa: 35,
                spAtaque: 50,
                spDefesa: 40,
                speed: 90
            },
            links: {
                linkIcon: "",
                linkImg: "./img/052A.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 52,
            nome: "Meowth (Galarian Meowth)",
            tipos: { primario: "Steel", secundario: "" },
            atributos: {
                hp: 50,
                ataque: 65,
                defesa: 55,
                spAtaque: 40,
                spDefesa: 40,
                speed: 40
            },
            links: {
                linkIcon: "",
                linkImg: "./img/052G.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 53,
            nome: "Persian",
            tipos: { primario: "Normal", secundario: "" },
            atributos: {
                hp: 65,
                ataque: 70,
                defesa: 60,
                spAtaque: 65,
                spDefesa: 65,
                speed: 115
            },
            links: {
                linkIcon: "",
                linkImg: "./img/053.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 53,
            nome: "Persian (Alolan Persian)",
            tipos: { primario: "Dark", secundario: "" },
            atributos: {
                hp: 65,
                ataque: 60,
                defesa: 60,
                spAtaque: 75,
                spDefesa: 65,
                speed: 115
            },
            links: {
                linkIcon: "",
                linkImg: "./img/053A.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 54,
            nome: "Psyduck",
            tipos: { primario: "Water", secundario: "" },
            atributos: {
                hp: 50,
                ataque: 52,
                defesa: 48,
                spAtaque: 65,
                spDefesa: 50,
                speed: 55
            },
            links: {
                linkIcon: "",
                linkImg: "./img/054.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 55,
            nome: "Golduck",
            tipos: { primario: "Water", secundario: "" },
            atributos: {
                hp: 80,
                ataque: 82,
                defesa: 78,
                spAtaque: 95,
                spDefesa: 80,
                speed: 85
            },
            links: {
                linkIcon: "",
                linkImg: "./img/055.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 56,
            nome: "Mankey",
            tipos: { primario: "Fighting", secundario: "" },
            atributos: {
                hp: 40,
                ataque: 80,
                defesa: 35,
                spAtaque: 35,
                spDefesa: 45,
                speed: 70
            },
            links: {
                linkIcon: "",
                linkImg: "./img/056.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 57,
            nome: "Primeape",
            tipos: { primario: "Fighting", secundario: "" },
            atributos: {
                hp: 65,
                ataque: 105,
                defesa: 60,
                spAtaque: 60,
                spDefesa: 70,
                speed: 95
            },
            links: {
                linkIcon: "",
                linkImg: "./img/057.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 58,
            nome: "Growlithe",
            tipos: { primario: "Fire", secundario: "" },
            atributos: {
                hp: 55,
                ataque: 70,
                defesa: 45,
                spAtaque: 70,
                spDefesa: 50,
                speed: 60
            },
            links: {
                linkIcon: "",
                linkImg: "./img/058.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 59,
            nome: "Arcanine",
            tipos: { primario: "Fire", secundario: "" },
            atributos: {
                hp: 90,
                ataque: 110,
                defesa: 80,
                spAtaque: 100,
                spDefesa: 80,
                speed: 95
            },
            links: {
                linkIcon: "",
                linkImg: "./img/059.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 60,
            nome: "Poliwag",
            tipos: { primario: "Water", secundario: "" },
            atributos: {
                hp: 40,
                ataque: 50,
                defesa: 40,
                spAtaque: 40,
                spDefesa: 40,
                speed: 90
            },
            links: {
                linkIcon: "",
                linkImg: "./img/060.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 61,
            nome: "Poliwhirl",
            tipos: { primario: "Water", secundario: "" },
            atributos: {
                hp: 65,
                ataque: 65,
                defesa: 65,
                spAtaque: 50,
                spDefesa: 50,
                speed: 90
            },
            links: {
                linkIcon: "",
                linkImg: "./img/061.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 62,
            nome: "Poliwrath",
            tipos: { primario: "Water", secundario: "Fighting" },
            atributos: {
                hp: 90,
                ataque: 95,
                defesa: 95,
                spAtaque: 70,
                spDefesa: 90,
                speed: 70
            },
            links: {
                linkIcon: "",
                linkImg: "./img/062.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 63,
            nome: "Abra",
            tipos: { primario: "Psychic", secundario: "" },
            atributos: {
                hp: 25,
                ataque: 20,
                defesa: 15,
                spAtaque: 105,
                spDefesa: 55,
                speed: 90
            },
            links: {
                linkIcon: "",
                linkImg: "./img/063.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 64,
            nome: "Kadabra",
            tipos: { primario: "Psychic", secundario: "" },
            atributos: {
                hp: 40,
                ataque: 35,
                defesa: 30,
                spAtaque: 120,
                spDefesa: 70,
                speed: 105
            },
            links: {
                linkIcon: "",
                linkImg: "./img/064.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 65,
            nome: "Alakazam",
            tipos: { primario: "Psychic", secundario: "" },
            atributos: {
                hp: 55,
                ataque: 50,
                defesa: 45,
                spAtaque: 135,
                spDefesa: 95,
                speed: 120
            },
            links: {
                linkIcon: "",
                linkImg: "./img/065.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 65,
            nome: "Alakazam (Mega Alakazam)",
            tipos: { primario: "Psychic", secundario: "" },
            atributos: {
                hp: 55,
                ataque: 50,
                defesa: 65,
                spAtaque: 175,
                spDefesa: 105,
                speed: 150
            },
            links: {
                linkIcon: "",
                linkImg: "./img/065M.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 66,
            nome: "Machop",
            tipos: { primario: "Fighting", secundario: "" },
            atributos: {
                hp: 70,
                ataque: 80,
                defesa: 50,
                spAtaque: 35,
                spDefesa: 35,
                speed: 35
            },
            links: {
                linkIcon: "",
                linkImg: "./img/066.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 67,
            nome: "Machoke",
            tipos: { primario: "Fighting", secundario: "" },
            atributos: {
                hp: 80,
                ataque: 100,
                defesa: 70,
                spAtaque: 50,
                spDefesa: 60,
                speed: 45
            },
            links: {
                linkIcon: "",
                linkImg: "./img/067.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 68,
            nome: "Machamp",
            tipos: { primario: "Fighting", secundario: "" },
            atributos: {
                hp: 90,
                ataque: 130,
                defesa: 80,
                spAtaque: 65,
                spDefesa: 85,
                speed: 55
            },
            links: {
                linkIcon: "",
                linkImg: "./img/068.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 69,
            nome: "Bellsprout",
            tipos: { primario: "Grass", secundario: "Poison" },
            atributos: {
                hp: 50,
                ataque: 75,
                defesa: 35,
                spAtaque: 70,
                spDefesa: 30,
                speed: 40
            },
            links: {
                linkIcon: "",
                linkImg: "./img/069.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 70,
            nome: "Weepinbell",
            tipos: { primario: "Grass", secundario: "Poison" },
            atributos: {
                hp: 65,
                ataque: 90,
                defesa: 50,
                spAtaque: 85,
                spDefesa: 45,
                speed: 55
            },
            links: {
                linkIcon: "",
                linkImg: "./img/070.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 71,
            nome: "Victreebel",
            tipos: { primario: "Grass", secundario: "Poison" },
            atributos: {
                hp: 80,
                ataque: 105,
                defesa: 65,
                spAtaque: 100,
                spDefesa: 70,
                speed: 70
            },
            links: {
                linkIcon: "",
                linkImg: "./img/071.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 72,
            nome: "Tentacool",
            tipos: { primario: "Water", secundario: "Poison" },
            atributos: {
                hp: 40,
                ataque: 40,
                defesa: 35,
                spAtaque: 50,
                spDefesa: 100,
                speed: 70
            },
            links: {
                linkIcon: "",
                linkImg: "./img/072.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 73,
            nome: "Tentacruel",
            tipos: { primario: "Water", secundario: "Poison" },
            atributos: {
                hp: 80,
                ataque: 70,
                defesa: 65,
                spAtaque: 80,
                spDefesa: 120,
                speed: 100
            },
            links: {
                linkIcon: "",
                linkImg: "./img/073.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 74,
            nome: "Geodude",
            tipos: { primario: "Rock", secundario: "Ground" },
            atributos: {
                hp: 40,
                ataque: 80,
                defesa: 100,
                spAtaque: 30,
                spDefesa: 30,
                speed: 20
            },
            links: {
                linkIcon: "",
                linkImg: "./img/074.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 74,
            nome: "Geodude (Alolan Geodude)",
            tipos: { primario: "Rock", secundario: "Electric" },
            atributos: {
                hp: 40,
                ataque: 80,
                defesa: 100,
                spAtaque: 30,
                spDefesa: 30,
                speed: 20
            },
            links: {
                linkIcon: "",
                linkImg: "./img/074A.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 75,
            nome: "Graveler",
            tipos: { primario: "Rock", secundario: "Ground" },
            atributos: {
                hp: 55,
                ataque: 95,
                defesa: 115,
                spAtaque: 45,
                spDefesa: 45,
                speed: 35
            },
            links: {
                linkIcon: "",
                linkImg: "./img/075.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 75,
            nome: "Graveler (Alolan Graveler)",
            tipos: { primario: "Rock", secundario: "Electric" },
            atributos: {
                hp: 55,
                ataque: 95,
                defesa: 115,
                spAtaque: 45,
                spDefesa: 45,
                speed: 35
            },
            links: {
                linkIcon: "",
                linkImg: "./img/075A.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 76,
            nome: "Golem",
            tipos: { primario: "Rock", secundario: "Ground" },
            atributos: {
                hp: 80,
                ataque: 120,
                defesa: 130,
                spAtaque: 55,
                spDefesa: 65,
                speed: 45
            },
            links: {
                linkIcon: "",
                linkImg: "./img/076.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 76,
            nome: "Golem (Alolan Golem)",
            tipos: { primario: "Rock", secundario: "Electric" },
            atributos: {
                hp: 80,
                ataque: 120,
                defesa: 130,
                spAtaque: 55,
                spDefesa: 65,
                speed: 45
            },
            links: {
                linkIcon: "",
                linkImg: "./img/076A.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 77,
            nome: "Ponyta",
            tipos: { primario: "Fire", secundario: "" },
            atributos: {
                hp: 50,
                ataque: 85,
                defesa: 55,
                spAtaque: 65,
                spDefesa: 65,
                speed: 90
            },
            links: {
                linkIcon: "",
                linkImg: "./img/077.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 77,
            nome: "Ponyta (Galarian Ponyta)",
            tipos: { primario: "Psychic", secundario: "" },
            atributos: {
                hp: 50,
                ataque: 85,
                defesa: 55,
                spAtaque: 65,
                spDefesa: 65,
                speed: 90
            },
            links: {
                linkIcon: "",
                linkImg: "./img/077G.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 78,
            nome: "Rapidash",
            tipos: { primario: "Fire", secundario: "" },
            atributos: {
                hp: 65,
                ataque: 100,
                defesa: 70,
                spAtaque: 80,
                spDefesa: 80,
                speed: 105
            },
            links: {
                linkIcon: "",
                linkImg: "./img/078.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 78,
            nome: "Rapidash (Galarian Rapidash)",
            tipos: { primario: "Psychic", secundario: "Fairy" },
            atributos: {
                hp: 65,
                ataque: 100,
                defesa: 70,
                spAtaque: 80,
                spDefesa: 80,
                speed: 105
            },
            links: {
                linkIcon: "",
                linkImg: "./img/078G.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 79,
            nome: "Slowpoke",
            tipos: { primario: "Water", secundario: "Psychic" },
            atributos: {
                hp: 90,
                ataque: 65,
                defesa: 65,
                spAtaque: 40,
                spDefesa: 40,
                speed: 15
            },
            links: {
                linkIcon: "",
                linkImg: "./img/079.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 79,
            nome: "Slowpoke (Galarian Slowpoke)",
            tipos: { primario: "Psychic", secundario: "" },
            atributos: {
                hp: 90,
                ataque: 65,
                defesa: 65,
                spAtaque: 40,
                spDefesa: 40,
                speed: 15
            },
            links: {
                linkIcon: "",
                linkImg: "./img/079G.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 80,
            nome: "Slowbro",
            tipos: { primario: "Water", secundario: "Psychic" },
            atributos: {
                hp: 95,
                ataque: 75,
                defesa: 110,
                spAtaque: 100,
                spDefesa: 80,
                speed: 30
            },
            links: {
                linkIcon: "",
                linkImg: "./img/080.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 80,
            nome: "Slowbro (Galarian Slowbro)",
            tipos: { primario: "Poison", secundario: "Psychic" },
            atributos: {
                hp: 95,
                ataque: 100,
                defesa: 95,
                spAtaque: 100,
                spDefesa: 70,
                speed: 30
            },
            links: {
                linkIcon: "",
                linkImg: "./img/080G.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 80,
            nome: "Slowbro (Mega Slowbro)",
            tipos: { primario: "Water", secundario: "Psychic" },
            atributos: {
                hp: 95,
                ataque: 75,
                defesa: 180,
                spAtaque: 130,
                spDefesa: 80,
                speed: 30
            },
            links: {
                linkIcon: "",
                linkImg: "./img/080M.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 81,
            nome: "Magnemite",
            tipos: { primario: "Electric", secundario: "Steel" },
            atributos: {
                hp: 25,
                ataque: 35,
                defesa: 70,
                spAtaque: 95,
                spDefesa: 55,
                speed: 45
            },
            links: {
                linkIcon: "",
                linkImg: "./img/081.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 82,
            nome: "Magneton",
            tipos: { primario: "Electric", secundario: "Steel" },
            atributos: {
                hp: 50,
                ataque: 60,
                defesa: 95,
                spAtaque: 120,
                spDefesa: 70,
                speed: 70
            },
            links: {
                linkIcon: "",
                linkImg: "./img/082.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 83,
            nome: "Farfetch'd",
            tipos: { primario: "Normal", secundario: "Flying" },
            atributos: {
                hp: 52,
                ataque: 90,
                defesa: 55,
                spAtaque: 58,
                spDefesa: 62,
                speed: 60
            },
            links: {
                linkIcon: "",
                linkImg: "./img/083.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 83,
            nome: "Farfetch'd (Galarian Farfetch'd)",
            tipos: { primario: "Fighting", secundario: "" },
            atributos: {
                hp: 52,
                ataque: 95,
                defesa: 55,
                spAtaque: 58,
                spDefesa: 62,
                speed: 55
            },
            links: {
                linkIcon: "",
                linkImg: "./img/083G.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 84,
            nome: "Doduo",
            tipos: { primario: "Normal", secundario: "Flying" },
            atributos: {
                hp: 35,
                ataque: 85,
                defesa: 45,
                spAtaque: 35,
                spDefesa: 35,
                speed: 75
            },
            links: {
                linkIcon: "",
                linkImg: "./img/084.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 85,
            nome: "Dodrio",
            tipos: { primario: "Normal", secundario: "Flying" },
            atributos: {
                hp: 60,
                ataque: 110,
                defesa: 70,
                spAtaque: 60,
                spDefesa: 60,
                speed: 110
            },
            links: {
                linkIcon: "",
                linkImg: "./img/085.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 86,
            nome: "Seel",
            tipos: { primario: "Water", secundario: "" },
            atributos: {
                hp: 65,
                ataque: 45,
                defesa: 55,
                spAtaque: 45,
                spDefesa: 70,
                speed: 45
            },
            links: {
                linkIcon: "",
                linkImg: "./img/086.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 87,
            nome: "Dewgong",
            tipos: { primario: "Water", secundario: "Ice" },
            atributos: {
                hp: 90,
                ataque: 70,
                defesa: 80,
                spAtaque: 70,
                spDefesa: 95,
                speed: 70
            },
            links: {
                linkIcon: "",
                linkImg: "./img/087.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 88,
            nome: "Grimer",
            tipos: { primario: "Poison", secundario: "" },
            atributos: {
                hp: 80,
                ataque: 80,
                defesa: 50,
                spAtaque: 40,
                spDefesa: 50,
                speed: 25
            },
            links: {
                linkIcon: "",
                linkImg: "./img/088.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 88,
            nome: "Grimer (Alolan Grimer)",
            tipos: { primario: "Poison", secundario: "Dark" },
            atributos: {
                hp: 80,
                ataque: 80,
                defesa: 50,
                spAtaque: 40,
                spDefesa: 50,
                speed: 25
            },
            links: {
                linkIcon: "",
                linkImg: "./img/088A.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 89,
            nome: "Muk",
            tipos: { primario: "Poison", secundario: "" },
            atributos: {
                hp: 105,
                ataque: 105,
                defesa: 75,
                spAtaque: 65,
                spDefesa: 100,
                speed: 50
            },
            links: {
                linkIcon: "",
                linkImg: "./img/089.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 89,
            nome: "Muk (Alolan Muk)",
            tipos: { primario: "Poison", secundario: "Dark" },
            atributos: {
                hp: 105,
                ataque: 105,
                defesa: 75,
                spAtaque: 65,
                spDefesa: 100,
                speed: 50
            },
            links: {
                linkIcon: "",
                linkImg: "./img/089A.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 90,
            nome: "Shellder",
            tipos: { primario: "Water", secundario: "" },
            atributos: {
                hp: 30,
                ataque: 65,
                defesa: 100,
                spAtaque: 45,
                spDefesa: 25,
                speed: 40
            },
            links: {
                linkIcon: "",
                linkImg: "./img/090.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 91,
            nome: "Cloyster",
            tipos: { primario: "Water", secundario: "Ice" },
            atributos: {
                hp: 50,
                ataque: 95,
                defesa: 180,
                spAtaque: 85,
                spDefesa: 45,
                speed: 70
            },
            links: {
                linkIcon: "",
                linkImg: "./img/091.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 92,
            nome: "Gastly",
            tipos: { primario: "Ghost", secundario: "Poison" },
            atributos: {
                hp: 30,
                ataque: 35,
                defesa: 30,
                spAtaque: 100,
                spDefesa: 35,
                speed: 80
            },
            links: {
                linkIcon: "",
                linkImg: "./img/092.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 93,
            nome: "Haunter",
            tipos: { primario: "Ghost", secundario: "Poison" },
            atributos: {
                hp: 45,
                ataque: 50,
                defesa: 45,
                spAtaque: 115,
                spDefesa: 55,
                speed: 95
            },
            links: {
                linkIcon: "",
                linkImg: "./img/093.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 94,
            nome: "Gengar",
            tipos: { primario: "Ghost", secundario: "Poison" },
            atributos: {
                hp: 60,
                ataque: 65,
                defesa: 60,
                spAtaque: 130,
                spDefesa: 75,
                speed: 110
            },
            links: {
                linkIcon: "",
                linkImg: "./img/094.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 94,
            nome: "Gengar (Mega Gengar)",
            tipos: { primario: "Ghost", secundario: "Poison" },
            atributos: {
                hp: 60,
                ataque: 65,
                defesa: 80,
                spAtaque: 170,
                spDefesa: 95,
                speed: 130
            },
            links: {
                linkIcon: "",
                linkImg: "./img/094M.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 95,
            nome: "Onix",
            tipos: { primario: "Rock", secundario: "Ground" },
            atributos: {
                hp: 35,
                ataque: 45,
                defesa: 160,
                spAtaque: 30,
                spDefesa: 45,
                speed: 70
            },
            links: {
                linkIcon: "",
                linkImg: "./img/095.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 96,
            nome: "Drowzee",
            tipos: { primario: "Psychic", secundario: "" },
            atributos: {
                hp: 60,
                ataque: 48,
                defesa: 45,
                spAtaque: 43,
                spDefesa: 90,
                speed: 42
            },
            links: {
                linkIcon: "",
                linkImg: "./img/096.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 97,
            nome: "Hypno",
            tipos: { primario: "Psychic", secundario: "" },
            atributos: {
                hp: 85,
                ataque: 73,
                defesa: 70,
                spAtaque: 73,
                spDefesa: 115,
                speed: 67
            },
            links: {
                linkIcon: "",
                linkImg: "./img/097.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 98,
            nome: "Krabby",
            tipos: { primario: "Water", secundario: "" },
            atributos: {
                hp: 30,
                ataque: 105,
                defesa: 90,
                spAtaque: 25,
                spDefesa: 25,
                speed: 50
            },
            links: {
                linkIcon: "",
                linkImg: "./img/098.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 99,
            nome: "Kingler",
            tipos: { primario: "Water", secundario: "" },
            atributos: {
                hp: 55,
                ataque: 130,
                defesa: 115,
                spAtaque: 50,
                spDefesa: 50,
                speed: 75
            },
            links: {
                linkIcon: "",
                linkImg: "./img/099.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 100,
            nome: "Voltorb",
            tipos: { primario: "Electric", secundario: "" },
            atributos: {
                hp: 40,
                ataque: 30,
                defesa: 50,
                spAtaque: 55,
                spDefesa: 55,
                speed: 100
            },
            links: {
                linkIcon: "",
                linkImg: "./img/100.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 101,
            nome: "Electrode",
            tipos: { primario: "Electric", secundario: "" },
            atributos: {
                hp: 60,
                ataque: 50,
                defesa: 70,
                spAtaque: 80,
                spDefesa: 80,
                speed: 150
            },
            links: {
                linkIcon: "",
                linkImg: "./img/101.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 102,
            nome: "Exeggcute",
            tipos: { primario: "Grass", secundario: "Psychic" },
            atributos: {
                hp: 60,
                ataque: 40,
                defesa: 80,
                spAtaque: 60,
                spDefesa: 45,
                speed: 40
            },
            links: {
                linkIcon: "",
                linkImg: "./img/102.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 103,
            nome: "Exeggutor",
            tipos: { primario: "Grass", secundario: "Psychic" },
            atributos: {
                hp: 95,
                ataque: 95,
                defesa: 85,
                spAtaque: 125,
                spDefesa: 75,
                speed: 55
            },
            links: {
                linkIcon: "",
                linkImg: "./img/103.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 103,
            nome: "Exeggutor (Alolan Exeggutor)",
            tipos: { primario: "Grass", secundario: "Dragon" },
            atributos: {
                hp: 95,
                ataque: 105,
                defesa: 85,
                spAtaque: 125,
                spDefesa: 75,
                speed: 45
            },
            links: {
                linkIcon: "",
                linkImg: "./img/103A.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 104,
            nome: "Cubone",
            tipos: { primario: "Ground", secundario: "" },
            atributos: {
                hp: 50,
                ataque: 50,
                defesa: 95,
                spAtaque: 40,
                spDefesa: 50,
                speed: 35
            },
            links: {
                linkIcon: "",
                linkImg: "./img/104.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 105,
            nome: "Marowak",
            tipos: { primario: "Ground", secundario: "" },
            atributos: {
                hp: 60,
                ataque: 80,
                defesa: 110,
                spAtaque: 50,
                spDefesa: 80,
                speed: 45
            },
            links: {
                linkIcon: "",
                linkImg: "./img/105.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 105,
            nome: "Marowak (Alolan Marowak)",
            tipos: { primario: "Fire", secundario: "Ghost" },
            atributos: {
                hp: 60,
                ataque: 80,
                defesa: 110,
                spAtaque: 50,
                spDefesa: 80,
                speed: 45
            },
            links: {
                linkIcon: "",
                linkImg: "./img/105A.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 106,
            nome: "Hitmonlee",
            tipos: { primario: "Fighting", secundario: "" },
            atributos: {
                hp: 50,
                ataque: 120,
                defesa: 53,
                spAtaque: 35,
                spDefesa: 110,
                speed: 87
            },
            links: {
                linkIcon: "",
                linkImg: "./img/106.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 107,
            nome: "Hitmonchan",
            tipos: { primario: "Fighting", secundario: "" },
            atributos: {
                hp: 50,
                ataque: 105,
                defesa: 79,
                spAtaque: 35,
                spDefesa: 110,
                speed: 76
            },
            links: {
                linkIcon: "",
                linkImg: "./img/107.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 108,
            nome: "Lickitung",
            tipos: { primario: "Normal", secundario: "" },
            atributos: {
                hp: 90,
                ataque: 55,
                defesa: 75,
                spAtaque: 60,
                spDefesa: 75,
                speed: 30
            },
            links: {
                linkIcon: "",
                linkImg: "./img/108.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 109,
            nome: "Koffing",
            tipos: { primario: "Poison", secundario: "" },
            atributos: {
                hp: 40,
                ataque: 65,
                defesa: 95,
                spAtaque: 60,
                spDefesa: 45,
                speed: 35
            },
            links: {
                linkIcon: "",
                linkImg: "./img/109.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 110,
            nome: "Weezing",
            tipos: { primario: "Poison", secundario: "" },
            atributos: {
                hp: 65,
                ataque: 90,
                defesa: 120,
                spAtaque: 85,
                spDefesa: 70,
                speed: 60
            },
            links: {
                linkIcon: "",
                linkImg: "./img/110.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 110,
            nome: "Weezing (Galarian Weezing)",
            tipos: { primario: "Poison", secundario: "Fairy" },
            atributos: {
                hp: 65,
                ataque: 90,
                defesa: 120,
                spAtaque: 85,
                spDefesa: 70,
                speed: 60
            },
            links: {
                linkIcon: "",
                linkImg: "./img/110G.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 111,
            nome: "Rhyhorn",
            tipos: { primario: "Ground", secundario: "Rock" },
            atributos: {
                hp: 80,
                ataque: 85,
                defesa: 95,
                spAtaque: 30,
                spDefesa: 30,
                speed: 25
            },
            links: {
                linkIcon: "",
                linkImg: "./img/111.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 112,
            nome: "Rhydon",
            tipos: { primario: "Ground", secundario: "Rock" },
            atributos: {
                hp: 105,
                ataque: 130,
                defesa: 120,
                spAtaque: 45,
                spDefesa: 45,
                speed: 40
            },
            links: {
                linkIcon: "",
                linkImg: "./img/112.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 113,
            nome: "Chansey",
            tipos: { primario: "Normal", secundario: "" },
            atributos: {
                hp: 250,
                ataque: 5,
                defesa: 5,
                spAtaque: 35,
                spDefesa: 105,
                speed: 50
            },
            links: {
                linkIcon: "",
                linkImg: "./img/113.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 114,
            nome: "Tangela",
            tipos: { primario: "Grass", secundario: "" },
            atributos: {
                hp: 65,
                ataque: 55,
                defesa: 115,
                spAtaque: 100,
                spDefesa: 40,
                speed: 60
            },
            links: {
                linkIcon: "",
                linkImg: "./img/114.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 115,
            nome: "Kangaskhan",
            tipos: { primario: "Normal", secundario: "" },
            atributos: {
                hp: 105,
                ataque: 95,
                defesa: 80,
                spAtaque: 40,
                spDefesa: 80,
                speed: 90
            },
            links: {
                linkIcon: "",
                linkImg: "./img/115.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 115,
            nome: "Kangaskhan (Mega Kangaskhan)",
            tipos: { primario: "Normal", secundario: "" },
            atributos: {
                hp: 105,
                ataque: 125,
                defesa: 100,
                spAtaque: 60,
                spDefesa: 100,
                speed: 100
            },
            links: {
                linkIcon: "",
                linkImg: "./img/115M.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 116,
            nome: "Horsea",
            tipos: { primario: "Water", secundario: "" },
            atributos: {
                hp: 30,
                ataque: 40,
                defesa: 70,
                spAtaque: 70,
                spDefesa: 25,
                speed: 60
            },
            links: {
                linkIcon: "",
                linkImg: "./img/116.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 117,
            nome: "Seadra",
            tipos: { primario: "Water", secundario: "" },
            atributos: {
                hp: 55,
                ataque: 65,
                defesa: 95,
                spAtaque: 95,
                spDefesa: 45,
                speed: 85
            },
            links: {
                linkIcon: "",
                linkImg: "./img/117.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 118,
            nome: "Goldeen",
            tipos: { primario: "Water", secundario: "" },
            atributos: {
                hp: 45,
                ataque: 67,
                defesa: 60,
                spAtaque: 35,
                spDefesa: 50,
                speed: 63
            },
            links: {
                linkIcon: "",
                linkImg: "./img/118.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 119,
            nome: "Seaking",
            tipos: { primario: "Water", secundario: "" },
            atributos: {
                hp: 80,
                ataque: 92,
                defesa: 65,
                spAtaque: 65,
                spDefesa: 80,
                speed: 68
            },
            links: {
                linkIcon: "",
                linkImg: "./img/119.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 120,
            nome: "Staryu",
            tipos: { primario: "Water", secundario: "" },
            atributos: {
                hp: 30,
                ataque: 45,
                defesa: 55,
                spAtaque: 70,
                spDefesa: 55,
                speed: 85
            },
            links: {
                linkIcon: "",
                linkImg: "./img/120.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 121,
            nome: "Starmie",
            tipos: { primario: "Water", secundario: "Psychic" },
            atributos: {
                hp: 60,
                ataque: 75,
                defesa: 85,
                spAtaque: 100,
                spDefesa: 85,
                speed: 115
            },
            links: {
                linkIcon: "",
                linkImg: "./img/121.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 122,
            nome: "Mr. Mime",
            tipos: { primario: "Psychic", secundario: "Fairy" },
            atributos: {
                hp: 40,
                ataque: 45,
                defesa: 65,
                spAtaque: 100,
                spDefesa: 120,
                speed: 90
            },
            links: {
                linkIcon: "",
                linkImg: "./img/122.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 122,
            nome: "Mr. Mime (Galarian Mr. Mime)",
            tipos: { primario: "Ice", secundario: "Psychic" },
            atributos: {
                hp: 50,
                ataque: 65,
                defesa: 65,
                spAtaque: 90,
                spDefesa: 90,
                speed: 100
            },
            links: {
                linkIcon: "",
                linkImg: "./img/122G.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 123,
            nome: "Scyther",
            tipos: { primario: "Bug", secundario: "Flying" },
            atributos: {
                hp: 70,
                ataque: 110,
                defesa: 80,
                spAtaque: 55,
                spDefesa: 80,
                speed: 105
            },
            links: {
                linkIcon: "",
                linkImg: "./img/123.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 124,
            nome: "Jynx",
            tipos: { primario: "Ice", secundario: "Psychic" },
            atributos: {
                hp: 65,
                ataque: 50,
                defesa: 35,
                spAtaque: 115,
                spDefesa: 95,
                speed: 95
            },
            links: {
                linkIcon: "",
                linkImg: "./img/124.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 125,
            nome: "Electabuzz",
            tipos: { primario: "Electric", secundario: "" },
            atributos: {
                hp: 65,
                ataque: 83,
                defesa: 57,
                spAtaque: 95,
                spDefesa: 85,
                speed: 105
            },
            links: {
                linkIcon: "",
                linkImg: "./img/125.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 126,
            nome: "Magmar",
            tipos: { primario: "Fire", secundario: "" },
            atributos: {
                hp: 65,
                ataque: 95,
                defesa: 57,
                spAtaque: 100,
                spDefesa: 85,
                speed: 93
            },
            links: {
                linkIcon: "",
                linkImg: "./img/126.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 127,
            nome: "Pinsir",
            tipos: { primario: "Bug", secundario: "" },
            atributos: {
                hp: 65,
                ataque: 125,
                defesa: 100,
                spAtaque: 55,
                spDefesa: 70,
                speed: 85
            },
            links: {
                linkIcon: "",
                linkImg: "./img/127.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 127,
            nome: "Pinsir (Mega Pinsir)",
            tipos: { primario: "Bug", secundario: "Flying" },
            atributos: {
                hp: 65,
                ataque: 155,
                defesa: 120,
                spAtaque: 65,
                spDefesa: 90,
                speed: 105
            },
            links: {
                linkIcon: "",
                linkImg: "./img/127M.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 128,
            nome: "Tauros",
            tipos: { primario: "Normal", secundario: "" },
            atributos: {
                hp: 75,
                ataque: 100,
                defesa: 95,
                spAtaque: 40,
                spDefesa: 70,
                speed: 110
            },
            links: {
                linkIcon: "",
                linkImg: "./img/128.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 129,
            nome: "Magikarp",
            tipos: { primario: "Water", secundario: "" },
            atributos: {
                hp: 20,
                ataque: 10,
                defesa: 55,
                spAtaque: 15,
                spDefesa: 20,
                speed: 80
            },
            links: {
                linkIcon: "",
                linkImg: "./img/129.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 130,
            nome: "Gyarados",
            tipos: { primario: "Water", secundario: "Flying" },
            atributos: {
                hp: 95,
                ataque: 125,
                defesa: 79,
                spAtaque: 60,
                spDefesa: 100,
                speed: 81
            },
            links: {
                linkIcon: "",
                linkImg: "./img/130.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 130,
            nome: "Gyarados (Mega Gyarados)",
            tipos: { primario: "Water", secundario: "Dark" },
            atributos: {
                hp: 95,
                ataque: 155,
                defesa: 109,
                spAtaque: 70,
                spDefesa: 130,
                speed: 81
            },
            links: {
                linkIcon: "",
                linkImg: "./img/130M.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 131,
            nome: "Lapras",
            tipos: { primario: "Water", secundario: "Ice" },
            atributos: {
                hp: 130,
                ataque: 85,
                defesa: 80,
                spAtaque: 85,
                spDefesa: 95,
                speed: 60
            },
            links: {
                linkIcon: "",
                linkImg: "./img/131.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 132,
            nome: "Ditto",
            tipos: { primario: "Normal", secundario: "" },
            atributos: {
                hp: 48,
                ataque: 48,
                defesa: 48,
                spAtaque: 48,
                spDefesa: 48,
                speed: 48
            },
            links: {
                linkIcon: "",
                linkImg: "./img/132.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 133,
            nome: "Eevee",
            tipos: { primario: "Normal", secundario: "" },
            atributos: {
                hp: 55,
                ataque: 55,
                defesa: 50,
                spAtaque: 45,
                spDefesa: 65,
                speed: 55
            },
            links: {
                linkIcon: "",
                linkImg: "./img/133.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 133,
            nome: "Eevee (Partner Eevee)",
            tipos: { primario: "Normal", secundario: "" },
            atributos: {
                hp: 65,
                ataque: 75,
                defesa: 70,
                spAtaque: 65,
                spDefesa: 85,
                speed: 75
            },
            links: {
                linkIcon: "",
                linkImg: "./img/133LG.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 134,
            nome: "Vaporeon",
            tipos: { primario: "Water", secundario: "" },
            atributos: {
                hp: 130,
                ataque: 65,
                defesa: 60,
                spAtaque: 110,
                spDefesa: 95,
                speed: 65
            },
            links: {
                linkIcon: "",
                linkImg: "./img/134.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 135,
            nome: "Jolteon",
            tipos: { primario: "Electric", secundario: "" },
            atributos: {
                hp: 65,
                ataque: 65,
                defesa: 60,
                spAtaque: 110,
                spDefesa: 95,
                speed: 130
            },
            links: {
                linkIcon: "",
                linkImg: "./img/135.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 136,
            nome: "Flareon",
            tipos: { primario: "Fire", secundario: "" },
            atributos: {
                hp: 65,
                ataque: 130,
                defesa: 60,
                spAtaque: 95,
                spDefesa: 110,
                speed: 65
            },
            links: {
                linkIcon: "",
                linkImg: "./img/136.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 137,
            nome: "Porygon",
            tipos: { primario: "Normal", secundario: "" },
            atributos: {
                hp: 65,
                ataque: 60,
                defesa: 70,
                spAtaque: 85,
                spDefesa: 75,
                speed: 40
            },
            links: {
                linkIcon: "",
                linkImg: "./img/137.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 138,
            nome: "Omanyte",
            tipos: { primario: "Rock", secundario: "Water" },
            atributos: {
                hp: 35,
                ataque: 40,
                defesa: 100,
                spAtaque: 90,
                spDefesa: 55,
                speed: 35
            },
            links: {
                linkIcon: "",
                linkImg: "./img/138.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 139,
            nome: "Omastar",
            tipos: { primario: "Rock", secundario: "Water" },
            atributos: {
                hp: 70,
                ataque: 60,
                defesa: 125,
                spAtaque: 115,
                spDefesa: 70,
                speed: 55
            },
            links: {
                linkIcon: "",
                linkImg: "./img/139.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 140,
            nome: "Kabuto",
            tipos: { primario: "Rock", secundario: "Water" },
            atributos: {
                hp: 30,
                ataque: 80,
                defesa: 90,
                spAtaque: 55,
                spDefesa: 45,
                speed: 55
            },
            links: {
                linkIcon: "",
                linkImg: "./img/140.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 141,
            nome: "Kabutops",
            tipos: { primario: "Rock", secundario: "Water" },
            atributos: {
                hp: 60,
                ataque: 115,
                defesa: 105,
                spAtaque: 65,
                spDefesa: 70,
                speed: 80
            },
            links: {
                linkIcon: "",
                linkImg: "./img/141.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 142,
            nome: "Aerodactyl",
            tipos: { primario: "Rock", secundario: "Flying" },
            atributos: {
                hp: 80,
                ataque: 105,
                defesa: 65,
                spAtaque: 60,
                spDefesa: 75,
                speed: 130
            },
            links: {
                linkIcon: "",
                linkImg: "./img/142.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 142,
            nome: "Aerodactyl (Mega Aerodactyl)",
            tipos: { primario: "Rock", secundario: "Flying" },
            atributos: {
                hp: 80,
                ataque: 135,
                defesa: 85,
                spAtaque: 70,
                spDefesa: 95,
                speed: 150
            },
            links: {
                linkIcon: "",
                linkImg: "./img/142M.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 143,
            nome: "Snorlax",
            tipos: { primario: "Normal", secundario: "" },
            atributos: {
                hp: 160,
                ataque: 110,
                defesa: 65,
                spAtaque: 65,
                spDefesa: 110,
                speed: 30
            },
            links: {
                linkIcon: "",
                linkImg: "./img/143.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 144,
            nome: "Articuno",
            tipos: { primario: "Ice", secundario: "Flying" },
            atributos: {
                hp: 90,
                ataque: 85,
                defesa: 100,
                spAtaque: 95,
                spDefesa: 125,
                speed: 85
            },
            links: {
                linkIcon: "",
                linkImg: "./img/144.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 144,
            nome: "Articuno (Galarian Articuno)",
            tipos: { primario: "Psychic", secundario: "Flying" },
            atributos: {
                hp: 90,
                ataque: 85,
                defesa: 85,
                spAtaque: 125,
                spDefesa: 100,
                speed: 95
            },
            links: {
                linkIcon: "",
                linkImg: "./img/144G.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 145,
            nome: "Zapdos",
            tipos: { primario: "Electric", secundario: "Flying" },
            atributos: {
                hp: 90,
                ataque: 90,
                defesa: 85,
                spAtaque: 125,
                spDefesa: 90,
                speed: 100
            },
            links: {
                linkIcon: "",
                linkImg: "./img/145.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 145,
            nome: "Zapdos (Galarian Zapdos)",
            tipos: { primario: "Fighting", secundario: "Flying" },
            atributos: {
                hp: 90,
                ataque: 125,
                defesa: 90,
                spAtaque: 85,
                spDefesa: 90,
                speed: 100
            },
            links: {
                linkIcon: "",
                linkImg: "./img/145G.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 146,
            nome: "Moltres",
            tipos: { primario: "Fire", secundario: "Flying" },
            atributos: {
                hp: 90,
                ataque: 100,
                defesa: 90,
                spAtaque: 125,
                spDefesa: 85,
                speed: 90
            },
            links: {
                linkIcon: "",
                linkImg: "./img/146.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 146,
            nome: "Moltres (Galarian Moltres)",
            tipos: { primario: "Dark", secundario: "Flying" },
            atributos: {
                hp: 90,
                ataque: 85,
                defesa: 90,
                spAtaque: 100,
                spDefesa: 125,
                speed: 90
            },
            links: {
                linkIcon: "",
                linkImg: "./img/146G.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 147,
            nome: "Dratini",
            tipos: { primario: "Dragon", secundario: "" },
            atributos: {
                hp: 41,
                ataque: 64,
                defesa: 45,
                spAtaque: 50,
                spDefesa: 50,
                speed: 50
            },
            links: {
                linkIcon: "",
                linkImg: "./img/147.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 148,
            nome: "Dragonair",
            tipos: { primario: "Dragon", secundario: "" },
            atributos: {
                hp: 61,
                ataque: 84,
                defesa: 65,
                spAtaque: 70,
                spDefesa: 70,
                speed: 70
            },
            links: {
                linkIcon: "",
                linkImg: "./img/148.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 149,
            nome: "Dragonite",
            tipos: { primario: "Dragon", secundario: "Flying" },
            atributos: {
                hp: 91,
                ataque: 134,
                defesa: 95,
                spAtaque: 100,
                spDefesa: 100,
                speed: 80
            },
            links: {
                linkIcon: "",
                linkImg: "./img/149.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 150,
            nome: "Mewtwo",
            tipos: { primario: "Psychic", secundario: "" },
            atributos: {
                hp: 106,
                ataque: 110,
                defesa: 90,
                spAtaque: 154,
                spDefesa: 90,
                speed: 130
            },
            links: {
                linkIcon: "",
                linkImg: "./img/150.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 150,
            nome: "Mewtwo (Mega Mewtwo X)",
            tipos: { primario: "Psychic", secundario: "Fighting" },
            atributos: {
                hp: 106,
                ataque: 190,
                defesa: 100,
                spAtaque: 154,
                spDefesa: 100,
                speed: 130
            },
            links: {
                linkIcon: "",
                linkImg: "./img/150M-X.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 150,
            nome: "Mewtwo (Mega Mewtwo Y)",
            tipos: { primario: "Psychic", secundario: "" },
            atributos: {
                hp: 106,
                ataque: 150,
                defesa: 70,
                spAtaque: 194,
                spDefesa: 120,
                speed: 140
            },
            links: {
                linkIcon: "",
                linkImg: "./img/150M-Y.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        },
        {
            number: 151,
            nome: "Mew",
            tipos: { primario: "Psychic", secundario: "" },
            atributos: {
                hp: 100,
                ataque: 100,
                defesa: 100,
                spAtaque: 100,
                spDefesa: 100,
                speed: 100
            },
            links: {
                linkIcon: "",
                linkImg: "./img/151.png",
                llinkTipo1: "",
                llinkTipo2: ""
            }
        }
    ];

    return data;
}