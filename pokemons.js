function pokemons() {
	var data = [{
		number: 1,
		nome: "Bulbasaur",
		tipos: {
			primario: "Grass",
			secundario: "Poison"
		},
		atributos: {
			hp: 45,
			ataque: 49,
			defesa: 49,
			spAtaque: 65,
			spDefesa: 65,
			speed: 45
		},
		links: {
			linkBg: "./img/bg-types/Grass-Types.jpg",
			linkImg: "./img/pokemons/001.png",
			linkTipo1: "./img/types/Grass.png",
			linkTipo2: "./img/types/Poison.png"
		}
	}, {
		number: 2,
		nome: "Ivysaur",
		tipos: {
			primario: "Grass",
			secundario: "Poison"
		},
		atributos: {
			hp: 60,
			ataque: 62,
			defesa: 63,
			spAtaque: 80,
			spDefesa: 80,
			speed: 60
		},
		links: {
			linkBg: "./img/bg-types/Grass-Types.jpg",
			linkImg: "./img/pokemons/002.png",
			linkTipo1: "./img/types/Grass.png",
			linkTipo2: "./img/types/Poison.png"
		}
	}, {
		number: 3,
		nome: "Venusaur",
		tipos: {
			primario: "Grass",
			secundario: "Poison"
		},
		atributos: {
			hp: 80,
			ataque: 82,
			defesa: 83,
			spAtaque: 100,
			spDefesa: 100,
			speed: 80
		},
		links: {
			linkBg: "./img/bg-types/Grass-Types.jpg",
			linkImg: "./img/pokemons/003.png",
			linkTipo1: "./img/types/Grass.png",
			linkTipo2: "./img/types/Poison.png"
		}
	}, {
		number: 3,
		nome: "GMax Venusaur",
		tipos: {
			primario: "Grass",
			secundario: "Poison"
		},
		atributos: {
			hp: 80,
			ataque: 82,
			defesa: 83,
			spAtaque: 100,
			spDefesa: 100,
			speed: 80
		},
		links: {
			linkBg: "./img/bg-types/Grass-Types.jpg",
			linkImg: "./img/pokemons/003GMAX.png",
			linkTipo1: "./img/types/Grass.png",
			linkTipo2: "./img/types/Poison.png"
		}
	}, {
		number: 3,
		nome: "Mega Venusaur",
		tipos: {
			primario: "Grass",
			secundario: "Poison"
		},
		atributos: {
			hp: 80,
			ataque: 100,
			defesa: 123,
			spAtaque: 122,
			spDefesa: 120,
			speed: 80
		},
		links: {
			linkBg: "./img/bg-types/Grass-Types.jpg",
			linkImg: "./img/pokemons/003M.png",
			linkTipo1: "./img/types/Grass.png",
			linkTipo2: "./img/types/Poison.png"
		}
	}, {
		number: 4,
		nome: "Charmander",
		tipos: {
			primario: "Fire",
			secundario: ""
		},
		atributos: {
			hp: 39,
			ataque: 52,
			defesa: 43,
			spAtaque: 60,
			spDefesa: 50,
			speed: 65
		},
		links: {
			linkBg: "./img/bg-types/Fire-Types.jpg",
			linkImg: "./img/pokemons/004.png",
			linkTipo1: "./img/types/Fire.png",
			linkTipo2: ""
		}
	}, {
		number: 5,
		nome: "Charmeleon",
		tipos: {
			primario: "Fire",
			secundario: ""
		},
		atributos: {
			hp: 58,
			ataque: 64,
			defesa: 58,
			spAtaque: 80,
			spDefesa: 65,
			speed: 80
		},
		links: {
			linkBg: "./img/bg-types/Fire-Types.jpg",
			linkImg: "./img/pokemons/005.png",
			linkTipo1: "./img/types/Fire.png",
			linkTipo2: ""
		}
	}, {
		number: 6,
		nome: "Charizard",
		tipos: {
			primario: "Fire",
			secundario: "Flying"
		},
		atributos: {
			hp: 78,
			ataque: 84,
			defesa: 78,
			spAtaque: 109,
			spDefesa: 85,
			speed: 100
		},
		links: {
			linkBg: "./img/bg-types/Fire-Types.jpg",
			linkImg: "./img/pokemons/006.png",
			linkTipo1: "./img/types/Fire.png",
			linkTipo2: "./img/types/Flying.png"
		}
	}, {
		number: 6,
		nome: "GMax Charizard",
		tipos: {
			primario: "Fire",
			secundario: "Flying"
		},
		atributos: {
			hp: 78,
			ataque: 84,
			defesa: 78,
			spAtaque: 109,
			spDefesa: 85,
			speed: 100
		},
		links: {
			linkBg: "./img/bg-types/Fire-Types.jpg",
			linkImg: "./img/pokemons/006GMAX.png",
			linkTipo1: "./img/types/Fire.png",
			linkTipo2: "./img/types/Flying.png"
		}
	}, {
		number: 6,
		nome: "Mega Charizard X",
		tipos: {
			primario: "Fire",
			secundario: "Dragon"
		},
		atributos: {
			hp: 78,
			ataque: 130,
			defesa: 111,
			spAtaque: 130,
			spDefesa: 85,
			speed: 100
		},
		links: {
			linkBg: "./img/bg-types/Fire-Types.jpg",
			linkImg: "./img/pokemons/006M-X.png",
			linkTipo1: "./img/types/Fire.png",
			linkTipo2: "./img/types/Dragon.png"
		}
	}, {
		number: 6,
		nome: "Mega Charizard Y",
		tipos: {
			primario: "Fire",
			secundario: "Flying"
		},
		atributos: {
			hp: 78,
			ataque: 104,
			defesa: 78,
			spAtaque: 159,
			spDefesa: 115,
			speed: 100
		},
		links: {
			linkBg: "./img/bg-types/Fire-Types.jpg",
			linkImg: "./img/pokemons/006M-Y.png",
			linkTipo1: "./img/types/Fire.png",
			linkTipo2: "./img/types/Flying.png"
		}
	}, {
		number: 7,
		nome: "Squirtle",
		tipos: {
			primario: "Water",
			secundario: ""
		},
		atributos: {
			hp: 44,
			ataque: 48,
			defesa: 65,
			spAtaque: 50,
			spDefesa: 64,
			speed: 43
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/007.png",
			linkTipo1: "./img/types/Water.png",
			linkTipo2: ""
		}
	}, {
		number: 8,
		nome: "Wartortle",
		tipos: {
			primario: "Water",
			secundario: ""
		},
		atributos: {
			hp: 59,
			ataque: 63,
			defesa: 80,
			spAtaque: 65,
			spDefesa: 80,
			speed: 58
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/008.png",
			linkTipo1: "./img/types/Water.png",
			linkTipo2: ""
		}
	}, {
		number: 9,
		nome: "Blastoise",
		tipos: {
			primario: "Water",
			secundario: ""
		},
		atributos: {
			hp: 79,
			ataque: 83,
			defesa: 100,
			spAtaque: 85,
			spDefesa: 105,
			speed: 78
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/009.png",
			linkTipo1: "./img/types/Water.png",
			linkTipo2: ""
		}
	}, {
		number: 9,
		nome: "GMax Blastoise",
		tipos: {
			primario: "Water",
			secundario: ""
		},
		atributos: {
			hp: 79,
			ataque: 83,
			defesa: 100,
			spAtaque: 85,
			spDefesa: 105,
			speed: 78
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/009GMAX.png",
			linkTipo1: "./img/types/Water.png",
			linkTipo2: ""
		}
	}, {
		number: 9,
		nome: "Mega Blastoise",
		tipos: {
			primario: "Water",
			secundario: ""
		},
		atributos: {
			hp: 79,
			ataque: 103,
			defesa: 120,
			spAtaque: 135,
			spDefesa: 115,
			speed: 78
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/009M.png",
			linkTipo1: "./img/types/Water.png",
			linkTipo2: ""
		}
	}, {
		number: 10,
		nome: "Caterpie",
		tipos: {
			primario: "Bug",
			secundario: ""
		},
		atributos: {
			hp: 45,
			ataque: 30,
			defesa: 35,
			spAtaque: 20,
			spDefesa: 20,
			speed: 45
		},
		links: {
			linkBg: "./img/bg-types/Bug-Types.jpg",
			linkImg: "./img/pokemons/010.png",
			linkTipo1: "./img/types/Bug.png",
			linkTipo2: ""
		}
	}, {
		number: 11,
		nome: "Metapod",
		tipos: {
			primario: "Bug",
			secundario: ""
		},
		atributos: {
			hp: 50,
			ataque: 20,
			defesa: 55,
			spAtaque: 25,
			spDefesa: 25,
			speed: 30
		},
		links: {
			linkBg: "./img/bg-types/Bug-Types.jpg",
			linkImg: "./img/pokemons/011.png",
			linkTipo1: "./img/types/Bug.png",
			linkTipo2: ""
		}
	}, {
		number: 12,
		nome: "Butterfree",
		tipos: {
			primario: "Bug",
			secundario: "Flying"
		},
		atributos: {
			hp: 60,
			ataque: 45,
			defesa: 50,
			spAtaque: 90,
			spDefesa: 80,
			speed: 70
		},
		links: {
			linkBg: "./img/bg-types/Bug-Types.jpg",
			linkImg: "./img/pokemons/012.png",
			linkTipo1: "./img/types/Bug.png",
			linkTipo2: "./img/types/Flying.png"
		}
	}, {
		number: 12,
		nome: "GMax Butterfree",
		tipos: {
			primario: "Bug",
			secundario: "Flying"
		},
		atributos: {
			hp: 60,
			ataque: 45,
			defesa: 50,
			spAtaque: 90,
			spDefesa: 80,
			speed: 70
		},
		links: {
			linkBg: "./img/bg-types/Bug-Types.jpg",
			linkImg: "./img/pokemons/012GMAX.png",
			linkTipo1: "./img/types/Bug.png",
			linkTipo2: "./img/types/Flying.png"
		}
	}, {
		number: 13,
		nome: "Weedle",
		tipos: {
			primario: "Bug",
			secundario: "Poison"
		},
		atributos: {
			hp: 40,
			ataque: 35,
			defesa: 30,
			spAtaque: 20,
			spDefesa: 20,
			speed: 50
		},
		links: {
			linkBg: "./img/bg-types/Bug-Types.jpg",
			linkImg: "./img/pokemons/013.png",
			linkTipo1: "./img/types/Bug.png",
			linkTipo2: "./img/types/Poison.png"
		}
	}, {
		number: 14,
		nome: "Kakuna",
		tipos: {
			primario: "Bug",
			secundario: "Poison"
		},
		atributos: {
			hp: 45,
			ataque: 25,
			defesa: 50,
			spAtaque: 25,
			spDefesa: 25,
			speed: 35
		},
		links: {
			linkBg: "./img/bg-types/Bug-Types.jpg",
			linkImg: "./img/pokemons/014.png",
			linkTipo1: "./img/types/Bug.png",
			linkTipo2: "./img/types/Poison.png"
		}
	}, {
		number: 15,
		nome: "Beedrill",
		tipos: {
			primario: "Bug",
			secundario: "Poison"
		},
		atributos: {
			hp: 65,
			ataque: 90,
			defesa: 40,
			spAtaque: 45,
			spDefesa: 80,
			speed: 75
		},
		links: {
			linkBg: "./img/bg-types/Bug-Types.jpg",
			linkImg: "./img/pokemons/015.png",
			linkTipo1: "./img/types/Bug.png",
			linkTipo2: "./img/types/Poison.png"
		}
	}, {
		number: 15,
		nome: "Mega Beedrill",
		tipos: {
			primario: "Bug",
			secundario: "Poison"
		},
		atributos: {
			hp: 65,
			ataque: 150,
			defesa: 40,
			spAtaque: 15,
			spDefesa: 80,
			speed: 145
		},
		links: {
			linkBg: "./img/bg-types/Bug-Types.jpg",
			linkImg: "./img/pokemons/015M.png",
			linkTipo1: "./img/types/Bug.png",
			linkTipo2: "./img/types/Poison.png"
		}
	}, {
		number: 16,
		nome: "Pidgey",
		tipos: {
			primario: "Normal",
			secundario: "Flying"
		},
		atributos: {
			hp: 40,
			ataque: 45,
			defesa: 40,
			spAtaque: 35,
			spDefesa: 35,
			speed: 56
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/016.png",
			linkTipo1: "./img/types/Normal.png",
			linkTipo2: "./img/types/Flying.png"
		}
	}, {
		number: 17,
		nome: "Pidgeotto",
		tipos: {
			primario: "Normal",
			secundario: "Flying"
		},
		atributos: {
			hp: 63,
			ataque: 60,
			defesa: 55,
			spAtaque: 50,
			spDefesa: 50,
			speed: 71
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/017.png",
			linkTipo1: "./img/types/Normal.png",
			linkTipo2: "./img/types/Flying.png"
		}
	}, {
		number: 18,
		nome: "Pidgeot",
		tipos: {
			primario: "Normal",
			secundario: "Flying"
		},
		atributos: {
			hp: 83,
			ataque: 80,
			defesa: 75,
			spAtaque: 70,
			spDefesa: 70,
			speed: 101
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/018.png",
			linkTipo1: "./img/types/Normal.png",
			linkTipo2: "./img/types/Flying.png"
		}
	}, {
		number: 18,
		nome: "Mega Pidgeot",
		tipos: {
			primario: "Normal",
			secundario: "Flying"
		},
		atributos: {
			hp: 83,
			ataque: 80,
			defesa: 80,
			spAtaque: 135,
			spDefesa: 80,
			speed: 121
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/018M.png",
			linkTipo1: "./img/types/Normal.png",
			linkTipo2: "./img/types/Flying.png"
		}
	}, {
		number: 19,
		nome: "Rattata",
		tipos: {
			primario: "Normal",
			secundario: ""
		},
		atributos: {
			hp: 30,
			ataque: 56,
			defesa: 35,
			spAtaque: 25,
			spDefesa: 35,
			speed: 72
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/019.png",
			linkTipo1: "./img/types/Normal.png",
			linkTipo2: ""
		}
	}, {
		number: 19,
		nome: "Alolan Rattata",
		tipos: {
			primario: "Dark",
			secundario: "Normal"
		},
		atributos: {
			hp: 30,
			ataque: 56,
			defesa: 35,
			spAtaque: 25,
			spDefesa: 35,
			speed: 72
		},
		links: {
			linkBg: "./img/bg-types/Dark-Types.jpg",
			linkImg: "./img/pokemons/019A.png",
			linkTipo1: "./img/types/Dark.png",
			linkTipo2: "./img/types/Normal.png"
		}
	}, {
		number: 20,
		nome: "Raticate",
		tipos: {
			primario: "Normal",
			secundario: ""
		},
		atributos: {
			hp: 55,
			ataque: 81,
			defesa: 60,
			spAtaque: 50,
			spDefesa: 70,
			speed: 97
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/020.png",
			linkTipo1: "./img/types/Normal.png",
			linkTipo2: ""
		}
	}, {
		number: 20,
		nome: "Alolan Raticate",
		tipos: {
			primario: "Dark",
			secundario: "Normal"
		},
		atributos: {
			hp: 75,
			ataque: 71,
			defesa: 70,
			spAtaque: 40,
			spDefesa: 80,
			speed: 77
		},
		links: {
			linkBg: "./img/bg-types/Dark-Types.jpg",
			linkImg: "./img/pokemons/020A.png",
			linkTipo1: "./img/types/Dark.png",
			linkTipo2: "./img/types/Normal.png"
		}
	}, {
		number: 21,
		nome: "Spearow",
		tipos: {
			primario: "Normal",
			secundario: "Flying"
		},
		atributos: {
			hp: 40,
			ataque: 60,
			defesa: 30,
			spAtaque: 31,
			spDefesa: 31,
			speed: 70
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/021.png",
			linkTipo1: "./img/types/Normal.png",
			linkTipo2: "./img/types/Flying.png"
		}
	}, {
		number: 22,
		nome: "Fearow",
		tipos: {
			primario: "Normal",
			secundario: "Flying"
		},
		atributos: {
			hp: 65,
			ataque: 90,
			defesa: 65,
			spAtaque: 61,
			spDefesa: 61,
			speed: 100
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/022.png",
			linkTipo1: "./img/types/Normal.png",
			linkTipo2: "./img/types/Flying.png"
		}
	}, {
		number: 23,
		nome: "Ekans",
		tipos: {
			primario: "Poison",
			secundario: ""
		},
		atributos: {
			hp: 35,
			ataque: 60,
			defesa: 44,
			spAtaque: 40,
			spDefesa: 54,
			speed: 55
		},
		links: {
			linkBg: "./img/bg-types/Poison-Types.jpg",
			linkImg: "./img/pokemons/023.png",
			linkTipo1: "./img/types/Poison.png",
			linkTipo2: ""
		}
	}, {
		number: 24,
		nome: "Arbok",
		tipos: {
			primario: "Poison",
			secundario: ""
		},
		atributos: {
			hp: 60,
			ataque: 95,
			defesa: 69,
			spAtaque: 65,
			spDefesa: 79,
			speed: 80
		},
		links: {
			linkBg: "./img/bg-types/Poison-Types.jpg",
			linkImg: "./img/pokemons/024.png",
			linkTipo1: "./img/types/Poison.png",
			linkTipo2: ""
		}
	}, {
		number: 25,
		nome: "Pikachu",
		tipos: {
			primario: "Electric",
			secundario: ""
		},
		atributos: {
			hp: 35,
			ataque: 55,
			defesa: 40,
			spAtaque: 50,
			spDefesa: 50,
			speed: 90
		},
		links: {
			linkBg: "./img/bg-types/Electric-Types.jpg",
			linkImg: "./img/pokemons/025.png",
			linkTipo1: "./img/types/Electric.png",
			linkTipo2: ""
		}
	}, {
		number: 25,
		nome: "GMax Pikachu",
		tipos: {
			primario: "Electric",
			secundario: ""
		},
		atributos: {
			hp: 35,
			ataque: 55,
			defesa: 40,
			spAtaque: 50,
			spDefesa: 50,
			speed: 90
		},
		links: {
			linkBg: "./img/bg-types/Electric-Types.jpg",
			linkImg: "./img/pokemons/025GMAX.png",
			linkTipo1: "./img/types/Electric.png",
			linkTipo2: ""
		}
	}, {
		number: 25,
		nome: "Partner Pikachu",
		tipos: {
			primario: "Electric",
			secundario: ""
		},
		atributos: {
			hp: 45,
			ataque: 80,
			defesa: 50,
			spAtaque: 75,
			spDefesa: 60,
			speed: 120
		},
		links: {
			linkBg: "./img/bg-types/Electric-Types.jpg",
			linkImg: "./img/pokemons/025LG.png",
			linkTipo1: "./img/types/Electric.png",
			linkTipo2: ""
		}
	}, {
		number: 26,
		nome: "Raichu",
		tipos: {
			primario: "Electric",
			secundario: ""
		},
		atributos: {
			hp: 60,
			ataque: 90,
			defesa: 55,
			spAtaque: 90,
			spDefesa: 80,
			speed: 110
		},
		links: {
			linkBg: "./img/bg-types/Electric-Types.jpg",
			linkImg: "./img/pokemons/026.png",
			linkTipo1: "./img/types/Electric.png",
			linkTipo2: ""
		}
	}, {
		number: 26,
		nome: "Alolan Raichu",
		tipos: {
			primario: "Electric",
			secundario: "Psychic"
		},
		atributos: {
			hp: 60,
			ataque: 85,
			defesa: 50,
			spAtaque: 95,
			spDefesa: 85,
			speed: 110
		},
		links: {
			linkBg: "./img/bg-types/Electric-Types.jpg",
			linkImg: "./img/pokemons/026A.png",
			linkTipo1: "./img/types/Electric.png",
			linkTipo2: "./img/types/Psychic.png"
		}
	}, {
		number: 27,
		nome: "Sandshrew",
		tipos: {
			primario: "Ground",
			secundario: ""
		},
		atributos: {
			hp: 50,
			ataque: 75,
			defesa: 85,
			spAtaque: 20,
			spDefesa: 30,
			speed: 40
		},
		links: {
			linkBg: "./img/bg-types/Ground-Types.jpg",
			linkImg: "./img/pokemons/027.png",
			linkTipo1: "./img/types/Ground.png",
			linkTipo2: ""
		}
	}, {
		number: 27,
		nome: "Alolan Sandshrew",
		tipos: {
			primario: "Ice",
			secundario: "Steel"
		},
		atributos: {
			hp: 50,
			ataque: 75,
			defesa: 90,
			spAtaque: 10,
			spDefesa: 35,
			speed: 40
		},
		links: {
			linkBg: "./img/bg-types/Ice-Types.jpg",
			linkImg: "./img/pokemons/027A.png",
			linkTipo1: "./img/types/Ice.png",
			linkTipo2: "./img/types/Steel.png"
		}
	}, {
		number: 28,
		nome: "Sandslash",
		tipos: {
			primario: "Ground",
			secundario: ""
		},
		atributos: {
			hp: 75,
			ataque: 100,
			defesa: 110,
			spAtaque: 45,
			spDefesa: 55,
			speed: 65
		},
		links: {
			linkBg: "./img/bg-types/Ground-Types.jpg",
			linkImg: "./img/pokemons/028.png",
			linkTipo1: "./img/types/Ground.png",
			linkTipo2: ""
		}
	}, {
		number: 28,
		nome: "Alolan Sandslash",
		tipos: {
			primario: "Ice",
			secundario: "Steel"
		},
		atributos: {
			hp: 75,
			ataque: 100,
			defesa: 120,
			spAtaque: 25,
			spDefesa: 65,
			speed: 65
		},
		links: {
			linkBg: "./img/bg-types/Ice-Types.jpg",
			linkImg: "./img/pokemons/028A.png",
			linkTipo1: "./img/types/Ice.png",
			linkTipo2: "./img/types/Steel.png"
		}
	}, {
		number: 29,
		nome: "Nidoran?",
		tipos: {
			primario: "Poison",
			secundario: ""
		},
		atributos: {
			hp: 55,
			ataque: 47,
			defesa: 52,
			spAtaque: 40,
			spDefesa: 40,
			speed: 41
		},
		links: {
			linkBg: "./img/bg-types/Poison-Types.jpg",
			linkImg: "./img/pokemons/029.png",
			linkTipo1: "./img/types/Poison.png",
			linkTipo2: ""
		}
	}, {
		number: 30,
		nome: "Nidorina",
		tipos: {
			primario: "Poison",
			secundario: ""
		},
		atributos: {
			hp: 70,
			ataque: 62,
			defesa: 67,
			spAtaque: 55,
			spDefesa: 55,
			speed: 56
		},
		links: {
			linkBg: "./img/bg-types/Poison-Types.jpg",
			linkImg: "./img/pokemons/030.png",
			linkTipo1: "./img/types/Poison.png",
			linkTipo2: ""
		}
	}, {
		number: 31,
		nome: "Nidoqueen",
		tipos: {
			primario: "Poison",
			secundario: "Ground"
		},
		atributos: {
			hp: 90,
			ataque: 92,
			defesa: 87,
			spAtaque: 75,
			spDefesa: 85,
			speed: 76
		},
		links: {
			linkBg: "./img/bg-types/Poison-Types.jpg",
			linkImg: "./img/pokemons/031.png",
			linkTipo1: "./img/types/Poison.png",
			linkTipo2: "./img/types/Ground.png"
		}
	}, {
		number: 32,
		nome: "Nidoran?",
		tipos: {
			primario: "Poison",
			secundario: ""
		},
		atributos: {
			hp: 46,
			ataque: 57,
			defesa: 40,
			spAtaque: 40,
			spDefesa: 40,
			speed: 50
		},
		links: {
			linkBg: "./img/bg-types/Poison-Types.jpg",
			linkImg: "./img/pokemons/032.png",
			linkTipo1: "./img/types/Poison.png",
			linkTipo2: ""
		}
	}, {
		number: 33,
		nome: "Nidorino",
		tipos: {
			primario: "Poison",
			secundario: ""
		},
		atributos: {
			hp: 61,
			ataque: 72,
			defesa: 57,
			spAtaque: 55,
			spDefesa: 55,
			speed: 65
		},
		links: {
			linkBg: "./img/bg-types/Poison-Types.jpg",
			linkImg: "./img/pokemons/033.png",
			linkTipo1: "./img/types/Poison.png",
			linkTipo2: ""
		}
	}, {
		number: 34,
		nome: "Nidoking",
		tipos: {
			primario: "Poison",
			secundario: "Ground"
		},
		atributos: {
			hp: 81,
			ataque: 102,
			defesa: 77,
			spAtaque: 85,
			spDefesa: 75,
			speed: 85
		},
		links: {
			linkBg: "./img/bg-types/Poison-Types.jpg",
			linkImg: "./img/pokemons/034.png",
			linkTipo1: "./img/types/Poison.png",
			linkTipo2: "./img/types/Ground.png"
		}
	}, {
		number: 35,
		nome: "Clefairy",
		tipos: {
			primario: "Fairy",
			secundario: ""
		},
		atributos: {
			hp: 70,
			ataque: 45,
			defesa: 48,
			spAtaque: 60,
			spDefesa: 65,
			speed: 35
		},
		links: {
			linkBg: "./img/bg-types/Fairy-Types.jpg",
			linkImg: "./img/pokemons/035.png",
			linkTipo1: "./img/types/Fairy.png",
			linkTipo2: ""
		}
	}, {
		number: 36,
		nome: "Clefable",
		tipos: {
			primario: "Fairy",
			secundario: ""
		},
		atributos: {
			hp: 95,
			ataque: 70,
			defesa: 73,
			spAtaque: 95,
			spDefesa: 90,
			speed: 60
		},
		links: {
			linkBg: "./img/bg-types/Fairy-Types.jpg",
			linkImg: "./img/pokemons/036.png",
			linkTipo1: "./img/types/Fairy.png",
			linkTipo2: ""
		}
	}, {
		number: 37,
		nome: "Vulpix",
		tipos: {
			primario: "Fire",
			secundario: ""
		},
		atributos: {
			hp: 38,
			ataque: 41,
			defesa: 40,
			spAtaque: 50,
			spDefesa: 65,
			speed: 65
		},
		links: {
			linkBg: "./img/bg-types/Fire-Types.jpg",
			linkImg: "./img/pokemons/037.png",
			linkTipo1: "./img/types/Fire.png",
			linkTipo2: ""
		}
	}, {
		number: 37,
		nome: "Alolan Vulpix",
		tipos: {
			primario: "Ice",
			secundario: ""
		},
		atributos: {
			hp: 38,
			ataque: 41,
			defesa: 40,
			spAtaque: 50,
			spDefesa: 65,
			speed: 65
		},
		links: {
			linkBg: "./img/bg-types/Ice-Types.jpg",
			linkImg: "./img/pokemons/037A.png",
			linkTipo1: "./img/types/Ice.png",
			linkTipo2: ""
		}
	}, {
		number: 38,
		nome: "Ninetales",
		tipos: {
			primario: "Fire",
			secundario: ""
		},
		atributos: {
			hp: 73,
			ataque: 76,
			defesa: 75,
			spAtaque: 81,
			spDefesa: 100,
			speed: 100
		},
		links: {
			linkBg: "./img/bg-types/Fire-Types.jpg",
			linkImg: "./img/pokemons/038.png",
			linkTipo1: "./img/types/Fire.png",
			linkTipo2: ""
		}
	}, {
		number: 38,
		nome: "Alolan Ninetales",
		tipos: {
			primario: "Ice",
			secundario: "Fairy"
		},
		atributos: {
			hp: 73,
			ataque: 67,
			defesa: 75,
			spAtaque: 81,
			spDefesa: 100,
			speed: 109
		},
		links: {
			linkBg: "./img/bg-types/Ice-Types.jpg",
			linkImg: "./img/pokemons/038A.png",
			linkTipo1: "./img/types/Ice.png",
			linkTipo2: "./img/types/Fairy.png"
		}
	}, {
		number: 39,
		nome: "Jigglypuff",
		tipos: {
			primario: "Normal",
			secundario: "Fairy"
		},
		atributos: {
			hp: 115,
			ataque: 45,
			defesa: 20,
			spAtaque: 45,
			spDefesa: 25,
			speed: 20
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/039.png",
			linkTipo1: "./img/types/Normal.png",
			linkTipo2: "./img/types/Fairy.png"
		}
	}, {
		number: 40,
		nome: "Wigglytuff",
		tipos: {
			primario: "Normal",
			secundario: "Fairy"
		},
		atributos: {
			hp: 140,
			ataque: 70,
			defesa: 45,
			spAtaque: 85,
			spDefesa: 50,
			speed: 45
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/040.png",
			linkTipo1: "./img/types/Normal.png",
			linkTipo2: "./img/types/Fairy.png"
		}
	}, {
		number: 41,
		nome: "Zubat",
		tipos: {
			primario: "Poison",
			secundario: "Flying"
		},
		atributos: {
			hp: 40,
			ataque: 45,
			defesa: 35,
			spAtaque: 30,
			spDefesa: 40,
			speed: 55
		},
		links: {
			linkBg: "./img/bg-types/Poison-Types.jpg",
			linkImg: "./img/pokemons/041.png",
			linkTipo1: "./img/types/Poison.png",
			linkTipo2: "./img/types/Flying.png"
		}
	}, {
		number: 42,
		nome: "Golbat",
		tipos: {
			primario: "Poison",
			secundario: "Flying"
		},
		atributos: {
			hp: 75,
			ataque: 80,
			defesa: 70,
			spAtaque: 65,
			spDefesa: 75,
			speed: 90
		},
		links: {
			linkBg: "./img/bg-types/Poison-Types.jpg",
			linkImg: "./img/pokemons/042.png",
			linkTipo1: "./img/types/Poison.png",
			linkTipo2: "./img/types/Flying.png"
		}
	}, {
		number: 43,
		nome: "Oddish",
		tipos: {
			primario: "Grass",
			secundario: "Poison"
		},
		atributos: {
			hp: 45,
			ataque: 50,
			defesa: 55,
			spAtaque: 75,
			spDefesa: 65,
			speed: 30
		},
		links: {
			linkBg: "./img/bg-types/Grass-Types.jpg",
			linkImg: "./img/pokemons/043.png",
			linkTipo1: "./img/types/Grass.png",
			linkTipo2: "./img/types/Poison.png"
		}
	}, {
		number: 44,
		nome: "Gloom",
		tipos: {
			primario: "Grass",
			secundario: "Poison"
		},
		atributos: {
			hp: 60,
			ataque: 65,
			defesa: 70,
			spAtaque: 85,
			spDefesa: 75,
			speed: 40
		},
		links: {
			linkBg: "./img/bg-types/Grass-Types.jpg",
			linkImg: "./img/pokemons/044.png",
			linkTipo1: "./img/types/Grass.png",
			linkTipo2: "./img/types/Poison.png"
		}
	}, {
		number: 45,
		nome: "Vileplume",
		tipos: {
			primario: "Grass",
			secundario: "Poison"
		},
		atributos: {
			hp: 75,
			ataque: 80,
			defesa: 85,
			spAtaque: 110,
			spDefesa: 90,
			speed: 50
		},
		links: {
			linkBg: "./img/bg-types/Grass-Types.jpg",
			linkImg: "./img/pokemons/045.png",
			linkTipo1: "./img/types/Grass.png",
			linkTipo2: "./img/types/Poison.png"
		}
	}, {
		number: 46,
		nome: "Paras",
		tipos: {
			primario: "Bug",
			secundario: "Grass"
		},
		atributos: {
			hp: 35,
			ataque: 70,
			defesa: 55,
			spAtaque: 45,
			spDefesa: 55,
			speed: 25
		},
		links: {
			linkBg: "./img/bg-types/Bug-Types.jpg",
			linkImg: "./img/pokemons/046.png",
			linkTipo1: "./img/types/Bug.png",
			linkTipo2: "./img/types/Grass.png"
		}
	}, {
		number: 47,
		nome: "Parasect",
		tipos: {
			primario: "Bug",
			secundario: "Grass"
		},
		atributos: {
			hp: 60,
			ataque: 95,
			defesa: 80,
			spAtaque: 60,
			spDefesa: 80,
			speed: 30
		},
		links: {
			linkBg: "./img/bg-types/Bug-Types.jpg",
			linkImg: "./img/pokemons/047.png",
			linkTipo1: "./img/types/Bug.png",
			linkTipo2: "./img/types/Grass.png"
		}
	}, {
		number: 48,
		nome: "Venonat",
		tipos: {
			primario: "Bug",
			secundario: "Poison"
		},
		atributos: {
			hp: 60,
			ataque: 55,
			defesa: 50,
			spAtaque: 40,
			spDefesa: 55,
			speed: 45
		},
		links: {
			linkBg: "./img/bg-types/Bug-Types.jpg",
			linkImg: "./img/pokemons/048.png",
			linkTipo1: "./img/types/Bug.png",
			linkTipo2: "./img/types/Poison.png"
		}
	}, {
		number: 49,
		nome: "Venomoth",
		tipos: {
			primario: "Bug",
			secundario: "Poison"
		},
		atributos: {
			hp: 70,
			ataque: 65,
			defesa: 60,
			spAtaque: 90,
			spDefesa: 75,
			speed: 90
		},
		links: {
			linkBg: "./img/bg-types/Bug-Types.jpg",
			linkImg: "./img/pokemons/049.png",
			linkTipo1: "./img/types/Bug.png",
			linkTipo2: "./img/types/Poison.png"
		}
	}, {
		number: 50,
		nome: "Diglett",
		tipos: {
			primario: "Ground",
			secundario: ""
		},
		atributos: {
			hp: 10,
			ataque: 55,
			defesa: 25,
			spAtaque: 35,
			spDefesa: 45,
			speed: 95
		},
		links: {
			linkBg: "./img/bg-types/Ground-Types.jpg",
			linkImg: "./img/pokemons/050.png",
			linkTipo1: "./img/types/Ground.png",
			linkTipo2: ""
		}
	}, {
		number: 50,
		nome: "Alolan Diglett",
		tipos: {
			primario: "Ground",
			secundario: "Steel"
		},
		atributos: {
			hp: 10,
			ataque: 55,
			defesa: 30,
			spAtaque: 35,
			spDefesa: 45,
			speed: 90
		},
		links: {
			linkBg: "./img/bg-types/Ground-Types.jpg",
			linkImg: "./img/pokemons/050A.png",
			linkTipo1: "./img/types/Ground.png",
			linkTipo2: "./img/types/Steel.png"
		}
	}, {
		number: 51,
		nome: "Dugtrio",
		tipos: {
			primario: "Ground",
			secundario: ""
		},
		atributos: {
			hp: 35,
			ataque: 100,
			defesa: 50,
			spAtaque: 50,
			spDefesa: 70,
			speed: 120
		},
		links: {
			linkBg: "./img/bg-types/Ground-Types.jpg",
			linkImg: "./img/pokemons/051.png",
			linkTipo1: "./img/types/Ground.png",
			linkTipo2: ""
		}
	}, {
		number: 51,
		nome: "Alolan Dugtrio",
		tipos: {
			primario: "Ground",
			secundario: "Steel"
		},
		atributos: {
			hp: 35,
			ataque: 100,
			defesa: 60,
			spAtaque: 50,
			spDefesa: 70,
			speed: 110
		},
		links: {
			linkBg: "./img/bg-types/Ground-Types.jpg",
			linkImg: "./img/pokemons/051A.png",
			linkTipo1: "./img/types/Ground.png",
			linkTipo2: "./img/types/Steel.png"
		}
	}, {
		number: 52,
		nome: "Meowth",
		tipos: {
			primario: "Normal",
			secundario: ""
		},
		atributos: {
			hp: 40,
			ataque: 45,
			defesa: 35,
			spAtaque: 40,
			spDefesa: 40,
			speed: 90
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/052.png",
			linkTipo1: "./img/types/Normal.png",
			linkTipo2: ""
		}
	}, {
		number: 52,
		nome: "GMax Meowth",
		tipos: {
			primario: "Normal",
			secundario: ""
		},
		atributos: {
			hp: 40,
			ataque: 45,
			defesa: 35,
			spAtaque: 40,
			spDefesa: 40,
			speed: 90
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/052MAX.png",
			linkTipo1: "./img/types/Normal.png",
			linkTipo2: ""
		}
	}, {
		number: 52,
		nome: "Alolan Meowth",
		tipos: {
			primario: "Dark",
			secundario: ""
		},
		atributos: {
			hp: 40,
			ataque: 35,
			defesa: 35,
			spAtaque: 50,
			spDefesa: 40,
			speed: 90
		},
		links: {
			linkBg: "./img/bg-types/Dark-Types.jpg",
			linkImg: "./img/pokemons/052A.png",
			linkTipo1: "./img/types/Dark.png",
			linkTipo2: ""
		}
	}, {
		number: 52,
		nome: "Galarian Meowth",
		tipos: {
			primario: "Steel",
			secundario: ""
		},
		atributos: {
			hp: 50,
			ataque: 65,
			defesa: 55,
			spAtaque: 40,
			spDefesa: 40,
			speed: 40
		},
		links: {
			linkBg: "./img/bg-types/Steel-Types.jpg",
			linkImg: "./img/pokemons/052G.png",
			linkTipo1: "./img/types/Steel.png",
			linkTipo2: ""
		}
	}, {
		number: 53,
		nome: "Persian",
		tipos: {
			primario: "Normal",
			secundario: ""
		},
		atributos: {
			hp: 65,
			ataque: 70,
			defesa: 60,
			spAtaque: 65,
			spDefesa: 65,
			speed: 115
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/053.png",
			linkTipo1: "./img/types/Normal.png",
			linkTipo2: ""
		}
	}, {
		number: 53,
		nome: "Alolan Persian",
		tipos: {
			primario: "Dark",
			secundario: ""
		},
		atributos: {
			hp: 65,
			ataque: 60,
			defesa: 60,
			spAtaque: 75,
			spDefesa: 65,
			speed: 115
		},
		links: {
			linkBg: "./img/bg-types/Dark-Types.jpg",
			linkImg: "./img/pokemons/053A.png",
			linkTipo1: "./img/types/Dark.png",
			linkTipo2: ""
		}
	}, {
		number: 54,
		nome: "Psyduck",
		tipos: {
			primario: "Water",
			secundario: ""
		},
		atributos: {
			hp: 50,
			ataque: 52,
			defesa: 48,
			spAtaque: 65,
			spDefesa: 50,
			speed: 55
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/054.png",
			linkTipo1: "./img/types/Water.png",
			linkTipo2: ""
		}
	}, {
		number: 55,
		nome: "Golduck",
		tipos: {
			primario: "Water",
			secundario: ""
		},
		atributos: {
			hp: 80,
			ataque: 82,
			defesa: 78,
			spAtaque: 95,
			spDefesa: 80,
			speed: 85
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/055.png",
			linkTipo1: "./img/types/Water.png",
			linkTipo2: ""
		}
	}, {
		number: 56,
		nome: "Mankey",
		tipos: {
			primario: "Fighting",
			secundario: ""
		},
		atributos: {
			hp: 40,
			ataque: 80,
			defesa: 35,
			spAtaque: 35,
			spDefesa: 45,
			speed: 70
		},
		links: {
			linkBg: "./img/bg-types/Fighting-Types.jpg",
			linkImg: "./img/pokemons/056.png",
			linkTipo1: "./img/types/Fighting.png",
			linkTipo2: ""
		}
	}, {
		number: 57,
		nome: "Primeape",
		tipos: {
			primario: "Fighting",
			secundario: ""
		},
		atributos: {
			hp: 65,
			ataque: 105,
			defesa: 60,
			spAtaque: 60,
			spDefesa: 70,
			speed: 95
		},
		links: {
			linkBg: "./img/bg-types/Fighting-Types.jpg",
			linkImg: "./img/pokemons/057.png",
			linkTipo1: "./img/types/Fighting.png",
			linkTipo2: ""
		}
	}, {
		number: 58,
		nome: "Growlithe",
		tipos: {
			primario: "Fire",
			secundario: ""
		},
		atributos: {
			hp: 55,
			ataque: 70,
			defesa: 45,
			spAtaque: 70,
			spDefesa: 50,
			speed: 60
		},
		links: {
			linkBg: "./img/bg-types/Fire-Types.jpg",
			linkImg: "./img/pokemons/058.png",
			linkTipo1: "./img/types/Fire.png",
			linkTipo2: ""
		}
	}, {
		number: 58,
		nome: "Hisuian Growlithe",
		tipos: {
			primario: "Fire",
			secundario: "Rock"
		},
		atributos: {
			hp: 60,
			ataque: 75,
			defesa: 45,
			spAtaque: 65,
			spDefesa: 50,
			speed: 55
		},
		links: {
			linkBg: "./img/bg-types/Fire-Types.jpg",
			linkImg: "./img/pokemons/058H.png",
			linkTipo1: "./img/types/Fire.png",
			linkTipo2: "./img/types/Rock.png"
		}
	}, {
		number: 59,
		nome: "Arcanine",
		tipos: {
			primario: "Fire",
			secundario: ""
		},
		atributos: {
			hp: 90,
			ataque: 110,
			defesa: 80,
			spAtaque: 100,
			spDefesa: 80,
			speed: 95
		},
		links: {
			linkBg: "./img/bg-types/Fire-Types.jpg",
			linkImg: "./img/pokemons/059.png",
			linkTipo1: "./img/types/Fire.png",
			linkTipo2: ""
		}
	}, {
		number: 59,
		nome: "Hisuian Arcanine",
		tipos: {
			primario: "Fire",
			secundario: "Rock"
		},
		atributos: {
			hp: 95,
			ataque: 115,
			defesa: 80,
			spAtaque: 95,
			spDefesa: 80,
			speed: 90
		},
		links: {
			linkBg: "./img/bg-types/Fire-Types.jpg",
			linkImg: "./img/pokemons/059H.png",
			linkTipo1: "./img/types/Fire.png",
			linkTipo2: "./img/types/Rock.png"
		}
	}, {
		number: 60,
		nome: "Poliwag",
		tipos: {
			primario: "Water",
			secundario: ""
		},
		atributos: {
			hp: 40,
			ataque: 50,
			defesa: 40,
			spAtaque: 40,
			spDefesa: 40,
			speed: 90
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/060.png",
			linkTipo1: "./img/types/Water.png",
			linkTipo2: ""
		}
	}, {
		number: 61,
		nome: "Poliwhirl",
		tipos: {
			primario: "Water",
			secundario: ""
		},
		atributos: {
			hp: 65,
			ataque: 65,
			defesa: 65,
			spAtaque: 50,
			spDefesa: 50,
			speed: 90
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/061.png",
			linkTipo1: "./img/types/Water.png",
			linkTipo2: ""
		}
	}, {
		number: 62,
		nome: "Poliwrath",
		tipos: {
			primario: "Water",
			secundario: "Fighting"
		},
		atributos: {
			hp: 90,
			ataque: 95,
			defesa: 95,
			spAtaque: 70,
			spDefesa: 90,
			speed: 70
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/062.png",
			linkTipo1: "./img/types/Water.png",
			linkTipo2: "./img/types/Fighting.png"
		}
	}, {
		number: 63,
		nome: "Abra",
		tipos: {
			primario: "Psychic",
			secundario: ""
		},
		atributos: {
			hp: 25,
			ataque: 20,
			defesa: 15,
			spAtaque: 105,
			spDefesa: 55,
			speed: 90
		},
		links: {
			linkBg: "./img/bg-types/Psychic-Types.jpg",
			linkImg: "./img/pokemons/063.png",
			linkTipo1: "./img/types/Psychic.png",
			linkTipo2: ""
		}
	}, {
		number: 64,
		nome: "Kadabra",
		tipos: {
			primario: "Psychic",
			secundario: ""
		},
		atributos: {
			hp: 40,
			ataque: 35,
			defesa: 30,
			spAtaque: 120,
			spDefesa: 70,
			speed: 105
		},
		links: {
			linkBg: "./img/bg-types/Psychic-Types.jpg",
			linkImg: "./img/pokemons/064.png",
			linkTipo1: "./img/types/Psychic.png",
			linkTipo2: ""
		}
	}, {
		number: 65,
		nome: "Alakazam",
		tipos: {
			primario: "Psychic",
			secundario: ""
		},
		atributos: {
			hp: 55,
			ataque: 50,
			defesa: 45,
			spAtaque: 135,
			spDefesa: 95,
			speed: 120
		},
		links: {
			linkBg: "./img/bg-types/Psychic-Types.jpg",
			linkImg: "./img/pokemons/065.png",
			linkTipo1: "./img/types/Psychic.png",
			linkTipo2: ""
		}
	}, {
		number: 65,
		nome: "Mega Alakazam",
		tipos: {
			primario: "Psychic",
			secundario: ""
		},
		atributos: {
			hp: 55,
			ataque: 50,
			defesa: 65,
			spAtaque: 175,
			spDefesa: 105,
			speed: 150
		},
		links: {
			linkBg: "./img/bg-types/Psychic-Types.jpg",
			linkImg: "./img/pokemons/065M.png",
			linkTipo1: "./img/types/Psychic.png",
			linkTipo2: ""
		}
	}, {
		number: 66,
		nome: "Machop",
		tipos: {
			primario: "Fighting",
			secundario: ""
		},
		atributos: {
			hp: 70,
			ataque: 80,
			defesa: 50,
			spAtaque: 35,
			spDefesa: 35,
			speed: 35
		},
		links: {
			linkBg: "./img/bg-types/Fighting-Types.jpg",
			linkImg: "./img/pokemons/066.png",
			linkTipo1: "./img/types/Fighting.png",
			linkTipo2: ""
		}
	}, {
		number: 67,
		nome: "Machoke",
		tipos: {
			primario: "Fighting",
			secundario: ""
		},
		atributos: {
			hp: 80,
			ataque: 100,
			defesa: 70,
			spAtaque: 50,
			spDefesa: 60,
			speed: 45
		},
		links: {
			linkBg: "./img/bg-types/Fighting-Types.jpg",
			linkImg: "./img/pokemons/067.png",
			linkTipo1: "./img/types/Fighting.png",
			linkTipo2: ""
		}
	}, {
		number: 68,
		nome: "Machamp",
		tipos: {
			primario: "Fighting",
			secundario: ""
		},
		atributos: {
			hp: 90,
			ataque: 130,
			defesa: 80,
			spAtaque: 65,
			spDefesa: 85,
			speed: 55
		},
		links: {
			linkBg: "./img/bg-types/Fighting-Types.jpg",
			linkImg: "./img/pokemons/068.png",
			linkTipo1: "./img/types/Fighting.png",
			linkTipo2: ""
		}
	}, {
		number: 68,
		nome: "GMax Machamp",
		tipos: {
			primario: "Fighting",
			secundario: ""
		},
		atributos: {
			hp: 90,
			ataque: 130,
			defesa: 80,
			spAtaque: 65,
			spDefesa: 85,
			speed: 55
		},
		links: {
			linkBg: "./img/bg-types/Fighting-Types.jpg",
			linkImg: "./img/pokemons/068GMAX.png",
			linkTipo1: "./img/types/Fighting.png",
			linkTipo2: ""
		}
	}, {
		number: 69,
		nome: "Bellsprout",
		tipos: {
			primario: "Grass",
			secundario: "Poison"
		},
		atributos: {
			hp: 50,
			ataque: 75,
			defesa: 35,
			spAtaque: 70,
			spDefesa: 30,
			speed: 40
		},
		links: {
			linkBg: "./img/bg-types/Grass-Types.jpg",
			linkImg: "./img/pokemons/069.png",
			linkTipo1: "./img/types/Grass.png",
			linkTipo2: "./img/types/Poison.png"
		}
	}, {
		number: 70,
		nome: "Weepinbell",
		tipos: {
			primario: "Grass",
			secundario: "Poison"
		},
		atributos: {
			hp: 65,
			ataque: 90,
			defesa: 50,
			spAtaque: 85,
			spDefesa: 45,
			speed: 55
		},
		links: {
			linkBg: "./img/bg-types/Grass-Types.jpg",
			linkImg: "./img/pokemons/070.png",
			linkTipo1: "./img/types/Grass.png",
			linkTipo2: "./img/types/Poison.png"
		}
	}, {
		number: 71,
		nome: "Victreebel",
		tipos: {
			primario: "Grass",
			secundario: "Poison"
		},
		atributos: {
			hp: 80,
			ataque: 105,
			defesa: 65,
			spAtaque: 100,
			spDefesa: 70,
			speed: 70
		},
		links: {
			linkBg: "./img/bg-types/Grass-Types.jpg",
			linkImg: "./img/pokemons/071.png",
			linkTipo1: "./img/types/Grass.png",
			linkTipo2: "./img/types/Poison.png"
		}
	}, {
		number: 72,
		nome: "Tentacool",
		tipos: {
			primario: "Water",
			secundario: "Poison"
		},
		atributos: {
			hp: 40,
			ataque: 40,
			defesa: 35,
			spAtaque: 50,
			spDefesa: 100,
			speed: 70
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/072.png",
			linkTipo1: "./img/types/Water.png",
			linkTipo2: "./img/types/Poison.png"
		}
	}, {
		number: 73,
		nome: "Tentacruel",
		tipos: {
			primario: "Water",
			secundario: "Poison"
		},
		atributos: {
			hp: 80,
			ataque: 70,
			defesa: 65,
			spAtaque: 80,
			spDefesa: 120,
			speed: 100
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/073.png",
			linkTipo1: "./img/types/Water.png",
			linkTipo2: "./img/types/Poison.png"
		}
	}, {
		number: 74,
		nome: "Geodude",
		tipos: {
			primario: "Rock",
			secundario: "Ground"
		},
		atributos: {
			hp: 40,
			ataque: 80,
			defesa: 100,
			spAtaque: 30,
			spDefesa: 30,
			speed: 20
		},
		links: {
			linkBg: "./img/bg-types/Rock-Types.jpg",
			linkImg: "./img/pokemons/074.png",
			linkTipo1: "./img/types/Rock.png",
			linkTipo2: "./img/types/Ground.png"
		}
	}, {
		number: 74,
		nome: "Alolan Geodude",
		tipos: {
			primario: "Rock",
			secundario: "Electric"
		},
		atributos: {
			hp: 40,
			ataque: 80,
			defesa: 100,
			spAtaque: 30,
			spDefesa: 30,
			speed: 20
		},
		links: {
			linkBg: "./img/bg-types/Rock-Types.jpg",
			linkImg: "./img/pokemons/074A.png",
			linkTipo1: "./img/types/Rock.png",
			linkTipo2: "./img/types/Electric.png"
		}
	}, {
		number: 75,
		nome: "Graveler",
		tipos: {
			primario: "Rock",
			secundario: "Ground"
		},
		atributos: {
			hp: 55,
			ataque: 95,
			defesa: 115,
			spAtaque: 45,
			spDefesa: 45,
			speed: 35
		},
		links: {
			linkBg: "./img/bg-types/Rock-Types.jpg",
			linkImg: "./img/pokemons/075.png",
			linkTipo1: "./img/types/Rock.png",
			linkTipo2: "./img/types/Ground.png"
		}
	}, {
		number: 75,
		nome: "Alolan Graveler",
		tipos: {
			primario: "Rock",
			secundario: "Electric"
		},
		atributos: {
			hp: 55,
			ataque: 95,
			defesa: 115,
			spAtaque: 45,
			spDefesa: 45,
			speed: 35
		},
		links: {
			linkBg: "./img/bg-types/Rock-Types.jpg",
			linkImg: "./img/pokemons/075A.png",
			linkTipo1: "./img/types/Rock.png",
			linkTipo2: "./img/types/Electric.png"
		}
	}, {
		number: 76,
		nome: "Golem",
		tipos: {
			primario: "Rock",
			secundario: "Ground"
		},
		atributos: {
			hp: 80,
			ataque: 120,
			defesa: 130,
			spAtaque: 55,
			spDefesa: 65,
			speed: 45
		},
		links: {
			linkBg: "./img/bg-types/Rock-Types.jpg",
			linkImg: "./img/pokemons/076.png",
			linkTipo1: "./img/types/Rock.png",
			linkTipo2: "./img/types/Ground.png"
		}
	}, {
		number: 76,
		nome: "Alolan Golem",
		tipos: {
			primario: "Rock",
			secundario: "Electric"
		},
		atributos: {
			hp: 80,
			ataque: 120,
			defesa: 130,
			spAtaque: 55,
			spDefesa: 65,
			speed: 45
		},
		links: {
			linkBg: "./img/bg-types/Rock-Types.jpg",
			linkImg: "./img/pokemons/076A.png",
			linkTipo1: "./img/types/Rock.png",
			linkTipo2: "./img/types/Electric.png"
		}
	}, {
		number: 77,
		nome: "Ponyta",
		tipos: {
			primario: "Fire",
			secundario: ""
		},
		atributos: {
			hp: 50,
			ataque: 85,
			defesa: 55,
			spAtaque: 65,
			spDefesa: 65,
			speed: 90
		},
		links: {
			linkBg: "./img/bg-types/Fire-Types.jpg",
			linkImg: "./img/pokemons/077.png",
			linkTipo1: "./img/types/Fire.png",
			linkTipo2: ""
		}
	}, {
		number: 77,
		nome: "Galarian Ponyta",
		tipos: {
			primario: "Psychic",
			secundario: ""
		},
		atributos: {
			hp: 50,
			ataque: 85,
			defesa: 55,
			spAtaque: 65,
			spDefesa: 65,
			speed: 90
		},
		links: {
			linkBg: "./img/bg-types/Psychic-Types.jpg",
			linkImg: "./img/pokemons/077G.png",
			linkTipo1: "./img/types/Psychic.png",
			linkTipo2: ""
		}
	}, {
		number: 78,
		nome: "Rapidash",
		tipos: {
			primario: "Fire",
			secundario: ""
		},
		atributos: {
			hp: 65,
			ataque: 100,
			defesa: 70,
			spAtaque: 80,
			spDefesa: 80,
			speed: 105
		},
		links: {
			linkBg: "./img/bg-types/Fire-Types.jpg",
			linkImg: "./img/pokemons/078.png",
			linkTipo1: "./img/types/Fire.png",
			linkTipo2: ""
		}
	}, {
		number: 78,
		nome: "Galarian Rapidash",
		tipos: {
			primario: "Psychic",
			secundario: "Fairy"
		},
		atributos: {
			hp: 65,
			ataque: 100,
			defesa: 70,
			spAtaque: 80,
			spDefesa: 80,
			speed: 105
		},
		links: {
			linkBg: "./img/bg-types/Psychic-Types.jpg",
			linkImg: "./img/pokemons/078G.png",
			linkTipo1: "./img/types/Psychic.png",
			linkTipo2: "./img/types/Fairy.png"
		}
	}, {
		number: 79,
		nome: "Slowpoke",
		tipos: {
			primario: "Water",
			secundario: "Psychic"
		},
		atributos: {
			hp: 90,
			ataque: 65,
			defesa: 65,
			spAtaque: 40,
			spDefesa: 40,
			speed: 15
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/079.png",
			linkTipo1: "./img/types/Water.png",
			linkTipo2: "./img/types/Psychic.png"
		}
	}, {
		number: 79,
		nome: "Galarian Slowpoke",
		tipos: {
			primario: "Psychic",
			secundario: ""
		},
		atributos: {
			hp: 90,
			ataque: 65,
			defesa: 65,
			spAtaque: 40,
			spDefesa: 40,
			speed: 15
		},
		links: {
			linkBg: "./img/bg-types/Psychic-Types.jpg",
			linkImg: "./img/pokemons/079G.png",
			linkTipo1: "./img/types/Psychic.png",
			linkTipo2: ""
		}
	}, {
		number: 80,
		nome: "Slowbro",
		tipos: {
			primario: "Water",
			secundario: "Psychic"
		},
		atributos: {
			hp: 95,
			ataque: 75,
			defesa: 110,
			spAtaque: 100,
			spDefesa: 80,
			speed: 30
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/080.png",
			linkTipo1: "./img/types/Water.png",
			linkTipo2: "./img/types/Psychic.png"
		}
	}, {
		number: 80,
		nome: "Galarian Slowbro",
		tipos: {
			primario: "Poison",
			secundario: "Psychic"
		},
		atributos: {
			hp: 95,
			ataque: 100,
			defesa: 95,
			spAtaque: 100,
			spDefesa: 70,
			speed: 30
		},
		links: {
			linkBg: "./img/bg-types/Poison-Types.jpg",
			linkImg: "./img/pokemons/080G.png",
			linkTipo1: "./img/types/Poison.png",
			linkTipo2: "./img/types/Psychic.png"
		}
	}, {
		number: 80,
		nome: "Mega Slowbro",
		tipos: {
			primario: "Water",
			secundario: "Psychic"
		},
		atributos: {
			hp: 95,
			ataque: 75,
			defesa: 180,
			spAtaque: 130,
			spDefesa: 80,
			speed: 30
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/080M.png",
			linkTipo1: "./img/types/Water.png",
			linkTipo2: "./img/types/Psychic.png"
		}
	}, {
		number: 81,
		nome: "Magnemite",
		tipos: {
			primario: "Electric",
			secundario: "Steel"
		},
		atributos: {
			hp: 25,
			ataque: 35,
			defesa: 70,
			spAtaque: 95,
			spDefesa: 55,
			speed: 45
		},
		links: {
			linkBg: "./img/bg-types/Electric-Types.jpg",
			linkImg: "./img/pokemons/081.png",
			linkTipo1: "./img/types/Electric.png",
			linkTipo2: "./img/types/Steel.png"
		}
	}, {
		number: 82,
		nome: "Magneton",
		tipos: {
			primario: "Electric",
			secundario: "Steel"
		},
		atributos: {
			hp: 50,
			ataque: 60,
			defesa: 95,
			spAtaque: 120,
			spDefesa: 70,
			speed: 70
		},
		links: {
			linkBg: "./img/bg-types/Electric-Types.jpg",
			linkImg: "./img/pokemons/082.png",
			linkTipo1: "./img/types/Electric.png",
			linkTipo2: "./img/types/Steel.png"
		}
	}, {
		number: 83,
		nome: "Farfetch'd",
		tipos: {
			primario: "Normal",
			secundario: "Flying"
		},
		atributos: {
			hp: 52,
			ataque: 90,
			defesa: 55,
			spAtaque: 58,
			spDefesa: 62,
			speed: 60
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/083.png",
			linkTipo1: "./img/types/Normal.png",
			linkTipo2: "./img/types/Flying.png"
		}
	}, {
		number: 83,
		nome: "Galarian Farfetch'd",
		tipos: {
			primario: "Fighting",
			secundario: ""
		},
		atributos: {
			hp: 52,
			ataque: 95,
			defesa: 55,
			spAtaque: 58,
			spDefesa: 62,
			speed: 55
		},
		links: {
			linkBg: "./img/bg-types/Fighting-Types.jpg",
			linkImg: "./img/pokemons/083G.png",
			linkTipo1: "./img/types/Fighting.png",
			linkTipo2: ""
		}
	}, {
		number: 84,
		nome: "Doduo",
		tipos: {
			primario: "Normal",
			secundario: "Flying"
		},
		atributos: {
			hp: 35,
			ataque: 85,
			defesa: 45,
			spAtaque: 35,
			spDefesa: 35,
			speed: 75
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/084.png",
			linkTipo1: "./img/types/Normal.png",
			linkTipo2: "./img/types/Flying.png"
		}
	}, {
		number: 85,
		nome: "Dodrio",
		tipos: {
			primario: "Normal",
			secundario: "Flying"
		},
		atributos: {
			hp: 60,
			ataque: 110,
			defesa: 70,
			spAtaque: 60,
			spDefesa: 60,
			speed: 110
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/085.png",
			linkTipo1: "./img/types/Normal.png",
			linkTipo2: "./img/types/Flying.png"
		}
	}, {
		number: 86,
		nome: "Seel",
		tipos: {
			primario: "Water",
			secundario: ""
		},
		atributos: {
			hp: 65,
			ataque: 45,
			defesa: 55,
			spAtaque: 45,
			spDefesa: 70,
			speed: 45
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/086.png",
			linkTipo1: "./img/types/Water.png",
			linkTipo2: ""
		}
	}, {
		number: 87,
		nome: "Dewgong",
		tipos: {
			primario: "Water",
			secundario: "Ice"
		},
		atributos: {
			hp: 90,
			ataque: 70,
			defesa: 80,
			spAtaque: 70,
			spDefesa: 95,
			speed: 70
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/087.png",
			linkTipo1: "./img/types/Water.png",
			linkTipo2: "./img/types/Ice.png"
		}
	}, {
		number: 88,
		nome: "Grimer",
		tipos: {
			primario: "Poison",
			secundario: ""
		},
		atributos: {
			hp: 80,
			ataque: 80,
			defesa: 50,
			spAtaque: 40,
			spDefesa: 50,
			speed: 25
		},
		links: {
			linkBg: "./img/bg-types/Poison-Types.jpg",
			linkImg: "./img/pokemons/088.png",
			linkTipo1: "./img/types/Poison.png",
			linkTipo2: ""
		}
	}, {
		number: 88,
		nome: "Alolan Grimer",
		tipos: {
			primario: "Poison",
			secundario: "Dark"
		},
		atributos: {
			hp: 80,
			ataque: 80,
			defesa: 50,
			spAtaque: 40,
			spDefesa: 50,
			speed: 25
		},
		links: {
			linkBg: "./img/bg-types/Poison-Types.jpg",
			linkImg: "./img/pokemons/088A.png",
			linkTipo1: "./img/types/Poison.png",
			linkTipo2: "./img/types/Dark.png"
		}
	}, {
		number: 89,
		nome: "Muk",
		tipos: {
			primario: "Poison",
			secundario: ""
		},
		atributos: {
			hp: 105,
			ataque: 105,
			defesa: 75,
			spAtaque: 65,
			spDefesa: 100,
			speed: 50
		},
		links: {
			linkBg: "./img/bg-types/Poison-Types.jpg",
			linkImg: "./img/pokemons/089.png",
			linkTipo1: "./img/types/Poison.png",
			linkTipo2: ""
		}
	}, {
		number: 89,
		nome: "Alolan Muk",
		tipos: {
			primario: "Poison",
			secundario: "Dark"
		},
		atributos: {
			hp: 105,
			ataque: 105,
			defesa: 75,
			spAtaque: 65,
			spDefesa: 100,
			speed: 50
		},
		links: {
			linkBg: "./img/bg-types/Poison-Types.jpg",
			linkImg: "./img/pokemons/089A.png",
			linkTipo1: "./img/types/Poison.png",
			linkTipo2: "./img/types/Dark.png"
		}
	}, {
		number: 90,
		nome: "Shellder",
		tipos: {
			primario: "Water",
			secundario: ""
		},
		atributos: {
			hp: 30,
			ataque: 65,
			defesa: 100,
			spAtaque: 45,
			spDefesa: 25,
			speed: 40
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/090.png",
			linkTipo1: "./img/types/Water.png",
			linkTipo2: ""
		}
	}, {
		number: 91,
		nome: "Cloyster",
		tipos: {
			primario: "Water",
			secundario: "Ice"
		},
		atributos: {
			hp: 50,
			ataque: 95,
			defesa: 180,
			spAtaque: 85,
			spDefesa: 45,
			speed: 70
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/091.png",
			linkTipo1: "./img/types/Water.png",
			linkTipo2: "./img/types/Ice.png"
		}
	}, {
		number: 92,
		nome: "Gastly",
		tipos: {
			primario: "Ghost",
			secundario: "Poison"
		},
		atributos: {
			hp: 30,
			ataque: 35,
			defesa: 30,
			spAtaque: 100,
			spDefesa: 35,
			speed: 80
		},
		links: {
			linkBg: "./img/bg-types/Ghost-Types.jpg",
			linkImg: "./img/pokemons/092.png",
			linkTipo1: "./img/types/Ghost.png",
			linkTipo2: "./img/types/Poison.png"
		}
	}, {
		number: 93,
		nome: "Haunter",
		tipos: {
			primario: "Ghost",
			secundario: "Poison"
		},
		atributos: {
			hp: 45,
			ataque: 50,
			defesa: 45,
			spAtaque: 115,
			spDefesa: 55,
			speed: 95
		},
		links: {
			linkBg: "./img/bg-types/Ghost-Types.jpg",
			linkImg: "./img/pokemons/093.png",
			linkTipo1: "./img/types/Ghost.png",
			linkTipo2: "./img/types/Poison.png"
		}
	}, {
		number: 94,
		nome: "Gengar",
		tipos: {
			primario: "Ghost",
			secundario: "Poison"
		},
		atributos: {
			hp: 60,
			ataque: 65,
			defesa: 60,
			spAtaque: 130,
			spDefesa: 75,
			speed: 110
		},
		links: {
			linkBg: "./img/bg-types/Ghost-Types.jpg",
			linkImg: "./img/pokemons/094.png",
			linkTipo1: "./img/types/Ghost.png",
			linkTipo2: "./img/types/Poison.png"
		}
	}, {
		number: 94,
		nome: "GMax Gengar",
		tipos: {
			primario: "Ghost",
			secundario: "Poison"
		},
		atributos: {
			hp: 60,
			ataque: 65,
			defesa: 60,
			spAtaque: 130,
			spDefesa: 75,
			speed: 110
		},
		links: {
			linkBg: "./img/bg-types/Ghost-Types.jpg",
			linkImg: "./img/pokemons/094GMAX.png",
			linkTipo1: "./img/types/Ghost.png",
			linkTipo2: "./img/types/Poison.png"
		}
	}, {
		number: 94,
		nome: "Mega Gengar",
		tipos: {
			primario: "Ghost",
			secundario: "Poison"
		},
		atributos: {
			hp: 60,
			ataque: 65,
			defesa: 80,
			spAtaque: 170,
			spDefesa: 95,
			speed: 130
		},
		links: {
			linkBg: "./img/bg-types/Ghost-Types.jpg",
			linkImg: "./img/pokemons/094M.png",
			linkTipo1: "./img/types/Ghost.png",
			linkTipo2: "./img/types/Poison.png"
		}
	}, {
		number: 95,
		nome: "Onix",
		tipos: {
			primario: "Rock",
			secundario: "Ground"
		},
		atributos: {
			hp: 35,
			ataque: 45,
			defesa: 160,
			spAtaque: 30,
			spDefesa: 45,
			speed: 70
		},
		links: {
			linkBg: "./img/bg-types/Rock-Types.jpg",
			linkImg: "./img/pokemons/095.png",
			linkTipo1: "./img/types/Rock.png",
			linkTipo2: "./img/types/Ground.png"
		}
	}, {
		number: 96,
		nome: "Drowzee",
		tipos: {
			primario: "Psychic",
			secundario: ""
		},
		atributos: {
			hp: 60,
			ataque: 48,
			defesa: 45,
			spAtaque: 43,
			spDefesa: 90,
			speed: 42
		},
		links: {
			linkBg: "./img/bg-types/Psychic-Types.jpg",
			linkImg: "./img/pokemons/096.png",
			linkTipo1: "./img/types/Psychic.png",
			linkTipo2: ""
		}
	}, {
		number: 97,
		nome: "Hypno",
		tipos: {
			primario: "Psychic",
			secundario: ""
		},
		atributos: {
			hp: 85,
			ataque: 73,
			defesa: 70,
			spAtaque: 73,
			spDefesa: 115,
			speed: 67
		},
		links: {
			linkBg: "./img/bg-types/Psychic-Types.jpg",
			linkImg: "./img/pokemons/097.png",
			linkTipo1: "./img/types/Psychic.png",
			linkTipo2: ""
		}
	}, {
		number: 98,
		nome: "Krabby",
		tipos: {
			primario: "Water",
			secundario: ""
		},
		atributos: {
			hp: 30,
			ataque: 105,
			defesa: 90,
			spAtaque: 25,
			spDefesa: 25,
			speed: 50
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/098.png",
			linkTipo1: "./img/types/Water.png",
			linkTipo2: ""
		}
	}, {
		number: 99,
		nome: "Kingler",
		tipos: {
			primario: "Water",
			secundario: ""
		},
		atributos: {
			hp: 55,
			ataque: 130,
			defesa: 115,
			spAtaque: 50,
			spDefesa: 50,
			speed: 75
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/099.png",
			linkTipo1: "./img/types/Water.png",
			linkTipo2: ""
		}
	}, {
		number: 99,
		nome: "GMax Kingler",
		tipos: {
			primario: "Water",
			secundario: ""
		},
		atributos: {
			hp: 55,
			ataque: 130,
			defesa: 115,
			spAtaque: 50,
			spDefesa: 50,
			speed: 75
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/099GMax.png",
			linkTipo1: "./img/types/Water.png",
			linkTipo2: ""
		}
	}, {
		number: 100,
		nome: "Voltorb",
		tipos: {
			primario: "Electric",
			secundario: ""
		},
		atributos: {
			hp: 40,
			ataque: 30,
			defesa: 50,
			spAtaque: 55,
			spDefesa: 55,
			speed: 100
		},
		links: {
			linkBg: "./img/bg-types/Electric-Types.jpg",
			linkImg: "./img/pokemons/100.png",
			linkTipo1: "./img/types/Electric.png",
			linkTipo2: ""
		}
	}, {
		number: 100,
		nome: "Hisuian Voltorb",
		tipos: {
			primario: "Electric",
			secundario: "Grass"
		},
		atributos: {
			hp: 40,
			ataque: 30,
			defesa: 50,
			spAtaque: 55,
			spDefesa: 55,
			speed: 100
		},
		links: {
			linkBg: "./img/bg-types/Electric-Types.jpg",
			linkImg: "./img/pokemons/100H.png",
			linkTipo1: "./img/types/Electric.png",
			linkTipo2: "./img/types/Grass.png"
		}
	}, {
		number: 101,
		nome: "Electrode",
		tipos: {
			primario: "Electric",
			secundario: ""
		},
		atributos: {
			hp: 60,
			ataque: 50,
			defesa: 70,
			spAtaque: 80,
			spDefesa: 80,
			speed: 150
		},
		links: {
			linkBg: "./img/bg-types/Electric-Types.jpg",
			linkImg: "./img/pokemons/101.png",
			linkTipo1: "./img/types/Electric.png",
			linkTipo2: ""
		}
	}, {
		number: 101,
		nome: "Hisuian Electrode",
		tipos: {
			primario: "Electric",
			secundario: "Grass"
		},
		atributos: {
			hp: 60,
			ataque: 50,
			defesa: 70,
			spAtaque: 80,
			spDefesa: 80,
			speed: 150
		},
		links: {
			linkBg: "./img/bg-types/Electric-Types.jpg",
			linkImg: "./img/pokemons/101H.png",
			linkTipo1: "./img/types/Electric.png",
			linkTipo2: "./img/types/Grass.png"
		}
	}, {
		number: 102,
		nome: "Exeggcute",
		tipos: {
			primario: "Grass",
			secundario: "Psychic"
		},
		atributos: {
			hp: 60,
			ataque: 40,
			defesa: 80,
			spAtaque: 60,
			spDefesa: 45,
			speed: 40
		},
		links: {
			linkBg: "./img/bg-types/Grass-Types.jpg",
			linkImg: "./img/pokemons/102.png",
			linkTipo1: "./img/types/Grass.png",
			linkTipo2: "./img/types/Psychic.png"
		}
	}, {
		number: 103,
		nome: "Exeggutor",
		tipos: {
			primario: "Grass",
			secundario: "Psychic"
		},
		atributos: {
			hp: 95,
			ataque: 95,
			defesa: 85,
			spAtaque: 125,
			spDefesa: 75,
			speed: 55
		},
		links: {
			linkBg: "./img/bg-types/Grass-Types.jpg",
			linkImg: "./img/pokemons/103.png",
			linkTipo1: "./img/types/Grass.png",
			linkTipo2: "./img/types/Psychic.png"
		}
	}, {
		number: 103,
		nome: "Alolan Exeggutor",
		tipos: {
			primario: "Grass",
			secundario: "Dragon"
		},
		atributos: {
			hp: 95,
			ataque: 105,
			defesa: 85,
			spAtaque: 125,
			spDefesa: 75,
			speed: 45
		},
		links: {
			linkBg: "./img/bg-types/Grass-Types.jpg",
			linkImg: "./img/pokemons/103A.png",
			linkTipo1: "./img/types/Grass.png",
			linkTipo2: "./img/types/Dragon.png"
		}
	}, {
		number: 104,
		nome: "Cubone",
		tipos: {
			primario: "Ground",
			secundario: ""
		},
		atributos: {
			hp: 50,
			ataque: 50,
			defesa: 95,
			spAtaque: 40,
			spDefesa: 50,
			speed: 35
		},
		links: {
			linkBg: "./img/bg-types/Ground-Types.jpg",
			linkImg: "./img/pokemons/104.png",
			linkTipo1: "./img/types/Ground.png",
			linkTipo2: ""
		}
	}, {
		number: 105,
		nome: "Marowak",
		tipos: {
			primario: "Ground",
			secundario: ""
		},
		atributos: {
			hp: 60,
			ataque: 80,
			defesa: 110,
			spAtaque: 50,
			spDefesa: 80,
			speed: 45
		},
		links: {
			linkBg: "./img/bg-types/Ground-Types.jpg",
			linkImg: "./img/pokemons/105.png",
			linkTipo1: "./img/types/Ground.png",
			linkTipo2: ""
		}
	}, {
		number: 105,
		nome: "Alolan Marowak",
		tipos: {
			primario: "Fire",
			secundario: "Ghost"
		},
		atributos: {
			hp: 60,
			ataque: 80,
			defesa: 110,
			spAtaque: 50,
			spDefesa: 80,
			speed: 45
		},
		links: {
			linkBg: "./img/bg-types/Fire-Types.jpg",
			linkImg: "./img/pokemons/105A.png",
			linkTipo1: "./img/types/Fire.png",
			linkTipo2: "./img/types/Ghost.png"
		}
	}, {
		number: 106,
		nome: "Hitmonlee",
		tipos: {
			primario: "Fighting",
			secundario: ""
		},
		atributos: {
			hp: 50,
			ataque: 120,
			defesa: 53,
			spAtaque: 35,
			spDefesa: 110,
			speed: 87
		},
		links: {
			linkBg: "./img/bg-types/Fighting-Types.jpg",
			linkImg: "./img/pokemons/106.png",
			linkTipo1: "./img/types/Fighting.png",
			linkTipo2: ""
		}
	}, {
		number: 107,
		nome: "Hitmonchan",
		tipos: {
			primario: "Fighting",
			secundario: ""
		},
		atributos: {
			hp: 50,
			ataque: 105,
			defesa: 79,
			spAtaque: 35,
			spDefesa: 110,
			speed: 76
		},
		links: {
			linkBg: "./img/bg-types/Fighting-Types.jpg",
			linkImg: "./img/pokemons/107.png",
			linkTipo1: "./img/types/Fighting.png",
			linkTipo2: ""
		}
	}, {
		number: 108,
		nome: "Lickitung",
		tipos: {
			primario: "Normal",
			secundario: ""
		},
		atributos: {
			hp: 90,
			ataque: 55,
			defesa: 75,
			spAtaque: 60,
			spDefesa: 75,
			speed: 30
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/108.png",
			linkTipo1: "./img/types/Normal.png",
			linkTipo2: ""
		}
	}, {
		number: 109,
		nome: "Koffing",
		tipos: {
			primario: "Poison",
			secundario: ""
		},
		atributos: {
			hp: 40,
			ataque: 65,
			defesa: 95,
			spAtaque: 60,
			spDefesa: 45,
			speed: 35
		},
		links: {
			linkBg: "./img/bg-types/Poison-Types.jpg",
			linkImg: "./img/pokemons/109.png",
			linkTipo1: "./img/types/Poison.png",
			linkTipo2: ""
		}
	}, {
		number: 110,
		nome: "Weezing",
		tipos: {
			primario: "Poison",
			secundario: ""
		},
		atributos: {
			hp: 65,
			ataque: 90,
			defesa: 120,
			spAtaque: 85,
			spDefesa: 70,
			speed: 60
		},
		links: {
			linkBg: "./img/bg-types/Poison-Types.jpg",
			linkImg: "./img/pokemons/110.png",
			linkTipo1: "./img/types/Poison.png",
			linkTipo2: ""
		}
	}, {
		number: 110,
		nome: "Galarian Weezing",
		tipos: {
			primario: "Poison",
			secundario: "Fairy"
		},
		atributos: {
			hp: 65,
			ataque: 90,
			defesa: 120,
			spAtaque: 85,
			spDefesa: 70,
			speed: 60
		},
		links: {
			linkBg: "./img/bg-types/Poison-Types.jpg",
			linkImg: "./img/pokemons/110G.png",
			linkTipo1: "./img/types/Poison.png",
			linkTipo2: "./img/types/Fairy.png"
		}
	}, {
		number: 111,
		nome: "Rhyhorn",
		tipos: {
			primario: "Ground",
			secundario: "Rock"
		},
		atributos: {
			hp: 80,
			ataque: 85,
			defesa: 95,
			spAtaque: 30,
			spDefesa: 30,
			speed: 25
		},
		links: {
			linkBg: "./img/bg-types/Ground-Types.jpg",
			linkImg: "./img/pokemons/111.png",
			linkTipo1: "./img/types/Ground.png",
			linkTipo2: "./img/types/Rock.png"
		}
	}, {
		number: 112,
		nome: "Rhydon",
		tipos: {
			primario: "Ground",
			secundario: "Rock"
		},
		atributos: {
			hp: 105,
			ataque: 130,
			defesa: 120,
			spAtaque: 45,
			spDefesa: 45,
			speed: 40
		},
		links: {
			linkBg: "./img/bg-types/Ground-Types.jpg",
			linkImg: "./img/pokemons/112.png",
			linkTipo1: "./img/types/Ground.png",
			linkTipo2: "./img/types/Rock.png"
		}
	}, {
		number: 113,
		nome: "Chansey",
		tipos: {
			primario: "Normal",
			secundario: ""
		},
		atributos: {
			hp: 250,
			ataque: 5,
			defesa: 5,
			spAtaque: 35,
			spDefesa: 105,
			speed: 50
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/113.png",
			linkTipo1: "./img/types/Normal.png",
			linkTipo2: ""
		}
	}, {
		number: 114,
		nome: "Tangela",
		tipos: {
			primario: "Grass",
			secundario: ""
		},
		atributos: {
			hp: 65,
			ataque: 55,
			defesa: 115,
			spAtaque: 100,
			spDefesa: 40,
			speed: 60
		},
		links: {
			linkBg: "./img/bg-types/Grass-Types.jpg",
			linkImg: "./img/pokemons/114.png",
			linkTipo1: "./img/types/Grass.png",
			linkTipo2: ""
		}
	}, {
		number: 115,
		nome: "Kangaskhan",
		tipos: {
			primario: "Normal",
			secundario: ""
		},
		atributos: {
			hp: 105,
			ataque: 95,
			defesa: 80,
			spAtaque: 40,
			spDefesa: 80,
			speed: 90
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/115.png",
			linkTipo1: "./img/types/Normal.png",
			linkTipo2: ""
		}
	}, {
		number: 115,
		nome: "Mega Kangaskhan",
		tipos: {
			primario: "Normal",
			secundario: ""
		},
		atributos: {
			hp: 105,
			ataque: 125,
			defesa: 100,
			spAtaque: 60,
			spDefesa: 100,
			speed: 100
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/115M.png",
			linkTipo1: "./img/types/Normal.png",
			linkTipo2: ""
		}
	}, {
		number: 116,
		nome: "Horsea",
		tipos: {
			primario: "Water",
			secundario: ""
		},
		atributos: {
			hp: 30,
			ataque: 40,
			defesa: 70,
			spAtaque: 70,
			spDefesa: 25,
			speed: 60
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/116.png",
			linkTipo1: "./img/types/Water.png",
			linkTipo2: ""
		}
	}, {
		number: 117,
		nome: "Seadra",
		tipos: {
			primario: "Water",
			secundario: ""
		},
		atributos: {
			hp: 55,
			ataque: 65,
			defesa: 95,
			spAtaque: 95,
			spDefesa: 45,
			speed: 85
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/117.png",
			linkTipo1: "./img/types/Water.png",
			linkTipo2: ""
		}
	}, {
		number: 118,
		nome: "Goldeen",
		tipos: {
			primario: "Water",
			secundario: ""
		},
		atributos: {
			hp: 45,
			ataque: 67,
			defesa: 60,
			spAtaque: 35,
			spDefesa: 50,
			speed: 63
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/118.png",
			linkTipo1: "./img/types/Water.png",
			linkTipo2: ""
		}
	}, {
		number: 119,
		nome: "Seaking",
		tipos: {
			primario: "Water",
			secundario: ""
		},
		atributos: {
			hp: 80,
			ataque: 92,
			defesa: 65,
			spAtaque: 65,
			spDefesa: 80,
			speed: 68
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/119.png",
			linkTipo1: "./img/types/Water.png",
			linkTipo2: ""
		}
	}, {
		number: 120,
		nome: "Staryu",
		tipos: {
			primario: "Water",
			secundario: ""
		},
		atributos: {
			hp: 30,
			ataque: 45,
			defesa: 55,
			spAtaque: 70,
			spDefesa: 55,
			speed: 85
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/120.png",
			linkTipo1: "./img/types/Water.png",
			linkTipo2: ""
		}
	}, {
		number: 121,
		nome: "Starmie",
		tipos: {
			primario: "Water",
			secundario: "Psychic"
		},
		atributos: {
			hp: 60,
			ataque: 75,
			defesa: 85,
			spAtaque: 100,
			spDefesa: 85,
			speed: 115
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/121.png",
			linkTipo1: "./img/types/Water.png",
			linkTipo2: "./img/types/Psychic.png"
		}
	}, {
		number: 122,
		nome: "Mr. Mime",
		tipos: {
			primario: "Psychic",
			secundario: "Fairy"
		},
		atributos: {
			hp: 40,
			ataque: 45,
			defesa: 65,
			spAtaque: 100,
			spDefesa: 120,
			speed: 90
		},
		links: {
			linkBg: "./img/bg-types/Psychic-Types.jpg",
			linkImg: "./img/pokemons/122.png",
			linkTipo1: "./img/types/Psychic.png",
			linkTipo2: "./img/types/Fairy.png"
		}
	}, {
		number: 122,
		nome: "Galarian Mr. Mime",
		tipos: {
			primario: "Ice",
			secundario: "Psychic"
		},
		atributos: {
			hp: 50,
			ataque: 65,
			defesa: 65,
			spAtaque: 90,
			spDefesa: 90,
			speed: 100
		},
		links: {
			linkBg: "./img/bg-types/Ice-Types.jpg",
			linkImg: "./img/pokemons/122G.png",
			linkTipo1: "./img/types/Ice.png",
			linkTipo2: "./img/types/Psychic.png"
		}
	}, {
		number: 123,
		nome: "Scyther",
		tipos: {
			primario: "Bug",
			secundario: "Flying"
		},
		atributos: {
			hp: 70,
			ataque: 110,
			defesa: 80,
			spAtaque: 55,
			spDefesa: 80,
			speed: 105
		},
		links: {
			linkBg: "./img/bg-types/Bug-Types.jpg",
			linkImg: "./img/pokemons/123.png",
			linkTipo1: "./img/types/Bug.png",
			linkTipo2: "./img/types/Flying.png"
		}
	}, {
		number: 124,
		nome: "Jynx",
		tipos: {
			primario: "Ice",
			secundario: "Psychic"
		},
		atributos: {
			hp: 65,
			ataque: 50,
			defesa: 35,
			spAtaque: 115,
			spDefesa: 95,
			speed: 95
		},
		links: {
			linkBg: "./img/bg-types/Ice-Types.jpg",
			linkImg: "./img/pokemons/124.png",
			linkTipo1: "./img/types/Ice.png",
			linkTipo2: "./img/types/Psychic.png"
		}
	}, {
		number: 125,
		nome: "Electabuzz",
		tipos: {
			primario: "Electric",
			secundario: ""
		},
		atributos: {
			hp: 65,
			ataque: 83,
			defesa: 57,
			spAtaque: 95,
			spDefesa: 85,
			speed: 105
		},
		links: {
			linkBg: "./img/bg-types/Electric-Types.jpg",
			linkImg: "./img/pokemons/125.png",
			linkTipo1: "./img/types/Electric.png",
			linkTipo2: ""
		}
	}, {
		number: 126,
		nome: "Magmar",
		tipos: {
			primario: "Fire",
			secundario: ""
		},
		atributos: {
			hp: 65,
			ataque: 95,
			defesa: 57,
			spAtaque: 100,
			spDefesa: 85,
			speed: 93
		},
		links: {
			linkBg: "./img/bg-types/Fire-Types.jpg",
			linkImg: "./img/pokemons/126.png",
			linkTipo1: "./img/types/Fire.png",
			linkTipo2: ""
		}
	}, {
		number: 127,
		nome: "Pinsir",
		tipos: {
			primario: "Bug",
			secundario: ""
		},
		atributos: {
			hp: 65,
			ataque: 125,
			defesa: 100,
			spAtaque: 55,
			spDefesa: 70,
			speed: 85
		},
		links: {
			linkBg: "./img/bg-types/Bug-Types.jpg",
			linkImg: "./img/pokemons/127.png",
			linkTipo1: "./img/types/Bug.png",
			linkTipo2: ""
		}
	}, {
		number: 127,
		nome: "Mega Pinsir",
		tipos: {
			primario: "Bug",
			secundario: "Flying"
		},
		atributos: {
			hp: 65,
			ataque: 155,
			defesa: 120,
			spAtaque: 65,
			spDefesa: 90,
			speed: 105
		},
		links: {
			linkBg: "./img/bg-types/Bug-Types.jpg",
			linkImg: "./img/pokemons/127M.png",
			linkTipo1: "./img/types/Bug.png",
			linkTipo2: "./img/types/Flying.png"
		}
	}, {
		number: 128,
		nome: "Tauros",
		tipos: {
			primario: "Normal",
			secundario: ""
		},
		atributos: {
			hp: 75,
			ataque: 100,
			defesa: 95,
			spAtaque: 40,
			spDefesa: 70,
			speed: 110
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/128.png",
			linkTipo1: "./img/types/Normal.png",
			linkTipo2: ""
		}
	}, {
		number: 129,
		nome: "Magikarp",
		tipos: {
			primario: "Water",
			secundario: ""
		},
		atributos: {
			hp: 20,
			ataque: 10,
			defesa: 55,
			spAtaque: 15,
			spDefesa: 20,
			speed: 80
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/129.png",
			linkTipo1: "./img/types/Water.png",
			linkTipo2: ""
		}
	}, {
		number: 130,
		nome: "Gyarados",
		tipos: {
			primario: "Water",
			secundario: "Flying"
		},
		atributos: {
			hp: 95,
			ataque: 125,
			defesa: 79,
			spAtaque: 60,
			spDefesa: 100,
			speed: 81
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/130.png",
			linkTipo1: "./img/types/Water.png",
			linkTipo2: "./img/types/Flying.png"
		}
	}, {
		number: 130,
		nome: "Mega Gyarados",
		tipos: {
			primario: "Water",
			secundario: "Dark"
		},
		atributos: {
			hp: 95,
			ataque: 155,
			defesa: 109,
			spAtaque: 70,
			spDefesa: 130,
			speed: 81
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/130M.png",
			linkTipo1: "./img/types/Water.png",
			linkTipo2: "./img/types/Dark.png"
		}
	}, {
		number: 131,
		nome: "Lapras",
		tipos: {
			primario: "Water",
			secundario: "Ice"
		},
		atributos: {
			hp: 130,
			ataque: 85,
			defesa: 80,
			spAtaque: 85,
			spDefesa: 95,
			speed: 60
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/131.png",
			linkTipo1: "./img/types/Water.png",
			linkTipo2: "./img/types/Ice.png"
		}
	}, {
		number: 131,
		nome: "GMax Lapras",
		tipos: {
			primario: "Water",
			secundario: "Ice"
		},
		atributos: {
			hp: 130,
			ataque: 85,
			defesa: 80,
			spAtaque: 85,
			spDefesa: 95,
			speed: 60
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/131GMAX.png",
			linkTipo1: "./img/types/Water.png",
			linkTipo2: "./img/types/Ice.png"
		}
	}, {
		number: 132,
		nome: "Ditto",
		tipos: {
			primario: "Normal",
			secundario: ""
		},
		atributos: {
			hp: 48,
			ataque: 48,
			defesa: 48,
			spAtaque: 48,
			spDefesa: 48,
			speed: 48
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/132.png",
			linkTipo1: "./img/types/Normal.png",
			linkTipo2: ""
		}
	}, {
		number: 133,
		nome: "Eevee",
		tipos: {
			primario: "Normal",
			secundario: ""
		},
		atributos: {
			hp: 55,
			ataque: 55,
			defesa: 50,
			spAtaque: 45,
			spDefesa: 65,
			speed: 55
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/133.png",
			linkTipo1: "./img/types/Normal.png",
			linkTipo2: ""
		}
	}, {
		number: 133,
		nome: "GMax Eevee",
		tipos: {
			primario: "Normal",
			secundario: ""
		},
		atributos: {
			hp: 55,
			ataque: 55,
			defesa: 50,
			spAtaque: 45,
			spDefesa: 65,
			speed: 55
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/133GMAX.png",
			linkTipo1: "./img/types/Normal.png",
			linkTipo2: ""
		}
	}, {
		number: 133,
		nome: "Partner Eevee",
		tipos: {
			primario: "Normal",
			secundario: ""
		},
		atributos: {
			hp: 65,
			ataque: 75,
			defesa: 70,
			spAtaque: 65,
			spDefesa: 85,
			speed: 75
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/133LG.png",
			linkTipo1: "./img/types/Normal.png",
			linkTipo2: ""
		}
	}, {
		number: 134,
		nome: "Vaporeon",
		tipos: {
			primario: "Water",
			secundario: ""
		},
		atributos: {
			hp: 130,
			ataque: 65,
			defesa: 60,
			spAtaque: 110,
			spDefesa: 95,
			speed: 65
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/134.png",
			linkTipo1: "./img/types/Water.png",
			linkTipo2: ""
		}
	}, {
		number: 135,
		nome: "Jolteon",
		tipos: {
			primario: "Electric",
			secundario: ""
		},
		atributos: {
			hp: 65,
			ataque: 65,
			defesa: 60,
			spAtaque: 110,
			spDefesa: 95,
			speed: 130
		},
		links: {
			linkBg: "./img/bg-types/Electric-Types.jpg",
			linkImg: "./img/pokemons/135.png",
			linkTipo1: "./img/types/Electric.png",
			linkTipo2: ""
		}
	}, {
		number: 136,
		nome: "Flareon",
		tipos: {
			primario: "Fire",
			secundario: ""
		},
		atributos: {
			hp: 65,
			ataque: 130,
			defesa: 60,
			spAtaque: 95,
			spDefesa: 110,
			speed: 65
		},
		links: {
			linkBg: "./img/bg-types/Fire-Types.jpg",
			linkImg: "./img/pokemons/136.png",
			linkTipo1: "./img/types/Fire.png",
			linkTipo2: ""
		}
	}, {
		number: 137,
		nome: "Porygon",
		tipos: {
			primario: "Normal",
			secundario: ""
		},
		atributos: {
			hp: 65,
			ataque: 60,
			defesa: 70,
			spAtaque: 85,
			spDefesa: 75,
			speed: 40
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/137.png",
			linkTipo1: "./img/types/Normal.png",
			linkTipo2: ""
		}
	}, {
		number: 138,
		nome: "Omanyte",
		tipos: {
			primario: "Rock",
			secundario: "Water"
		},
		atributos: {
			hp: 35,
			ataque: 40,
			defesa: 100,
			spAtaque: 90,
			spDefesa: 55,
			speed: 35
		},
		links: {
			linkBg: "./img/bg-types/Rock-Types.jpg",
			linkImg: "./img/pokemons/138.png",
			linkTipo1: "./img/types/Rock.png",
			linkTipo2: "./img/types/Water.png"
		}
	}, {
		number: 139,
		nome: "Omastar",
		tipos: {
			primario: "Rock",
			secundario: "Water"
		},
		atributos: {
			hp: 70,
			ataque: 60,
			defesa: 125,
			spAtaque: 115,
			spDefesa: 70,
			speed: 55
		},
		links: {
			linkBg: "./img/bg-types/Rock-Types.jpg",
			linkImg: "./img/pokemons/139.png",
			linkTipo1: "./img/types/Rock.png",
			linkTipo2: "./img/types/Water.png"
		}
	}, {
		number: 140,
		nome: "Kabuto",
		tipos: {
			primario: "Rock",
			secundario: "Water"
		},
		atributos: {
			hp: 30,
			ataque: 80,
			defesa: 90,
			spAtaque: 55,
			spDefesa: 45,
			speed: 55
		},
		links: {
			linkBg: "./img/bg-types/Rock-Types.jpg",
			linkImg: "./img/pokemons/140.png",
			linkTipo1: "./img/types/Rock.png",
			linkTipo2: "./img/types/Water.png"
		}
	}, {
		number: 141,
		nome: "Kabutops",
		tipos: {
			primario: "Rock",
			secundario: "Water"
		},
		atributos: {
			hp: 60,
			ataque: 115,
			defesa: 105,
			spAtaque: 65,
			spDefesa: 70,
			speed: 80
		},
		links: {
			linkBg: "./img/bg-types/Rock-Types.jpg",
			linkImg: "./img/pokemons/141.png",
			linkTipo1: "./img/types/Rock.png",
			linkTipo2: "./img/types/Water.png"
		}
	}, {
		number: 142,
		nome: "Aerodactyl",
		tipos: {
			primario: "Rock",
			secundario: "Flying"
		},
		atributos: {
			hp: 80,
			ataque: 105,
			defesa: 65,
			spAtaque: 60,
			spDefesa: 75,
			speed: 130
		},
		links: {
			linkBg: "./img/bg-types/Rock-Types.jpg",
			linkImg: "./img/pokemons/142.png",
			linkTipo1: "./img/types/Rock.png",
			linkTipo2: "./img/types/Flying.png"
		}
	}, {
		number: 142,
		nome: "Mega Aerodactyl",
		tipos: {
			primario: "Rock",
			secundario: "Flying"
		},
		atributos: {
			hp: 80,
			ataque: 135,
			defesa: 85,
			spAtaque: 70,
			spDefesa: 95,
			speed: 150
		},
		links: {
			linkBg: "./img/bg-types/Rock-Types.jpg",
			linkImg: "./img/pokemons/142M.png",
			linkTipo1: "./img/types/Rock.png",
			linkTipo2: "./img/types/Flying.png"
		}
	}, {
		number: 143,
		nome: "Snorlax",
		tipos: {
			primario: "Normal",
			secundario: ""
		},
		atributos: {
			hp: 160,
			ataque: 110,
			defesa: 65,
			spAtaque: 65,
			spDefesa: 110,
			speed: 30
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/143.png",
			linkTipo1: "./img/types/Normal.png",
			linkTipo2: ""
		}
	}, {
		number: 143,
		nome: "GMax Snorlax",
		tipos: {
			primario: "Normal",
			secundario: ""
		},
		atributos: {
			hp: 160,
			ataque: 110,
			defesa: 65,
			spAtaque: 65,
			spDefesa: 110,
			speed: 30
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/143GMAX.png",
			linkTipo1: "./img/types/Normal.png",
			linkTipo2: ""
		}
	}, {
		number: 144,
		nome: "Articuno",
		tipos: {
			primario: "Ice",
			secundario: "Flying"
		},
		atributos: {
			hp: 90,
			ataque: 85,
			defesa: 100,
			spAtaque: 95,
			spDefesa: 125,
			speed: 85
		},
		links: {
			linkBg: "./img/bg-types/Ice-Types.jpg",
			linkImg: "./img/pokemons/144.png",
			linkTipo1: "./img/types/Ice.png",
			linkTipo2: "./img/types/Flying.png"
		}
	}, {
		number: 144,
		nome: "Galarian Articuno",
		tipos: {
			primario: "Psychic",
			secundario: "Flying"
		},
		atributos: {
			hp: 90,
			ataque: 85,
			defesa: 85,
			spAtaque: 125,
			spDefesa: 100,
			speed: 95
		},
		links: {
			linkBg: "./img/bg-types/Psychic-Types.jpg",
			linkImg: "./img/pokemons/144G.png",
			linkTipo1: "./img/types/Psychic.png",
			linkTipo2: "./img/types/Flying.png"
		}
	}, {
		number: 145,
		nome: "Zapdos",
		tipos: {
			primario: "Electric",
			secundario: "Flying"
		},
		atributos: {
			hp: 90,
			ataque: 90,
			defesa: 85,
			spAtaque: 125,
			spDefesa: 90,
			speed: 100
		},
		links: {
			linkBg: "./img/bg-types/Electric-Types.jpg",
			linkImg: "./img/pokemons/145.png",
			linkTipo1: "./img/types/Electric.png",
			linkTipo2: "./img/types/Flying.png"
		}
	}, {
		number: 145,
		nome: "Galarian Zapdos",
		tipos: {
			primario: "Fighting",
			secundario: "Flying"
		},
		atributos: {
			hp: 90,
			ataque: 125,
			defesa: 90,
			spAtaque: 85,
			spDefesa: 90,
			speed: 100
		},
		links: {
			linkBg: "./img/bg-types/Fighting-Types.jpg",
			linkImg: "./img/pokemons/145G.png",
			linkTipo1: "./img/types/Fighting.png",
			linkTipo2: "./img/types/Flying.png"
		}
	}, {
		number: 146,
		nome: "Moltres",
		tipos: {
			primario: "Fire",
			secundario: "Flying"
		},
		atributos: {
			hp: 90,
			ataque: 100,
			defesa: 90,
			spAtaque: 125,
			spDefesa: 85,
			speed: 90
		},
		links: {
			linkBg: "./img/bg-types/Fire-Types.jpg",
			linkImg: "./img/pokemons/146.png",
			linkTipo1: "./img/types/Fire.png",
			linkTipo2: "./img/types/Flying.png"
		}
	}, {
		number: 146,
		nome: "Galarian Moltres",
		tipos: {
			primario: "Dark",
			secundario: "Flying"
		},
		atributos: {
			hp: 90,
			ataque: 85,
			defesa: 90,
			spAtaque: 100,
			spDefesa: 125,
			speed: 90
		},
		links: {
			linkBg: "./img/bg-types/Dark-Types.jpg",
			linkImg: "./img/pokemons/146G.png",
			linkTipo1: "./img/types/Dark.png",
			linkTipo2: "./img/types/Flying.png"
		}
	}, {
		number: 147,
		nome: "Dratini",
		tipos: {
			primario: "Dragon",
			secundario: ""
		},
		atributos: {
			hp: 41,
			ataque: 64,
			defesa: 45,
			spAtaque: 50,
			spDefesa: 50,
			speed: 50
		},
		links: {
			linkBg: "./img/bg-types/Dragon-Types.jpg",
			linkImg: "./img/pokemons/147.png",
			linkTipo1: "./img/types/Dragon.png",
			linkTipo2: ""
		}
	}, {
		number: 148,
		nome: "Dragonair",
		tipos: {
			primario: "Dragon",
			secundario: ""
		},
		atributos: {
			hp: 61,
			ataque: 84,
			defesa: 65,
			spAtaque: 70,
			spDefesa: 70,
			speed: 70
		},
		links: {
			linkBg: "./img/bg-types/Dragon-Types.jpg",
			linkImg: "./img/pokemons/148.png",
			linkTipo1: "./img/types/Dragon.png",
			linkTipo2: ""
		}
	}, {
		number: 149,
		nome: "Dragonite",
		tipos: {
			primario: "Dragon",
			secundario: "Flying"
		},
		atributos: {
			hp: 91,
			ataque: 134,
			defesa: 95,
			spAtaque: 100,
			spDefesa: 100,
			speed: 80
		},
		links: {
			linkBg: "./img/bg-types/Dragon-Types.jpg",
			linkImg: "./img/pokemons/149.png",
			linkTipo1: "./img/types/Dragon.png",
			linkTipo2: "./img/types/Flying.png"
		}
	}, {
		number: 150,
		nome: "Mewtwo",
		tipos: {
			primario: "Psychic",
			secundario: ""
		},
		atributos: {
			hp: 106,
			ataque: 110,
			defesa: 90,
			spAtaque: 154,
			spDefesa: 90,
			speed: 130
		},
		links: {
			linkBg: "./img/bg-types/Psychic-Types.jpg",
			linkImg: "./img/pokemons/150.png",
			linkTipo1: "./img/types/Psychic.png",
			linkTipo2: ""
		}
	}, {
		number: 150,
		nome: "Mega Mewtwo X",
		tipos: {
			primario: "Psychic",
			secundario: "Fighting"
		},
		atributos: {
			hp: 106,
			ataque: 190,
			defesa: 100,
			spAtaque: 154,
			spDefesa: 100,
			speed: 130
		},
		links: {
			linkBg: "./img/bg-types/Psychic-Types.jpg",
			linkImg: "./img/pokemons/150M-X.png",
			linkTipo1: "./img/types/Psychic.png",
			linkTipo2: "./img/types/Fighting.png"
		}
	}, {
		number: 150,
		nome: "Mega Mewtwo Y",
		tipos: {
			primario: "Psychic",
			secundario: ""
		},
		atributos: {
			hp: 106,
			ataque: 150,
			defesa: 70,
			spAtaque: 194,
			spDefesa: 120,
			speed: 140
		},
		links: {
			linkBg: "./img/bg-types/Psychic-Types.jpg",
			linkImg: "./img/pokemons/150M-Y.png",
			linkTipo1: "./img/types/Psychic.png",
			linkTipo2: ""
		}
	}, {
		number: 151,
		nome: "Mew",
		tipos: {
			primario: "Psychic",
			secundario: ""
		},
		atributos: {
			hp: 100,
			ataque: 100,
			defesa: 100,
			spAtaque: 100,
			spDefesa: 100,
			speed: 100
		},
		links: {
			linkBg: "./img/bg-types/Psychic-Types.jpg",
			linkImg: "./img/pokemons/151.png",
			linkTipo1: "./img/types/Psychic.png",
			linkTipo2: ""
		}
	}
	];

	return data;
}