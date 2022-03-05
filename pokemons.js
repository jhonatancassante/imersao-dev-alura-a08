function pokemons() {
	var data = [{
		number: 1,
		name: "Bulbasaur",
		types: {
			primary: "Grass",
			secondary: "Poison"
		},
		attributes: {
			hp: 45,
			attack: 49,
			defense: 49,
			spAttack: 65,
			spDefense: 65,
			speed: 45
		},
		links: {
			linkBg: "./img/bg-types/Grass-Types.jpg",
			linkImg: "./img/pokemons/001.png",
			linkType1: "./img/types/Grass.png",
			linkType2: "./img/types/Poison.png"
		}
	}, {
		number: 2,
		name: "Ivysaur",
		types: {
			primary: "Grass",
			secondary: "Poison"
		},
		attributes: {
			hp: 60,
			attack: 62,
			defense: 63,
			spAttack: 80,
			spDefense: 80,
			speed: 60
		},
		links: {
			linkBg: "./img/bg-types/Grass-Types.jpg",
			linkImg: "./img/pokemons/002.png",
			linkType1: "./img/types/Grass.png",
			linkType2: "./img/types/Poison.png"
		}
	}, {
		number: 3,
		name: "Venusaur",
		types: {
			primary: "Grass",
			secondary: "Poison"
		},
		attributes: {
			hp: 80,
			attack: 82,
			defense: 83,
			spAttack: 100,
			spDefense: 100,
			speed: 80
		},
		links: {
			linkBg: "./img/bg-types/Grass-Types.jpg",
			linkImg: "./img/pokemons/003.png",
			linkType1: "./img/types/Grass.png",
			linkType2: "./img/types/Poison.png"
		}
	}, {
		number: 3,
		name: "GMax Venusaur",
		types: {
			primary: "Grass",
			secondary: "Poison"
		},
		attributes: {
			hp: 80,
			attack: 82,
			defense: 83,
			spAttack: 100,
			spDefense: 100,
			speed: 80
		},
		links: {
			linkBg: "./img/bg-types/Grass-Types.jpg",
			linkImg: "./img/pokemons/003GMAX.png",
			linkType1: "./img/types/Grass.png",
			linkType2: "./img/types/Poison.png"
		}
	}, {
		number: 3,
		name: "Mega Venusaur",
		types: {
			primary: "Grass",
			secondary: "Poison"
		},
		attributes: {
			hp: 80,
			attack: 100,
			defense: 123,
			spAttack: 122,
			spDefense: 120,
			speed: 80
		},
		links: {
			linkBg: "./img/bg-types/Grass-Types.jpg",
			linkImg: "./img/pokemons/003M.png",
			linkType1: "./img/types/Grass.png",
			linkType2: "./img/types/Poison.png"
		}
	}, {
		number: 4,
		name: "Charmander",
		types: {
			primary: "Fire",
			secondary: ""
		},
		attributes: {
			hp: 39,
			attack: 52,
			defense: 43,
			spAttack: 60,
			spDefense: 50,
			speed: 65
		},
		links: {
			linkBg: "./img/bg-types/Fire-Types.jpg",
			linkImg: "./img/pokemons/004.png",
			linkType1: "./img/types/Fire.png",
			linkType2: ""
		}
	}, {
		number: 5,
		name: "Charmeleon",
		types: {
			primary: "Fire",
			secondary: ""
		},
		attributes: {
			hp: 58,
			attack: 64,
			defense: 58,
			spAttack: 80,
			spDefense: 65,
			speed: 80
		},
		links: {
			linkBg: "./img/bg-types/Fire-Types.jpg",
			linkImg: "./img/pokemons/005.png",
			linkType1: "./img/types/Fire.png",
			linkType2: ""
		}
	}, {
		number: 6,
		name: "Charizard",
		types: {
			primary: "Fire",
			secondary: "Flying"
		},
		attributes: {
			hp: 78,
			attack: 84,
			defense: 78,
			spAttack: 109,
			spDefense: 85,
			speed: 100
		},
		links: {
			linkBg: "./img/bg-types/Fire-Types.jpg",
			linkImg: "./img/pokemons/006.png",
			linkType1: "./img/types/Fire.png",
			linkType2: "./img/types/Flying.png"
		}
	}, {
		number: 6,
		name: "GMax Charizard",
		types: {
			primary: "Fire",
			secondary: "Flying"
		},
		attributes: {
			hp: 78,
			attack: 84,
			defense: 78,
			spAttack: 109,
			spDefense: 85,
			speed: 100
		},
		links: {
			linkBg: "./img/bg-types/Fire-Types.jpg",
			linkImg: "./img/pokemons/006GMAX.png",
			linkType1: "./img/types/Fire.png",
			linkType2: "./img/types/Flying.png"
		}
	}, {
		number: 6,
		name: "Mega Charizard X",
		types: {
			primary: "Fire",
			secondary: "Dragon"
		},
		attributes: {
			hp: 78,
			attack: 130,
			defense: 111,
			spAttack: 130,
			spDefense: 85,
			speed: 100
		},
		links: {
			linkBg: "./img/bg-types/Fire-Types.jpg",
			linkImg: "./img/pokemons/006M-X.png",
			linkType1: "./img/types/Fire.png",
			linkType2: "./img/types/Dragon.png"
		}
	}, {
		number: 6,
		name: "Mega Charizard Y",
		types: {
			primary: "Fire",
			secondary: "Flying"
		},
		attributes: {
			hp: 78,
			attack: 104,
			defense: 78,
			spAttack: 159,
			spDefense: 115,
			speed: 100
		},
		links: {
			linkBg: "./img/bg-types/Fire-Types.jpg",
			linkImg: "./img/pokemons/006M-Y.png",
			linkType1: "./img/types/Fire.png",
			linkType2: "./img/types/Flying.png"
		}
	}, {
		number: 7,
		name: "Squirtle",
		types: {
			primary: "Water",
			secondary: ""
		},
		attributes: {
			hp: 44,
			attack: 48,
			defense: 65,
			spAttack: 50,
			spDefense: 64,
			speed: 43
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/007.png",
			linkType1: "./img/types/Water.png",
			linkType2: ""
		}
	}, {
		number: 8,
		name: "Wartortle",
		types: {
			primary: "Water",
			secondary: ""
		},
		attributes: {
			hp: 59,
			attack: 63,
			defense: 80,
			spAttack: 65,
			spDefense: 80,
			speed: 58
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/008.png",
			linkType1: "./img/types/Water.png",
			linkType2: ""
		}
	}, {
		number: 9,
		name: "Blastoise",
		types: {
			primary: "Water",
			secondary: ""
		},
		attributes: {
			hp: 79,
			attack: 83,
			defense: 100,
			spAttack: 85,
			spDefense: 105,
			speed: 78
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/009.png",
			linkType1: "./img/types/Water.png",
			linkType2: ""
		}
	}, {
		number: 9,
		name: "GMax Blastoise",
		types: {
			primary: "Water",
			secondary: ""
		},
		attributes: {
			hp: 79,
			attack: 83,
			defense: 100,
			spAttack: 85,
			spDefense: 105,
			speed: 78
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/009GMAX.png",
			linkType1: "./img/types/Water.png",
			linkType2: ""
		}
	}, {
		number: 9,
		name: "Mega Blastoise",
		types: {
			primary: "Water",
			secondary: ""
		},
		attributes: {
			hp: 79,
			attack: 103,
			defense: 120,
			spAttack: 135,
			spDefense: 115,
			speed: 78
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/009M.png",
			linkType1: "./img/types/Water.png",
			linkType2: ""
		}
	}, {
		number: 10,
		name: "Caterpie",
		types: {
			primary: "Bug",
			secondary: ""
		},
		attributes: {
			hp: 45,
			attack: 30,
			defense: 35,
			spAttack: 20,
			spDefense: 20,
			speed: 45
		},
		links: {
			linkBg: "./img/bg-types/Bug-Types.jpg",
			linkImg: "./img/pokemons/010.png",
			linkType1: "./img/types/Bug.png",
			linkType2: ""
		}
	}, {
		number: 11,
		name: "Metapod",
		types: {
			primary: "Bug",
			secondary: ""
		},
		attributes: {
			hp: 50,
			attack: 20,
			defense: 55,
			spAttack: 25,
			spDefense: 25,
			speed: 30
		},
		links: {
			linkBg: "./img/bg-types/Bug-Types.jpg",
			linkImg: "./img/pokemons/011.png",
			linkType1: "./img/types/Bug.png",
			linkType2: ""
		}
	}, {
		number: 12,
		name: "Butterfree",
		types: {
			primary: "Bug",
			secondary: "Flying"
		},
		attributes: {
			hp: 60,
			attack: 45,
			defense: 50,
			spAttack: 90,
			spDefense: 80,
			speed: 70
		},
		links: {
			linkBg: "./img/bg-types/Bug-Types.jpg",
			linkImg: "./img/pokemons/012.png",
			linkType1: "./img/types/Bug.png",
			linkType2: "./img/types/Flying.png"
		}
	}, {
		number: 12,
		name: "GMax Butterfree",
		types: {
			primary: "Bug",
			secondary: "Flying"
		},
		attributes: {
			hp: 60,
			attack: 45,
			defense: 50,
			spAttack: 90,
			spDefense: 80,
			speed: 70
		},
		links: {
			linkBg: "./img/bg-types/Bug-Types.jpg",
			linkImg: "./img/pokemons/012GMAX.png",
			linkType1: "./img/types/Bug.png",
			linkType2: "./img/types/Flying.png"
		}
	}, {
		number: 13,
		name: "Weedle",
		types: {
			primary: "Bug",
			secondary: "Poison"
		},
		attributes: {
			hp: 40,
			attack: 35,
			defense: 30,
			spAttack: 20,
			spDefense: 20,
			speed: 50
		},
		links: {
			linkBg: "./img/bg-types/Bug-Types.jpg",
			linkImg: "./img/pokemons/013.png",
			linkType1: "./img/types/Bug.png",
			linkType2: "./img/types/Poison.png"
		}
	}, {
		number: 14,
		name: "Kakuna",
		types: {
			primary: "Bug",
			secondary: "Poison"
		},
		attributes: {
			hp: 45,
			attack: 25,
			defense: 50,
			spAttack: 25,
			spDefense: 25,
			speed: 35
		},
		links: {
			linkBg: "./img/bg-types/Bug-Types.jpg",
			linkImg: "./img/pokemons/014.png",
			linkType1: "./img/types/Bug.png",
			linkType2: "./img/types/Poison.png"
		}
	}, {
		number: 15,
		name: "Beedrill",
		types: {
			primary: "Bug",
			secondary: "Poison"
		},
		attributes: {
			hp: 65,
			attack: 90,
			defense: 40,
			spAttack: 45,
			spDefense: 80,
			speed: 75
		},
		links: {
			linkBg: "./img/bg-types/Bug-Types.jpg",
			linkImg: "./img/pokemons/015.png",
			linkType1: "./img/types/Bug.png",
			linkType2: "./img/types/Poison.png"
		}
	}, {
		number: 15,
		name: "Mega Beedrill",
		types: {
			primary: "Bug",
			secondary: "Poison"
		},
		attributes: {
			hp: 65,
			attack: 150,
			defense: 40,
			spAttack: 15,
			spDefense: 80,
			speed: 145
		},
		links: {
			linkBg: "./img/bg-types/Bug-Types.jpg",
			linkImg: "./img/pokemons/015M.png",
			linkType1: "./img/types/Bug.png",
			linkType2: "./img/types/Poison.png"
		}
	}, {
		number: 16,
		name: "Pidgey",
		types: {
			primary: "Normal",
			secondary: "Flying"
		},
		attributes: {
			hp: 40,
			attack: 45,
			defense: 40,
			spAttack: 35,
			spDefense: 35,
			speed: 56
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/016.png",
			linkType1: "./img/types/Normal.png",
			linkType2: "./img/types/Flying.png"
		}
	}, {
		number: 17,
		name: "Pidgeotto",
		types: {
			primary: "Normal",
			secondary: "Flying"
		},
		attributes: {
			hp: 63,
			attack: 60,
			defense: 55,
			spAttack: 50,
			spDefense: 50,
			speed: 71
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/017.png",
			linkType1: "./img/types/Normal.png",
			linkType2: "./img/types/Flying.png"
		}
	}, {
		number: 18,
		name: "Pidgeot",
		types: {
			primary: "Normal",
			secondary: "Flying"
		},
		attributes: {
			hp: 83,
			attack: 80,
			defense: 75,
			spAttack: 70,
			spDefense: 70,
			speed: 101
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/018.png",
			linkType1: "./img/types/Normal.png",
			linkType2: "./img/types/Flying.png"
		}
	}, {
		number: 18,
		name: "Mega Pidgeot",
		types: {
			primary: "Normal",
			secondary: "Flying"
		},
		attributes: {
			hp: 83,
			attack: 80,
			defense: 80,
			spAttack: 135,
			spDefense: 80,
			speed: 121
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/018M.png",
			linkType1: "./img/types/Normal.png",
			linkType2: "./img/types/Flying.png"
		}
	}, {
		number: 19,
		name: "Rattata",
		types: {
			primary: "Normal",
			secondary: ""
		},
		attributes: {
			hp: 30,
			attack: 56,
			defense: 35,
			spAttack: 25,
			spDefense: 35,
			speed: 72
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/019.png",
			linkType1: "./img/types/Normal.png",
			linkType2: ""
		}
	}, {
		number: 19,
		name: "Alolan Rattata",
		types: {
			primary: "Dark",
			secondary: "Normal"
		},
		attributes: {
			hp: 30,
			attack: 56,
			defense: 35,
			spAttack: 25,
			spDefense: 35,
			speed: 72
		},
		links: {
			linkBg: "./img/bg-types/Dark-Types.jpg",
			linkImg: "./img/pokemons/019A.png",
			linkType1: "./img/types/Dark.png",
			linkType2: "./img/types/Normal.png"
		}
	}, {
		number: 20,
		name: "Raticate",
		types: {
			primary: "Normal",
			secondary: ""
		},
		attributes: {
			hp: 55,
			attack: 81,
			defense: 60,
			spAttack: 50,
			spDefense: 70,
			speed: 97
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/020.png",
			linkType1: "./img/types/Normal.png",
			linkType2: ""
		}
	}, {
		number: 20,
		name: "Alolan Raticate",
		types: {
			primary: "Dark",
			secondary: "Normal"
		},
		attributes: {
			hp: 75,
			attack: 71,
			defense: 70,
			spAttack: 40,
			spDefense: 80,
			speed: 77
		},
		links: {
			linkBg: "./img/bg-types/Dark-Types.jpg",
			linkImg: "./img/pokemons/020A.png",
			linkType1: "./img/types/Dark.png",
			linkType2: "./img/types/Normal.png"
		}
	}, {
		number: 21,
		name: "Spearow",
		types: {
			primary: "Normal",
			secondary: "Flying"
		},
		attributes: {
			hp: 40,
			attack: 60,
			defense: 30,
			spAttack: 31,
			spDefense: 31,
			speed: 70
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/021.png",
			linkType1: "./img/types/Normal.png",
			linkType2: "./img/types/Flying.png"
		}
	}, {
		number: 22,
		name: "Fearow",
		types: {
			primary: "Normal",
			secondary: "Flying"
		},
		attributes: {
			hp: 65,
			attack: 90,
			defense: 65,
			spAttack: 61,
			spDefense: 61,
			speed: 100
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/022.png",
			linkType1: "./img/types/Normal.png",
			linkType2: "./img/types/Flying.png"
		}
	}, {
		number: 23,
		name: "Ekans",
		types: {
			primary: "Poison",
			secondary: ""
		},
		attributes: {
			hp: 35,
			attack: 60,
			defense: 44,
			spAttack: 40,
			spDefense: 54,
			speed: 55
		},
		links: {
			linkBg: "./img/bg-types/Poison-Types.jpg",
			linkImg: "./img/pokemons/023.png",
			linkType1: "./img/types/Poison.png",
			linkType2: ""
		}
	}, {
		number: 24,
		name: "Arbok",
		types: {
			primary: "Poison",
			secondary: ""
		},
		attributes: {
			hp: 60,
			attack: 95,
			defense: 69,
			spAttack: 65,
			spDefense: 79,
			speed: 80
		},
		links: {
			linkBg: "./img/bg-types/Poison-Types.jpg",
			linkImg: "./img/pokemons/024.png",
			linkType1: "./img/types/Poison.png",
			linkType2: ""
		}
	}, {
		number: 25,
		name: "Pikachu",
		types: {
			primary: "Electric",
			secondary: ""
		},
		attributes: {
			hp: 35,
			attack: 55,
			defense: 40,
			spAttack: 50,
			spDefense: 50,
			speed: 90
		},
		links: {
			linkBg: "./img/bg-types/Electric-Types.jpg",
			linkImg: "./img/pokemons/025.png",
			linkType1: "./img/types/Electric.png",
			linkType2: ""
		}
	}, {
		number: 25,
		name: "GMax Pikachu",
		types: {
			primary: "Electric",
			secondary: ""
		},
		attributes: {
			hp: 35,
			attack: 55,
			defense: 40,
			spAttack: 50,
			spDefense: 50,
			speed: 90
		},
		links: {
			linkBg: "./img/bg-types/Electric-Types.jpg",
			linkImg: "./img/pokemons/025GMAX.png",
			linkType1: "./img/types/Electric.png",
			linkType2: ""
		}
	}, {
		number: 25,
		name: "Partner Pikachu",
		types: {
			primary: "Electric",
			secondary: ""
		},
		attributes: {
			hp: 45,
			attack: 80,
			defense: 50,
			spAttack: 75,
			spDefense: 60,
			speed: 120
		},
		links: {
			linkBg: "./img/bg-types/Electric-Types.jpg",
			linkImg: "./img/pokemons/025LG.png",
			linkType1: "./img/types/Electric.png",
			linkType2: ""
		}
	}, {
		number: 26,
		name: "Raichu",
		types: {
			primary: "Electric",
			secondary: ""
		},
		attributes: {
			hp: 60,
			attack: 90,
			defense: 55,
			spAttack: 90,
			spDefense: 80,
			speed: 110
		},
		links: {
			linkBg: "./img/bg-types/Electric-Types.jpg",
			linkImg: "./img/pokemons/026.png",
			linkType1: "./img/types/Electric.png",
			linkType2: ""
		}
	}, {
		number: 26,
		name: "Alolan Raichu",
		types: {
			primary: "Electric",
			secondary: "Psychic"
		},
		attributes: {
			hp: 60,
			attack: 85,
			defense: 50,
			spAttack: 95,
			spDefense: 85,
			speed: 110
		},
		links: {
			linkBg: "./img/bg-types/Electric-Types.jpg",
			linkImg: "./img/pokemons/026A.png",
			linkType1: "./img/types/Electric.png",
			linkType2: "./img/types/Psychic.png"
		}
	}, {
		number: 27,
		name: "Sandshrew",
		types: {
			primary: "Ground",
			secondary: ""
		},
		attributes: {
			hp: 50,
			attack: 75,
			defense: 85,
			spAttack: 20,
			spDefense: 30,
			speed: 40
		},
		links: {
			linkBg: "./img/bg-types/Ground-Types.jpg",
			linkImg: "./img/pokemons/027.png",
			linkType1: "./img/types/Ground.png",
			linkType2: ""
		}
	}, {
		number: 27,
		name: "Alolan Sandshrew",
		types: {
			primary: "Ice",
			secondary: "Steel"
		},
		attributes: {
			hp: 50,
			attack: 75,
			defense: 90,
			spAttack: 10,
			spDefense: 35,
			speed: 40
		},
		links: {
			linkBg: "./img/bg-types/Ice-Types.jpg",
			linkImg: "./img/pokemons/027A.png",
			linkType1: "./img/types/Ice.png",
			linkType2: "./img/types/Steel.png"
		}
	}, {
		number: 28,
		name: "Sandslash",
		types: {
			primary: "Ground",
			secondary: ""
		},
		attributes: {
			hp: 75,
			attack: 100,
			defense: 110,
			spAttack: 45,
			spDefense: 55,
			speed: 65
		},
		links: {
			linkBg: "./img/bg-types/Ground-Types.jpg",
			linkImg: "./img/pokemons/028.png",
			linkType1: "./img/types/Ground.png",
			linkType2: ""
		}
	}, {
		number: 28,
		name: "Alolan Sandslash",
		types: {
			primary: "Ice",
			secondary: "Steel"
		},
		attributes: {
			hp: 75,
			attack: 100,
			defense: 120,
			spAttack: 25,
			spDefense: 65,
			speed: 65
		},
		links: {
			linkBg: "./img/bg-types/Ice-Types.jpg",
			linkImg: "./img/pokemons/028A.png",
			linkType1: "./img/types/Ice.png",
			linkType2: "./img/types/Steel.png"
		}
	}, {
		number: 29,
		name: "Nidoran?",
		types: {
			primary: "Poison",
			secondary: ""
		},
		attributes: {
			hp: 55,
			attack: 47,
			defense: 52,
			spAttack: 40,
			spDefense: 40,
			speed: 41
		},
		links: {
			linkBg: "./img/bg-types/Poison-Types.jpg",
			linkImg: "./img/pokemons/029.png",
			linkType1: "./img/types/Poison.png",
			linkType2: ""
		}
	}, {
		number: 30,
		name: "Nidorina",
		types: {
			primary: "Poison",
			secondary: ""
		},
		attributes: {
			hp: 70,
			attack: 62,
			defense: 67,
			spAttack: 55,
			spDefense: 55,
			speed: 56
		},
		links: {
			linkBg: "./img/bg-types/Poison-Types.jpg",
			linkImg: "./img/pokemons/030.png",
			linkType1: "./img/types/Poison.png",
			linkType2: ""
		}
	}, {
		number: 31,
		name: "Nidoqueen",
		types: {
			primary: "Poison",
			secondary: "Ground"
		},
		attributes: {
			hp: 90,
			attack: 92,
			defense: 87,
			spAttack: 75,
			spDefense: 85,
			speed: 76
		},
		links: {
			linkBg: "./img/bg-types/Poison-Types.jpg",
			linkImg: "./img/pokemons/031.png",
			linkType1: "./img/types/Poison.png",
			linkType2: "./img/types/Ground.png"
		}
	}, {
		number: 32,
		name: "Nidoran?",
		types: {
			primary: "Poison",
			secondary: ""
		},
		attributes: {
			hp: 46,
			attack: 57,
			defense: 40,
			spAttack: 40,
			spDefense: 40,
			speed: 50
		},
		links: {
			linkBg: "./img/bg-types/Poison-Types.jpg",
			linkImg: "./img/pokemons/032.png",
			linkType1: "./img/types/Poison.png",
			linkType2: ""
		}
	}, {
		number: 33,
		name: "Nidorino",
		types: {
			primary: "Poison",
			secondary: ""
		},
		attributes: {
			hp: 61,
			attack: 72,
			defense: 57,
			spAttack: 55,
			spDefense: 55,
			speed: 65
		},
		links: {
			linkBg: "./img/bg-types/Poison-Types.jpg",
			linkImg: "./img/pokemons/033.png",
			linkType1: "./img/types/Poison.png",
			linkType2: ""
		}
	}, {
		number: 34,
		name: "Nidoking",
		types: {
			primary: "Poison",
			secondary: "Ground"
		},
		attributes: {
			hp: 81,
			attack: 102,
			defense: 77,
			spAttack: 85,
			spDefense: 75,
			speed: 85
		},
		links: {
			linkBg: "./img/bg-types/Poison-Types.jpg",
			linkImg: "./img/pokemons/034.png",
			linkType1: "./img/types/Poison.png",
			linkType2: "./img/types/Ground.png"
		}
	}, {
		number: 35,
		name: "Clefairy",
		types: {
			primary: "Fairy",
			secondary: ""
		},
		attributes: {
			hp: 70,
			attack: 45,
			defense: 48,
			spAttack: 60,
			spDefense: 65,
			speed: 35
		},
		links: {
			linkBg: "./img/bg-types/Fairy-Types.jpg",
			linkImg: "./img/pokemons/035.png",
			linkType1: "./img/types/Fairy.png",
			linkType2: ""
		}
	}, {
		number: 36,
		name: "Clefable",
		types: {
			primary: "Fairy",
			secondary: ""
		},
		attributes: {
			hp: 95,
			attack: 70,
			defense: 73,
			spAttack: 95,
			spDefense: 90,
			speed: 60
		},
		links: {
			linkBg: "./img/bg-types/Fairy-Types.jpg",
			linkImg: "./img/pokemons/036.png",
			linkType1: "./img/types/Fairy.png",
			linkType2: ""
		}
	}, {
		number: 37,
		name: "Vulpix",
		types: {
			primary: "Fire",
			secondary: ""
		},
		attributes: {
			hp: 38,
			attack: 41,
			defense: 40,
			spAttack: 50,
			spDefense: 65,
			speed: 65
		},
		links: {
			linkBg: "./img/bg-types/Fire-Types.jpg",
			linkImg: "./img/pokemons/037.png",
			linkType1: "./img/types/Fire.png",
			linkType2: ""
		}
	}, {
		number: 37,
		name: "Alolan Vulpix",
		types: {
			primary: "Ice",
			secondary: ""
		},
		attributes: {
			hp: 38,
			attack: 41,
			defense: 40,
			spAttack: 50,
			spDefense: 65,
			speed: 65
		},
		links: {
			linkBg: "./img/bg-types/Ice-Types.jpg",
			linkImg: "./img/pokemons/037A.png",
			linkType1: "./img/types/Ice.png",
			linkType2: ""
		}
	}, {
		number: 38,
		name: "Ninetales",
		types: {
			primary: "Fire",
			secondary: ""
		},
		attributes: {
			hp: 73,
			attack: 76,
			defense: 75,
			spAttack: 81,
			spDefense: 100,
			speed: 100
		},
		links: {
			linkBg: "./img/bg-types/Fire-Types.jpg",
			linkImg: "./img/pokemons/038.png",
			linkType1: "./img/types/Fire.png",
			linkType2: ""
		}
	}, {
		number: 38,
		name: "Alolan Ninetales",
		types: {
			primary: "Ice",
			secondary: "Fairy"
		},
		attributes: {
			hp: 73,
			attack: 67,
			defense: 75,
			spAttack: 81,
			spDefense: 100,
			speed: 109
		},
		links: {
			linkBg: "./img/bg-types/Ice-Types.jpg",
			linkImg: "./img/pokemons/038A.png",
			linkType1: "./img/types/Ice.png",
			linkType2: "./img/types/Fairy.png"
		}
	}, {
		number: 39,
		name: "Jigglypuff",
		types: {
			primary: "Normal",
			secondary: "Fairy"
		},
		attributes: {
			hp: 115,
			attack: 45,
			defense: 20,
			spAttack: 45,
			spDefense: 25,
			speed: 20
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/039.png",
			linkType1: "./img/types/Normal.png",
			linkType2: "./img/types/Fairy.png"
		}
	}, {
		number: 40,
		name: "Wigglytuff",
		types: {
			primary: "Normal",
			secondary: "Fairy"
		},
		attributes: {
			hp: 140,
			attack: 70,
			defense: 45,
			spAttack: 85,
			spDefense: 50,
			speed: 45
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/040.png",
			linkType1: "./img/types/Normal.png",
			linkType2: "./img/types/Fairy.png"
		}
	}, {
		number: 41,
		name: "Zubat",
		types: {
			primary: "Poison",
			secondary: "Flying"
		},
		attributes: {
			hp: 40,
			attack: 45,
			defense: 35,
			spAttack: 30,
			spDefense: 40,
			speed: 55
		},
		links: {
			linkBg: "./img/bg-types/Poison-Types.jpg",
			linkImg: "./img/pokemons/041.png",
			linkType1: "./img/types/Poison.png",
			linkType2: "./img/types/Flying.png"
		}
	}, {
		number: 42,
		name: "Golbat",
		types: {
			primary: "Poison",
			secondary: "Flying"
		},
		attributes: {
			hp: 75,
			attack: 80,
			defense: 70,
			spAttack: 65,
			spDefense: 75,
			speed: 90
		},
		links: {
			linkBg: "./img/bg-types/Poison-Types.jpg",
			linkImg: "./img/pokemons/042.png",
			linkType1: "./img/types/Poison.png",
			linkType2: "./img/types/Flying.png"
		}
	}, {
		number: 43,
		name: "Oddish",
		types: {
			primary: "Grass",
			secondary: "Poison"
		},
		attributes: {
			hp: 45,
			attack: 50,
			defense: 55,
			spAttack: 75,
			spDefense: 65,
			speed: 30
		},
		links: {
			linkBg: "./img/bg-types/Grass-Types.jpg",
			linkImg: "./img/pokemons/043.png",
			linkType1: "./img/types/Grass.png",
			linkType2: "./img/types/Poison.png"
		}
	}, {
		number: 44,
		name: "Gloom",
		types: {
			primary: "Grass",
			secondary: "Poison"
		},
		attributes: {
			hp: 60,
			attack: 65,
			defense: 70,
			spAttack: 85,
			spDefense: 75,
			speed: 40
		},
		links: {
			linkBg: "./img/bg-types/Grass-Types.jpg",
			linkImg: "./img/pokemons/044.png",
			linkType1: "./img/types/Grass.png",
			linkType2: "./img/types/Poison.png"
		}
	}, {
		number: 45,
		name: "Vileplume",
		types: {
			primary: "Grass",
			secondary: "Poison"
		},
		attributes: {
			hp: 75,
			attack: 80,
			defense: 85,
			spAttack: 110,
			spDefense: 90,
			speed: 50
		},
		links: {
			linkBg: "./img/bg-types/Grass-Types.jpg",
			linkImg: "./img/pokemons/045.png",
			linkType1: "./img/types/Grass.png",
			linkType2: "./img/types/Poison.png"
		}
	}, {
		number: 46,
		name: "Paras",
		types: {
			primary: "Bug",
			secondary: "Grass"
		},
		attributes: {
			hp: 35,
			attack: 70,
			defense: 55,
			spAttack: 45,
			spDefense: 55,
			speed: 25
		},
		links: {
			linkBg: "./img/bg-types/Bug-Types.jpg",
			linkImg: "./img/pokemons/046.png",
			linkType1: "./img/types/Bug.png",
			linkType2: "./img/types/Grass.png"
		}
	}, {
		number: 47,
		name: "Parasect",
		types: {
			primary: "Bug",
			secondary: "Grass"
		},
		attributes: {
			hp: 60,
			attack: 95,
			defense: 80,
			spAttack: 60,
			spDefense: 80,
			speed: 30
		},
		links: {
			linkBg: "./img/bg-types/Bug-Types.jpg",
			linkImg: "./img/pokemons/047.png",
			linkType1: "./img/types/Bug.png",
			linkType2: "./img/types/Grass.png"
		}
	}, {
		number: 48,
		name: "Venonat",
		types: {
			primary: "Bug",
			secondary: "Poison"
		},
		attributes: {
			hp: 60,
			attack: 55,
			defense: 50,
			spAttack: 40,
			spDefense: 55,
			speed: 45
		},
		links: {
			linkBg: "./img/bg-types/Bug-Types.jpg",
			linkImg: "./img/pokemons/048.png",
			linkType1: "./img/types/Bug.png",
			linkType2: "./img/types/Poison.png"
		}
	}, {
		number: 49,
		name: "Venomoth",
		types: {
			primary: "Bug",
			secondary: "Poison"
		},
		attributes: {
			hp: 70,
			attack: 65,
			defense: 60,
			spAttack: 90,
			spDefense: 75,
			speed: 90
		},
		links: {
			linkBg: "./img/bg-types/Bug-Types.jpg",
			linkImg: "./img/pokemons/049.png",
			linkType1: "./img/types/Bug.png",
			linkType2: "./img/types/Poison.png"
		}
	}, {
		number: 50,
		name: "Diglett",
		types: {
			primary: "Ground",
			secondary: ""
		},
		attributes: {
			hp: 10,
			attack: 55,
			defense: 25,
			spAttack: 35,
			spDefense: 45,
			speed: 95
		},
		links: {
			linkBg: "./img/bg-types/Ground-Types.jpg",
			linkImg: "./img/pokemons/050.png",
			linkType1: "./img/types/Ground.png",
			linkType2: ""
		}
	}, {
		number: 50,
		name: "Alolan Diglett",
		types: {
			primary: "Ground",
			secondary: "Steel"
		},
		attributes: {
			hp: 10,
			attack: 55,
			defense: 30,
			spAttack: 35,
			spDefense: 45,
			speed: 90
		},
		links: {
			linkBg: "./img/bg-types/Ground-Types.jpg",
			linkImg: "./img/pokemons/050A.png",
			linkType1: "./img/types/Ground.png",
			linkType2: "./img/types/Steel.png"
		}
	}, {
		number: 51,
		name: "Dugtrio",
		types: {
			primary: "Ground",
			secondary: ""
		},
		attributes: {
			hp: 35,
			attack: 100,
			defense: 50,
			spAttack: 50,
			spDefense: 70,
			speed: 120
		},
		links: {
			linkBg: "./img/bg-types/Ground-Types.jpg",
			linkImg: "./img/pokemons/051.png",
			linkType1: "./img/types/Ground.png",
			linkType2: ""
		}
	}, {
		number: 51,
		name: "Alolan Dugtrio",
		types: {
			primary: "Ground",
			secondary: "Steel"
		},
		attributes: {
			hp: 35,
			attack: 100,
			defense: 60,
			spAttack: 50,
			spDefense: 70,
			speed: 110
		},
		links: {
			linkBg: "./img/bg-types/Ground-Types.jpg",
			linkImg: "./img/pokemons/051A.png",
			linkType1: "./img/types/Ground.png",
			linkType2: "./img/types/Steel.png"
		}
	}, {
		number: 52,
		name: "Meowth",
		types: {
			primary: "Normal",
			secondary: ""
		},
		attributes: {
			hp: 40,
			attack: 45,
			defense: 35,
			spAttack: 40,
			spDefense: 40,
			speed: 90
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/052.png",
			linkType1: "./img/types/Normal.png",
			linkType2: ""
		}
	}, {
		number: 52,
		name: "GMax Meowth",
		types: {
			primary: "Normal",
			secondary: ""
		},
		attributes: {
			hp: 40,
			attack: 45,
			defense: 35,
			spAttack: 40,
			spDefense: 40,
			speed: 90
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/052MAX.png",
			linkType1: "./img/types/Normal.png",
			linkType2: ""
		}
	}, {
		number: 52,
		name: "Alolan Meowth",
		types: {
			primary: "Dark",
			secondary: ""
		},
		attributes: {
			hp: 40,
			attack: 35,
			defense: 35,
			spAttack: 50,
			spDefense: 40,
			speed: 90
		},
		links: {
			linkBg: "./img/bg-types/Dark-Types.jpg",
			linkImg: "./img/pokemons/052A.png",
			linkType1: "./img/types/Dark.png",
			linkType2: ""
		}
	}, {
		number: 52,
		name: "Galarian Meowth",
		types: {
			primary: "Steel",
			secondary: ""
		},
		attributes: {
			hp: 50,
			attack: 65,
			defense: 55,
			spAttack: 40,
			spDefense: 40,
			speed: 40
		},
		links: {
			linkBg: "./img/bg-types/Steel-Types.jpg",
			linkImg: "./img/pokemons/052G.png",
			linkType1: "./img/types/Steel.png",
			linkType2: ""
		}
	}, {
		number: 53,
		name: "Persian",
		types: {
			primary: "Normal",
			secondary: ""
		},
		attributes: {
			hp: 65,
			attack: 70,
			defense: 60,
			spAttack: 65,
			spDefense: 65,
			speed: 115
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/053.png",
			linkType1: "./img/types/Normal.png",
			linkType2: ""
		}
	}, {
		number: 53,
		name: "Alolan Persian",
		types: {
			primary: "Dark",
			secondary: ""
		},
		attributes: {
			hp: 65,
			attack: 60,
			defense: 60,
			spAttack: 75,
			spDefense: 65,
			speed: 115
		},
		links: {
			linkBg: "./img/bg-types/Dark-Types.jpg",
			linkImg: "./img/pokemons/053A.png",
			linkType1: "./img/types/Dark.png",
			linkType2: ""
		}
	}, {
		number: 54,
		name: "Psyduck",
		types: {
			primary: "Water",
			secondary: ""
		},
		attributes: {
			hp: 50,
			attack: 52,
			defense: 48,
			spAttack: 65,
			spDefense: 50,
			speed: 55
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/054.png",
			linkType1: "./img/types/Water.png",
			linkType2: ""
		}
	}, {
		number: 55,
		name: "Golduck",
		types: {
			primary: "Water",
			secondary: ""
		},
		attributes: {
			hp: 80,
			attack: 82,
			defense: 78,
			spAttack: 95,
			spDefense: 80,
			speed: 85
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/055.png",
			linkType1: "./img/types/Water.png",
			linkType2: ""
		}
	}, {
		number: 56,
		name: "Mankey",
		types: {
			primary: "Fighting",
			secondary: ""
		},
		attributes: {
			hp: 40,
			attack: 80,
			defense: 35,
			spAttack: 35,
			spDefense: 45,
			speed: 70
		},
		links: {
			linkBg: "./img/bg-types/Fighting-Types.jpg",
			linkImg: "./img/pokemons/056.png",
			linkType1: "./img/types/Fighting.png",
			linkType2: ""
		}
	}, {
		number: 57,
		name: "Primeape",
		types: {
			primary: "Fighting",
			secondary: ""
		},
		attributes: {
			hp: 65,
			attack: 105,
			defense: 60,
			spAttack: 60,
			spDefense: 70,
			speed: 95
		},
		links: {
			linkBg: "./img/bg-types/Fighting-Types.jpg",
			linkImg: "./img/pokemons/057.png",
			linkType1: "./img/types/Fighting.png",
			linkType2: ""
		}
	}, {
		number: 58,
		name: "Growlithe",
		types: {
			primary: "Fire",
			secondary: ""
		},
		attributes: {
			hp: 55,
			attack: 70,
			defense: 45,
			spAttack: 70,
			spDefense: 50,
			speed: 60
		},
		links: {
			linkBg: "./img/bg-types/Fire-Types.jpg",
			linkImg: "./img/pokemons/058.png",
			linkType1: "./img/types/Fire.png",
			linkType2: ""
		}
	}, {
		number: 58,
		name: "Hisuian Growlithe",
		types: {
			primary: "Fire",
			secondary: "Rock"
		},
		attributes: {
			hp: 60,
			attack: 75,
			defense: 45,
			spAttack: 65,
			spDefense: 50,
			speed: 55
		},
		links: {
			linkBg: "./img/bg-types/Fire-Types.jpg",
			linkImg: "./img/pokemons/058H.png",
			linkType1: "./img/types/Fire.png",
			linkType2: "./img/types/Rock.png"
		}
	}, {
		number: 59,
		name: "Arcanine",
		types: {
			primary: "Fire",
			secondary: ""
		},
		attributes: {
			hp: 90,
			attack: 110,
			defense: 80,
			spAttack: 100,
			spDefense: 80,
			speed: 95
		},
		links: {
			linkBg: "./img/bg-types/Fire-Types.jpg",
			linkImg: "./img/pokemons/059.png",
			linkType1: "./img/types/Fire.png",
			linkType2: ""
		}
	}, {
		number: 59,
		name: "Hisuian Arcanine",
		types: {
			primary: "Fire",
			secondary: "Rock"
		},
		attributes: {
			hp: 95,
			attack: 115,
			defense: 80,
			spAttack: 95,
			spDefense: 80,
			speed: 90
		},
		links: {
			linkBg: "./img/bg-types/Fire-Types.jpg",
			linkImg: "./img/pokemons/059H.png",
			linkType1: "./img/types/Fire.png",
			linkType2: "./img/types/Rock.png"
		}
	}, {
		number: 60,
		name: "Poliwag",
		types: {
			primary: "Water",
			secondary: ""
		},
		attributes: {
			hp: 40,
			attack: 50,
			defense: 40,
			spAttack: 40,
			spDefense: 40,
			speed: 90
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/060.png",
			linkType1: "./img/types/Water.png",
			linkType2: ""
		}
	}, {
		number: 61,
		name: "Poliwhirl",
		types: {
			primary: "Water",
			secondary: ""
		},
		attributes: {
			hp: 65,
			attack: 65,
			defense: 65,
			spAttack: 50,
			spDefense: 50,
			speed: 90
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/061.png",
			linkType1: "./img/types/Water.png",
			linkType2: ""
		}
	}, {
		number: 62,
		name: "Poliwrath",
		types: {
			primary: "Water",
			secondary: "Fighting"
		},
		attributes: {
			hp: 90,
			attack: 95,
			defense: 95,
			spAttack: 70,
			spDefense: 90,
			speed: 70
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/062.png",
			linkType1: "./img/types/Water.png",
			linkType2: "./img/types/Fighting.png"
		}
	}, {
		number: 63,
		name: "Abra",
		types: {
			primary: "Psychic",
			secondary: ""
		},
		attributes: {
			hp: 25,
			attack: 20,
			defense: 15,
			spAttack: 105,
			spDefense: 55,
			speed: 90
		},
		links: {
			linkBg: "./img/bg-types/Psychic-Types.jpg",
			linkImg: "./img/pokemons/063.png",
			linkType1: "./img/types/Psychic.png",
			linkType2: ""
		}
	}, {
		number: 64,
		name: "Kadabra",
		types: {
			primary: "Psychic",
			secondary: ""
		},
		attributes: {
			hp: 40,
			attack: 35,
			defense: 30,
			spAttack: 120,
			spDefense: 70,
			speed: 105
		},
		links: {
			linkBg: "./img/bg-types/Psychic-Types.jpg",
			linkImg: "./img/pokemons/064.png",
			linkType1: "./img/types/Psychic.png",
			linkType2: ""
		}
	}, {
		number: 65,
		name: "Alakazam",
		types: {
			primary: "Psychic",
			secondary: ""
		},
		attributes: {
			hp: 55,
			attack: 50,
			defense: 45,
			spAttack: 135,
			spDefense: 95,
			speed: 120
		},
		links: {
			linkBg: "./img/bg-types/Psychic-Types.jpg",
			linkImg: "./img/pokemons/065.png",
			linkType1: "./img/types/Psychic.png",
			linkType2: ""
		}
	}, {
		number: 65,
		name: "Mega Alakazam",
		types: {
			primary: "Psychic",
			secondary: ""
		},
		attributes: {
			hp: 55,
			attack: 50,
			defense: 65,
			spAttack: 175,
			spDefense: 105,
			speed: 150
		},
		links: {
			linkBg: "./img/bg-types/Psychic-Types.jpg",
			linkImg: "./img/pokemons/065M.png",
			linkType1: "./img/types/Psychic.png",
			linkType2: ""
		}
	}, {
		number: 66,
		name: "Machop",
		types: {
			primary: "Fighting",
			secondary: ""
		},
		attributes: {
			hp: 70,
			attack: 80,
			defense: 50,
			spAttack: 35,
			spDefense: 35,
			speed: 35
		},
		links: {
			linkBg: "./img/bg-types/Fighting-Types.jpg",
			linkImg: "./img/pokemons/066.png",
			linkType1: "./img/types/Fighting.png",
			linkType2: ""
		}
	}, {
		number: 67,
		name: "Machoke",
		types: {
			primary: "Fighting",
			secondary: ""
		},
		attributes: {
			hp: 80,
			attack: 100,
			defense: 70,
			spAttack: 50,
			spDefense: 60,
			speed: 45
		},
		links: {
			linkBg: "./img/bg-types/Fighting-Types.jpg",
			linkImg: "./img/pokemons/067.png",
			linkType1: "./img/types/Fighting.png",
			linkType2: ""
		}
	}, {
		number: 68,
		name: "Machamp",
		types: {
			primary: "Fighting",
			secondary: ""
		},
		attributes: {
			hp: 90,
			attack: 130,
			defense: 80,
			spAttack: 65,
			spDefense: 85,
			speed: 55
		},
		links: {
			linkBg: "./img/bg-types/Fighting-Types.jpg",
			linkImg: "./img/pokemons/068.png",
			linkType1: "./img/types/Fighting.png",
			linkType2: ""
		}
	}, {
		number: 68,
		name: "GMax Machamp",
		types: {
			primary: "Fighting",
			secondary: ""
		},
		attributes: {
			hp: 90,
			attack: 130,
			defense: 80,
			spAttack: 65,
			spDefense: 85,
			speed: 55
		},
		links: {
			linkBg: "./img/bg-types/Fighting-Types.jpg",
			linkImg: "./img/pokemons/068GMAX.png",
			linkType1: "./img/types/Fighting.png",
			linkType2: ""
		}
	}, {
		number: 69,
		name: "Bellsprout",
		types: {
			primary: "Grass",
			secondary: "Poison"
		},
		attributes: {
			hp: 50,
			attack: 75,
			defense: 35,
			spAttack: 70,
			spDefense: 30,
			speed: 40
		},
		links: {
			linkBg: "./img/bg-types/Grass-Types.jpg",
			linkImg: "./img/pokemons/069.png",
			linkType1: "./img/types/Grass.png",
			linkType2: "./img/types/Poison.png"
		}
	}, {
		number: 70,
		name: "Weepinbell",
		types: {
			primary: "Grass",
			secondary: "Poison"
		},
		attributes: {
			hp: 65,
			attack: 90,
			defense: 50,
			spAttack: 85,
			spDefense: 45,
			speed: 55
		},
		links: {
			linkBg: "./img/bg-types/Grass-Types.jpg",
			linkImg: "./img/pokemons/070.png",
			linkType1: "./img/types/Grass.png",
			linkType2: "./img/types/Poison.png"
		}
	}, {
		number: 71,
		name: "Victreebel",
		types: {
			primary: "Grass",
			secondary: "Poison"
		},
		attributes: {
			hp: 80,
			attack: 105,
			defense: 65,
			spAttack: 100,
			spDefense: 70,
			speed: 70
		},
		links: {
			linkBg: "./img/bg-types/Grass-Types.jpg",
			linkImg: "./img/pokemons/071.png",
			linkType1: "./img/types/Grass.png",
			linkType2: "./img/types/Poison.png"
		}
	}, {
		number: 72,
		name: "Tentacool",
		types: {
			primary: "Water",
			secondary: "Poison"
		},
		attributes: {
			hp: 40,
			attack: 40,
			defense: 35,
			spAttack: 50,
			spDefense: 100,
			speed: 70
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/072.png",
			linkType1: "./img/types/Water.png",
			linkType2: "./img/types/Poison.png"
		}
	}, {
		number: 73,
		name: "Tentacruel",
		types: {
			primary: "Water",
			secondary: "Poison"
		},
		attributes: {
			hp: 80,
			attack: 70,
			defense: 65,
			spAttack: 80,
			spDefense: 120,
			speed: 100
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/073.png",
			linkType1: "./img/types/Water.png",
			linkType2: "./img/types/Poison.png"
		}
	}, {
		number: 74,
		name: "Geodude",
		types: {
			primary: "Rock",
			secondary: "Ground"
		},
		attributes: {
			hp: 40,
			attack: 80,
			defense: 100,
			spAttack: 30,
			spDefense: 30,
			speed: 20
		},
		links: {
			linkBg: "./img/bg-types/Rock-Types.jpg",
			linkImg: "./img/pokemons/074.png",
			linkType1: "./img/types/Rock.png",
			linkType2: "./img/types/Ground.png"
		}
	}, {
		number: 74,
		name: "Alolan Geodude",
		types: {
			primary: "Rock",
			secondary: "Electric"
		},
		attributes: {
			hp: 40,
			attack: 80,
			defense: 100,
			spAttack: 30,
			spDefense: 30,
			speed: 20
		},
		links: {
			linkBg: "./img/bg-types/Rock-Types.jpg",
			linkImg: "./img/pokemons/074A.png",
			linkType1: "./img/types/Rock.png",
			linkType2: "./img/types/Electric.png"
		}
	}, {
		number: 75,
		name: "Graveler",
		types: {
			primary: "Rock",
			secondary: "Ground"
		},
		attributes: {
			hp: 55,
			attack: 95,
			defense: 115,
			spAttack: 45,
			spDefense: 45,
			speed: 35
		},
		links: {
			linkBg: "./img/bg-types/Rock-Types.jpg",
			linkImg: "./img/pokemons/075.png",
			linkType1: "./img/types/Rock.png",
			linkType2: "./img/types/Ground.png"
		}
	}, {
		number: 75,
		name: "Alolan Graveler",
		types: {
			primary: "Rock",
			secondary: "Electric"
		},
		attributes: {
			hp: 55,
			attack: 95,
			defense: 115,
			spAttack: 45,
			spDefense: 45,
			speed: 35
		},
		links: {
			linkBg: "./img/bg-types/Rock-Types.jpg",
			linkImg: "./img/pokemons/075A.png",
			linkType1: "./img/types/Rock.png",
			linkType2: "./img/types/Electric.png"
		}
	}, {
		number: 76,
		name: "Golem",
		types: {
			primary: "Rock",
			secondary: "Ground"
		},
		attributes: {
			hp: 80,
			attack: 120,
			defense: 130,
			spAttack: 55,
			spDefense: 65,
			speed: 45
		},
		links: {
			linkBg: "./img/bg-types/Rock-Types.jpg",
			linkImg: "./img/pokemons/076.png",
			linkType1: "./img/types/Rock.png",
			linkType2: "./img/types/Ground.png"
		}
	}, {
		number: 76,
		name: "Alolan Golem",
		types: {
			primary: "Rock",
			secondary: "Electric"
		},
		attributes: {
			hp: 80,
			attack: 120,
			defense: 130,
			spAttack: 55,
			spDefense: 65,
			speed: 45
		},
		links: {
			linkBg: "./img/bg-types/Rock-Types.jpg",
			linkImg: "./img/pokemons/076A.png",
			linkType1: "./img/types/Rock.png",
			linkType2: "./img/types/Electric.png"
		}
	}, {
		number: 77,
		name: "Ponyta",
		types: {
			primary: "Fire",
			secondary: ""
		},
		attributes: {
			hp: 50,
			attack: 85,
			defense: 55,
			spAttack: 65,
			spDefense: 65,
			speed: 90
		},
		links: {
			linkBg: "./img/bg-types/Fire-Types.jpg",
			linkImg: "./img/pokemons/077.png",
			linkType1: "./img/types/Fire.png",
			linkType2: ""
		}
	}, {
		number: 77,
		name: "Galarian Ponyta",
		types: {
			primary: "Psychic",
			secondary: ""
		},
		attributes: {
			hp: 50,
			attack: 85,
			defense: 55,
			spAttack: 65,
			spDefense: 65,
			speed: 90
		},
		links: {
			linkBg: "./img/bg-types/Psychic-Types.jpg",
			linkImg: "./img/pokemons/077G.png",
			linkType1: "./img/types/Psychic.png",
			linkType2: ""
		}
	}, {
		number: 78,
		name: "Rapidash",
		types: {
			primary: "Fire",
			secondary: ""
		},
		attributes: {
			hp: 65,
			attack: 100,
			defense: 70,
			spAttack: 80,
			spDefense: 80,
			speed: 105
		},
		links: {
			linkBg: "./img/bg-types/Fire-Types.jpg",
			linkImg: "./img/pokemons/078.png",
			linkType1: "./img/types/Fire.png",
			linkType2: ""
		}
	}, {
		number: 78,
		name: "Galarian Rapidash",
		types: {
			primary: "Psychic",
			secondary: "Fairy"
		},
		attributes: {
			hp: 65,
			attack: 100,
			defense: 70,
			spAttack: 80,
			spDefense: 80,
			speed: 105
		},
		links: {
			linkBg: "./img/bg-types/Psychic-Types.jpg",
			linkImg: "./img/pokemons/078G.png",
			linkType1: "./img/types/Psychic.png",
			linkType2: "./img/types/Fairy.png"
		}
	}, {
		number: 79,
		name: "Slowpoke",
		types: {
			primary: "Water",
			secondary: "Psychic"
		},
		attributes: {
			hp: 90,
			attack: 65,
			defense: 65,
			spAttack: 40,
			spDefense: 40,
			speed: 15
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/079.png",
			linkType1: "./img/types/Water.png",
			linkType2: "./img/types/Psychic.png"
		}
	}, {
		number: 79,
		name: "Galarian Slowpoke",
		types: {
			primary: "Psychic",
			secondary: ""
		},
		attributes: {
			hp: 90,
			attack: 65,
			defense: 65,
			spAttack: 40,
			spDefense: 40,
			speed: 15
		},
		links: {
			linkBg: "./img/bg-types/Psychic-Types.jpg",
			linkImg: "./img/pokemons/079G.png",
			linkType1: "./img/types/Psychic.png",
			linkType2: ""
		}
	}, {
		number: 80,
		name: "Slowbro",
		types: {
			primary: "Water",
			secondary: "Psychic"
		},
		attributes: {
			hp: 95,
			attack: 75,
			defense: 110,
			spAttack: 100,
			spDefense: 80,
			speed: 30
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/080.png",
			linkType1: "./img/types/Water.png",
			linkType2: "./img/types/Psychic.png"
		}
	}, {
		number: 80,
		name: "Galarian Slowbro",
		types: {
			primary: "Poison",
			secondary: "Psychic"
		},
		attributes: {
			hp: 95,
			attack: 100,
			defense: 95,
			spAttack: 100,
			spDefense: 70,
			speed: 30
		},
		links: {
			linkBg: "./img/bg-types/Poison-Types.jpg",
			linkImg: "./img/pokemons/080G.png",
			linkType1: "./img/types/Poison.png",
			linkType2: "./img/types/Psychic.png"
		}
	}, {
		number: 80,
		name: "Mega Slowbro",
		types: {
			primary: "Water",
			secondary: "Psychic"
		},
		attributes: {
			hp: 95,
			attack: 75,
			defense: 180,
			spAttack: 130,
			spDefense: 80,
			speed: 30
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/080M.png",
			linkType1: "./img/types/Water.png",
			linkType2: "./img/types/Psychic.png"
		}
	}, {
		number: 81,
		name: "Magnemite",
		types: {
			primary: "Electric",
			secondary: "Steel"
		},
		attributes: {
			hp: 25,
			attack: 35,
			defense: 70,
			spAttack: 95,
			spDefense: 55,
			speed: 45
		},
		links: {
			linkBg: "./img/bg-types/Electric-Types.jpg",
			linkImg: "./img/pokemons/081.png",
			linkType1: "./img/types/Electric.png",
			linkType2: "./img/types/Steel.png"
		}
	}, {
		number: 82,
		name: "Magneton",
		types: {
			primary: "Electric",
			secondary: "Steel"
		},
		attributes: {
			hp: 50,
			attack: 60,
			defense: 95,
			spAttack: 120,
			spDefense: 70,
			speed: 70
		},
		links: {
			linkBg: "./img/bg-types/Electric-Types.jpg",
			linkImg: "./img/pokemons/082.png",
			linkType1: "./img/types/Electric.png",
			linkType2: "./img/types/Steel.png"
		}
	}, {
		number: 83,
		name: "Farfetch'd",
		types: {
			primary: "Normal",
			secondary: "Flying"
		},
		attributes: {
			hp: 52,
			attack: 90,
			defense: 55,
			spAttack: 58,
			spDefense: 62,
			speed: 60
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/083.png",
			linkType1: "./img/types/Normal.png",
			linkType2: "./img/types/Flying.png"
		}
	}, {
		number: 83,
		name: "Galarian Farfetch'd",
		types: {
			primary: "Fighting",
			secondary: ""
		},
		attributes: {
			hp: 52,
			attack: 95,
			defense: 55,
			spAttack: 58,
			spDefense: 62,
			speed: 55
		},
		links: {
			linkBg: "./img/bg-types/Fighting-Types.jpg",
			linkImg: "./img/pokemons/083G.png",
			linkType1: "./img/types/Fighting.png",
			linkType2: ""
		}
	}, {
		number: 84,
		name: "Doduo",
		types: {
			primary: "Normal",
			secondary: "Flying"
		},
		attributes: {
			hp: 35,
			attack: 85,
			defense: 45,
			spAttack: 35,
			spDefense: 35,
			speed: 75
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/084.png",
			linkType1: "./img/types/Normal.png",
			linkType2: "./img/types/Flying.png"
		}
	}, {
		number: 85,
		name: "Dodrio",
		types: {
			primary: "Normal",
			secondary: "Flying"
		},
		attributes: {
			hp: 60,
			attack: 110,
			defense: 70,
			spAttack: 60,
			spDefense: 60,
			speed: 110
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/085.png",
			linkType1: "./img/types/Normal.png",
			linkType2: "./img/types/Flying.png"
		}
	}, {
		number: 86,
		name: "Seel",
		types: {
			primary: "Water",
			secondary: ""
		},
		attributes: {
			hp: 65,
			attack: 45,
			defense: 55,
			spAttack: 45,
			spDefense: 70,
			speed: 45
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/086.png",
			linkType1: "./img/types/Water.png",
			linkType2: ""
		}
	}, {
		number: 87,
		name: "Dewgong",
		types: {
			primary: "Water",
			secondary: "Ice"
		},
		attributes: {
			hp: 90,
			attack: 70,
			defense: 80,
			spAttack: 70,
			spDefense: 95,
			speed: 70
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/087.png",
			linkType1: "./img/types/Water.png",
			linkType2: "./img/types/Ice.png"
		}
	}, {
		number: 88,
		name: "Grimer",
		types: {
			primary: "Poison",
			secondary: ""
		},
		attributes: {
			hp: 80,
			attack: 80,
			defense: 50,
			spAttack: 40,
			spDefense: 50,
			speed: 25
		},
		links: {
			linkBg: "./img/bg-types/Poison-Types.jpg",
			linkImg: "./img/pokemons/088.png",
			linkType1: "./img/types/Poison.png",
			linkType2: ""
		}
	}, {
		number: 88,
		name: "Alolan Grimer",
		types: {
			primary: "Poison",
			secondary: "Dark"
		},
		attributes: {
			hp: 80,
			attack: 80,
			defense: 50,
			spAttack: 40,
			spDefense: 50,
			speed: 25
		},
		links: {
			linkBg: "./img/bg-types/Poison-Types.jpg",
			linkImg: "./img/pokemons/088A.png",
			linkType1: "./img/types/Poison.png",
			linkType2: "./img/types/Dark.png"
		}
	}, {
		number: 89,
		name: "Muk",
		types: {
			primary: "Poison",
			secondary: ""
		},
		attributes: {
			hp: 105,
			attack: 105,
			defense: 75,
			spAttack: 65,
			spDefense: 100,
			speed: 50
		},
		links: {
			linkBg: "./img/bg-types/Poison-Types.jpg",
			linkImg: "./img/pokemons/089.png",
			linkType1: "./img/types/Poison.png",
			linkType2: ""
		}
	}, {
		number: 89,
		name: "Alolan Muk",
		types: {
			primary: "Poison",
			secondary: "Dark"
		},
		attributes: {
			hp: 105,
			attack: 105,
			defense: 75,
			spAttack: 65,
			spDefense: 100,
			speed: 50
		},
		links: {
			linkBg: "./img/bg-types/Poison-Types.jpg",
			linkImg: "./img/pokemons/089A.png",
			linkType1: "./img/types/Poison.png",
			linkType2: "./img/types/Dark.png"
		}
	}, {
		number: 90,
		name: "Shellder",
		types: {
			primary: "Water",
			secondary: ""
		},
		attributes: {
			hp: 30,
			attack: 65,
			defense: 100,
			spAttack: 45,
			spDefense: 25,
			speed: 40
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/090.png",
			linkType1: "./img/types/Water.png",
			linkType2: ""
		}
	}, {
		number: 91,
		name: "Cloyster",
		types: {
			primary: "Water",
			secondary: "Ice"
		},
		attributes: {
			hp: 50,
			attack: 95,
			defense: 180,
			spAttack: 85,
			spDefense: 45,
			speed: 70
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/091.png",
			linkType1: "./img/types/Water.png",
			linkType2: "./img/types/Ice.png"
		}
	}, {
		number: 92,
		name: "Gastly",
		types: {
			primary: "Ghost",
			secondary: "Poison"
		},
		attributes: {
			hp: 30,
			attack: 35,
			defense: 30,
			spAttack: 100,
			spDefense: 35,
			speed: 80
		},
		links: {
			linkBg: "./img/bg-types/Ghost-Types.jpg",
			linkImg: "./img/pokemons/092.png",
			linkType1: "./img/types/Ghost.png",
			linkType2: "./img/types/Poison.png"
		}
	}, {
		number: 93,
		name: "Haunter",
		types: {
			primary: "Ghost",
			secondary: "Poison"
		},
		attributes: {
			hp: 45,
			attack: 50,
			defense: 45,
			spAttack: 115,
			spDefense: 55,
			speed: 95
		},
		links: {
			linkBg: "./img/bg-types/Ghost-Types.jpg",
			linkImg: "./img/pokemons/093.png",
			linkType1: "./img/types/Ghost.png",
			linkType2: "./img/types/Poison.png"
		}
	}, {
		number: 94,
		name: "Gengar",
		types: {
			primary: "Ghost",
			secondary: "Poison"
		},
		attributes: {
			hp: 60,
			attack: 65,
			defense: 60,
			spAttack: 130,
			spDefense: 75,
			speed: 110
		},
		links: {
			linkBg: "./img/bg-types/Ghost-Types.jpg",
			linkImg: "./img/pokemons/094.png",
			linkType1: "./img/types/Ghost.png",
			linkType2: "./img/types/Poison.png"
		}
	}, {
		number: 94,
		name: "GMax Gengar",
		types: {
			primary: "Ghost",
			secondary: "Poison"
		},
		attributes: {
			hp: 60,
			attack: 65,
			defense: 60,
			spAttack: 130,
			spDefense: 75,
			speed: 110
		},
		links: {
			linkBg: "./img/bg-types/Ghost-Types.jpg",
			linkImg: "./img/pokemons/094GMAX.png",
			linkType1: "./img/types/Ghost.png",
			linkType2: "./img/types/Poison.png"
		}
	}, {
		number: 94,
		name: "Mega Gengar",
		types: {
			primary: "Ghost",
			secondary: "Poison"
		},
		attributes: {
			hp: 60,
			attack: 65,
			defense: 80,
			spAttack: 170,
			spDefense: 95,
			speed: 130
		},
		links: {
			linkBg: "./img/bg-types/Ghost-Types.jpg",
			linkImg: "./img/pokemons/094M.png",
			linkType1: "./img/types/Ghost.png",
			linkType2: "./img/types/Poison.png"
		}
	}, {
		number: 95,
		name: "Onix",
		types: {
			primary: "Rock",
			secondary: "Ground"
		},
		attributes: {
			hp: 35,
			attack: 45,
			defense: 160,
			spAttack: 30,
			spDefense: 45,
			speed: 70
		},
		links: {
			linkBg: "./img/bg-types/Rock-Types.jpg",
			linkImg: "./img/pokemons/095.png",
			linkType1: "./img/types/Rock.png",
			linkType2: "./img/types/Ground.png"
		}
	}, {
		number: 96,
		name: "Drowzee",
		types: {
			primary: "Psychic",
			secondary: ""
		},
		attributes: {
			hp: 60,
			attack: 48,
			defense: 45,
			spAttack: 43,
			spDefense: 90,
			speed: 42
		},
		links: {
			linkBg: "./img/bg-types/Psychic-Types.jpg",
			linkImg: "./img/pokemons/096.png",
			linkType1: "./img/types/Psychic.png",
			linkType2: ""
		}
	}, {
		number: 97,
		name: "Hypno",
		types: {
			primary: "Psychic",
			secondary: ""
		},
		attributes: {
			hp: 85,
			attack: 73,
			defense: 70,
			spAttack: 73,
			spDefense: 115,
			speed: 67
		},
		links: {
			linkBg: "./img/bg-types/Psychic-Types.jpg",
			linkImg: "./img/pokemons/097.png",
			linkType1: "./img/types/Psychic.png",
			linkType2: ""
		}
	}, {
		number: 98,
		name: "Krabby",
		types: {
			primary: "Water",
			secondary: ""
		},
		attributes: {
			hp: 30,
			attack: 105,
			defense: 90,
			spAttack: 25,
			spDefense: 25,
			speed: 50
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/098.png",
			linkType1: "./img/types/Water.png",
			linkType2: ""
		}
	}, {
		number: 99,
		name: "Kingler",
		types: {
			primary: "Water",
			secondary: ""
		},
		attributes: {
			hp: 55,
			attack: 130,
			defense: 115,
			spAttack: 50,
			spDefense: 50,
			speed: 75
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/099.png",
			linkType1: "./img/types/Water.png",
			linkType2: ""
		}
	}, {
		number: 99,
		name: "GMax Kingler",
		types: {
			primary: "Water",
			secondary: ""
		},
		attributes: {
			hp: 55,
			attack: 130,
			defense: 115,
			spAttack: 50,
			spDefense: 50,
			speed: 75
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/099GMax.png",
			linkType1: "./img/types/Water.png",
			linkType2: ""
		}
	}, {
		number: 100,
		name: "Voltorb",
		types: {
			primary: "Electric",
			secondary: ""
		},
		attributes: {
			hp: 40,
			attack: 30,
			defense: 50,
			spAttack: 55,
			spDefense: 55,
			speed: 100
		},
		links: {
			linkBg: "./img/bg-types/Electric-Types.jpg",
			linkImg: "./img/pokemons/100.png",
			linkType1: "./img/types/Electric.png",
			linkType2: ""
		}
	}, {
		number: 100,
		name: "Hisuian Voltorb",
		types: {
			primary: "Electric",
			secondary: "Grass"
		},
		attributes: {
			hp: 40,
			attack: 30,
			defense: 50,
			spAttack: 55,
			spDefense: 55,
			speed: 100
		},
		links: {
			linkBg: "./img/bg-types/Electric-Types.jpg",
			linkImg: "./img/pokemons/100H.png",
			linkType1: "./img/types/Electric.png",
			linkType2: "./img/types/Grass.png"
		}
	}, {
		number: 101,
		name: "Electrode",
		types: {
			primary: "Electric",
			secondary: ""
		},
		attributes: {
			hp: 60,
			attack: 50,
			defense: 70,
			spAttack: 80,
			spDefense: 80,
			speed: 150
		},
		links: {
			linkBg: "./img/bg-types/Electric-Types.jpg",
			linkImg: "./img/pokemons/101.png",
			linkType1: "./img/types/Electric.png",
			linkType2: ""
		}
	}, {
		number: 101,
		name: "Hisuian Electrode",
		types: {
			primary: "Electric",
			secondary: "Grass"
		},
		attributes: {
			hp: 60,
			attack: 50,
			defense: 70,
			spAttack: 80,
			spDefense: 80,
			speed: 150
		},
		links: {
			linkBg: "./img/bg-types/Electric-Types.jpg",
			linkImg: "./img/pokemons/101H.png",
			linkType1: "./img/types/Electric.png",
			linkType2: "./img/types/Grass.png"
		}
	}, {
		number: 102,
		name: "Exeggcute",
		types: {
			primary: "Grass",
			secondary: "Psychic"
		},
		attributes: {
			hp: 60,
			attack: 40,
			defense: 80,
			spAttack: 60,
			spDefense: 45,
			speed: 40
		},
		links: {
			linkBg: "./img/bg-types/Grass-Types.jpg",
			linkImg: "./img/pokemons/102.png",
			linkType1: "./img/types/Grass.png",
			linkType2: "./img/types/Psychic.png"
		}
	}, {
		number: 103,
		name: "Exeggutor",
		types: {
			primary: "Grass",
			secondary: "Psychic"
		},
		attributes: {
			hp: 95,
			attack: 95,
			defense: 85,
			spAttack: 125,
			spDefense: 75,
			speed: 55
		},
		links: {
			linkBg: "./img/bg-types/Grass-Types.jpg",
			linkImg: "./img/pokemons/103.png",
			linkType1: "./img/types/Grass.png",
			linkType2: "./img/types/Psychic.png"
		}
	}, {
		number: 103,
		name: "Alolan Exeggutor",
		types: {
			primary: "Grass",
			secondary: "Dragon"
		},
		attributes: {
			hp: 95,
			attack: 105,
			defense: 85,
			spAttack: 125,
			spDefense: 75,
			speed: 45
		},
		links: {
			linkBg: "./img/bg-types/Grass-Types.jpg",
			linkImg: "./img/pokemons/103A.png",
			linkType1: "./img/types/Grass.png",
			linkType2: "./img/types/Dragon.png"
		}
	}, {
		number: 104,
		name: "Cubone",
		types: {
			primary: "Ground",
			secondary: ""
		},
		attributes: {
			hp: 50,
			attack: 50,
			defense: 95,
			spAttack: 40,
			spDefense: 50,
			speed: 35
		},
		links: {
			linkBg: "./img/bg-types/Ground-Types.jpg",
			linkImg: "./img/pokemons/104.png",
			linkType1: "./img/types/Ground.png",
			linkType2: ""
		}
	}, {
		number: 105,
		name: "Marowak",
		types: {
			primary: "Ground",
			secondary: ""
		},
		attributes: {
			hp: 60,
			attack: 80,
			defense: 110,
			spAttack: 50,
			spDefense: 80,
			speed: 45
		},
		links: {
			linkBg: "./img/bg-types/Ground-Types.jpg",
			linkImg: "./img/pokemons/105.png",
			linkType1: "./img/types/Ground.png",
			linkType2: ""
		}
	}, {
		number: 105,
		name: "Alolan Marowak",
		types: {
			primary: "Fire",
			secondary: "Ghost"
		},
		attributes: {
			hp: 60,
			attack: 80,
			defense: 110,
			spAttack: 50,
			spDefense: 80,
			speed: 45
		},
		links: {
			linkBg: "./img/bg-types/Fire-Types.jpg",
			linkImg: "./img/pokemons/105A.png",
			linkType1: "./img/types/Fire.png",
			linkType2: "./img/types/Ghost.png"
		}
	}, {
		number: 106,
		name: "Hitmonlee",
		types: {
			primary: "Fighting",
			secondary: ""
		},
		attributes: {
			hp: 50,
			attack: 120,
			defense: 53,
			spAttack: 35,
			spDefense: 110,
			speed: 87
		},
		links: {
			linkBg: "./img/bg-types/Fighting-Types.jpg",
			linkImg: "./img/pokemons/106.png",
			linkType1: "./img/types/Fighting.png",
			linkType2: ""
		}
	}, {
		number: 107,
		name: "Hitmonchan",
		types: {
			primary: "Fighting",
			secondary: ""
		},
		attributes: {
			hp: 50,
			attack: 105,
			defense: 79,
			spAttack: 35,
			spDefense: 110,
			speed: 76
		},
		links: {
			linkBg: "./img/bg-types/Fighting-Types.jpg",
			linkImg: "./img/pokemons/107.png",
			linkType1: "./img/types/Fighting.png",
			linkType2: ""
		}
	}, {
		number: 108,
		name: "Lickitung",
		types: {
			primary: "Normal",
			secondary: ""
		},
		attributes: {
			hp: 90,
			attack: 55,
			defense: 75,
			spAttack: 60,
			spDefense: 75,
			speed: 30
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/108.png",
			linkType1: "./img/types/Normal.png",
			linkType2: ""
		}
	}, {
		number: 109,
		name: "Koffing",
		types: {
			primary: "Poison",
			secondary: ""
		},
		attributes: {
			hp: 40,
			attack: 65,
			defense: 95,
			spAttack: 60,
			spDefense: 45,
			speed: 35
		},
		links: {
			linkBg: "./img/bg-types/Poison-Types.jpg",
			linkImg: "./img/pokemons/109.png",
			linkType1: "./img/types/Poison.png",
			linkType2: ""
		}
	}, {
		number: 110,
		name: "Weezing",
		types: {
			primary: "Poison",
			secondary: ""
		},
		attributes: {
			hp: 65,
			attack: 90,
			defense: 120,
			spAttack: 85,
			spDefense: 70,
			speed: 60
		},
		links: {
			linkBg: "./img/bg-types/Poison-Types.jpg",
			linkImg: "./img/pokemons/110.png",
			linkType1: "./img/types/Poison.png",
			linkType2: ""
		}
	}, {
		number: 110,
		name: "Galarian Weezing",
		types: {
			primary: "Poison",
			secondary: "Fairy"
		},
		attributes: {
			hp: 65,
			attack: 90,
			defense: 120,
			spAttack: 85,
			spDefense: 70,
			speed: 60
		},
		links: {
			linkBg: "./img/bg-types/Poison-Types.jpg",
			linkImg: "./img/pokemons/110G.png",
			linkType1: "./img/types/Poison.png",
			linkType2: "./img/types/Fairy.png"
		}
	}, {
		number: 111,
		name: "Rhyhorn",
		types: {
			primary: "Ground",
			secondary: "Rock"
		},
		attributes: {
			hp: 80,
			attack: 85,
			defense: 95,
			spAttack: 30,
			spDefense: 30,
			speed: 25
		},
		links: {
			linkBg: "./img/bg-types/Ground-Types.jpg",
			linkImg: "./img/pokemons/111.png",
			linkType1: "./img/types/Ground.png",
			linkType2: "./img/types/Rock.png"
		}
	}, {
		number: 112,
		name: "Rhydon",
		types: {
			primary: "Ground",
			secondary: "Rock"
		},
		attributes: {
			hp: 105,
			attack: 130,
			defense: 120,
			spAttack: 45,
			spDefense: 45,
			speed: 40
		},
		links: {
			linkBg: "./img/bg-types/Ground-Types.jpg",
			linkImg: "./img/pokemons/112.png",
			linkType1: "./img/types/Ground.png",
			linkType2: "./img/types/Rock.png"
		}
	}, {
		number: 113,
		name: "Chansey",
		types: {
			primary: "Normal",
			secondary: ""
		},
		attributes: {
			hp: 250,
			attack: 5,
			defense: 5,
			spAttack: 35,
			spDefense: 105,
			speed: 50
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/113.png",
			linkType1: "./img/types/Normal.png",
			linkType2: ""
		}
	}, {
		number: 114,
		name: "Tangela",
		types: {
			primary: "Grass",
			secondary: ""
		},
		attributes: {
			hp: 65,
			attack: 55,
			defense: 115,
			spAttack: 100,
			spDefense: 40,
			speed: 60
		},
		links: {
			linkBg: "./img/bg-types/Grass-Types.jpg",
			linkImg: "./img/pokemons/114.png",
			linkType1: "./img/types/Grass.png",
			linkType2: ""
		}
	}, {
		number: 115,
		name: "Kangaskhan",
		types: {
			primary: "Normal",
			secondary: ""
		},
		attributes: {
			hp: 105,
			attack: 95,
			defense: 80,
			spAttack: 40,
			spDefense: 80,
			speed: 90
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/115.png",
			linkType1: "./img/types/Normal.png",
			linkType2: ""
		}
	}, {
		number: 115,
		name: "Mega Kangaskhan",
		types: {
			primary: "Normal",
			secondary: ""
		},
		attributes: {
			hp: 105,
			attack: 125,
			defense: 100,
			spAttack: 60,
			spDefense: 100,
			speed: 100
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/115M.png",
			linkType1: "./img/types/Normal.png",
			linkType2: ""
		}
	}, {
		number: 116,
		name: "Horsea",
		types: {
			primary: "Water",
			secondary: ""
		},
		attributes: {
			hp: 30,
			attack: 40,
			defense: 70,
			spAttack: 70,
			spDefense: 25,
			speed: 60
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/116.png",
			linkType1: "./img/types/Water.png",
			linkType2: ""
		}
	}, {
		number: 117,
		name: "Seadra",
		types: {
			primary: "Water",
			secondary: ""
		},
		attributes: {
			hp: 55,
			attack: 65,
			defense: 95,
			spAttack: 95,
			spDefense: 45,
			speed: 85
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/117.png",
			linkType1: "./img/types/Water.png",
			linkType2: ""
		}
	}, {
		number: 118,
		name: "Goldeen",
		types: {
			primary: "Water",
			secondary: ""
		},
		attributes: {
			hp: 45,
			attack: 67,
			defense: 60,
			spAttack: 35,
			spDefense: 50,
			speed: 63
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/118.png",
			linkType1: "./img/types/Water.png",
			linkType2: ""
		}
	}, {
		number: 119,
		name: "Seaking",
		types: {
			primary: "Water",
			secondary: ""
		},
		attributes: {
			hp: 80,
			attack: 92,
			defense: 65,
			spAttack: 65,
			spDefense: 80,
			speed: 68
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/119.png",
			linkType1: "./img/types/Water.png",
			linkType2: ""
		}
	}, {
		number: 120,
		name: "Staryu",
		types: {
			primary: "Water",
			secondary: ""
		},
		attributes: {
			hp: 30,
			attack: 45,
			defense: 55,
			spAttack: 70,
			spDefense: 55,
			speed: 85
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/120.png",
			linkType1: "./img/types/Water.png",
			linkType2: ""
		}
	}, {
		number: 121,
		name: "Starmie",
		types: {
			primary: "Water",
			secondary: "Psychic"
		},
		attributes: {
			hp: 60,
			attack: 75,
			defense: 85,
			spAttack: 100,
			spDefense: 85,
			speed: 115
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/121.png",
			linkType1: "./img/types/Water.png",
			linkType2: "./img/types/Psychic.png"
		}
	}, {
		number: 122,
		name: "Mr. Mime",
		types: {
			primary: "Psychic",
			secondary: "Fairy"
		},
		attributes: {
			hp: 40,
			attack: 45,
			defense: 65,
			spAttack: 100,
			spDefense: 120,
			speed: 90
		},
		links: {
			linkBg: "./img/bg-types/Psychic-Types.jpg",
			linkImg: "./img/pokemons/122.png",
			linkType1: "./img/types/Psychic.png",
			linkType2: "./img/types/Fairy.png"
		}
	}, {
		number: 122,
		name: "Galarian Mr. Mime",
		types: {
			primary: "Ice",
			secondary: "Psychic"
		},
		attributes: {
			hp: 50,
			attack: 65,
			defense: 65,
			spAttack: 90,
			spDefense: 90,
			speed: 100
		},
		links: {
			linkBg: "./img/bg-types/Ice-Types.jpg",
			linkImg: "./img/pokemons/122G.png",
			linkType1: "./img/types/Ice.png",
			linkType2: "./img/types/Psychic.png"
		}
	}, {
		number: 123,
		name: "Scyther",
		types: {
			primary: "Bug",
			secondary: "Flying"
		},
		attributes: {
			hp: 70,
			attack: 110,
			defense: 80,
			spAttack: 55,
			spDefense: 80,
			speed: 105
		},
		links: {
			linkBg: "./img/bg-types/Bug-Types.jpg",
			linkImg: "./img/pokemons/123.png",
			linkType1: "./img/types/Bug.png",
			linkType2: "./img/types/Flying.png"
		}
	}, {
		number: 124,
		name: "Jynx",
		types: {
			primary: "Ice",
			secondary: "Psychic"
		},
		attributes: {
			hp: 65,
			attack: 50,
			defense: 35,
			spAttack: 115,
			spDefense: 95,
			speed: 95
		},
		links: {
			linkBg: "./img/bg-types/Ice-Types.jpg",
			linkImg: "./img/pokemons/124.png",
			linkType1: "./img/types/Ice.png",
			linkType2: "./img/types/Psychic.png"
		}
	}, {
		number: 125,
		name: "Electabuzz",
		types: {
			primary: "Electric",
			secondary: ""
		},
		attributes: {
			hp: 65,
			attack: 83,
			defense: 57,
			spAttack: 95,
			spDefense: 85,
			speed: 105
		},
		links: {
			linkBg: "./img/bg-types/Electric-Types.jpg",
			linkImg: "./img/pokemons/125.png",
			linkType1: "./img/types/Electric.png",
			linkType2: ""
		}
	}, {
		number: 126,
		name: "Magmar",
		types: {
			primary: "Fire",
			secondary: ""
		},
		attributes: {
			hp: 65,
			attack: 95,
			defense: 57,
			spAttack: 100,
			spDefense: 85,
			speed: 93
		},
		links: {
			linkBg: "./img/bg-types/Fire-Types.jpg",
			linkImg: "./img/pokemons/126.png",
			linkType1: "./img/types/Fire.png",
			linkType2: ""
		}
	}, {
		number: 127,
		name: "Pinsir",
		types: {
			primary: "Bug",
			secondary: ""
		},
		attributes: {
			hp: 65,
			attack: 125,
			defense: 100,
			spAttack: 55,
			spDefense: 70,
			speed: 85
		},
		links: {
			linkBg: "./img/bg-types/Bug-Types.jpg",
			linkImg: "./img/pokemons/127.png",
			linkType1: "./img/types/Bug.png",
			linkType2: ""
		}
	}, {
		number: 127,
		name: "Mega Pinsir",
		types: {
			primary: "Bug",
			secondary: "Flying"
		},
		attributes: {
			hp: 65,
			attack: 155,
			defense: 120,
			spAttack: 65,
			spDefense: 90,
			speed: 105
		},
		links: {
			linkBg: "./img/bg-types/Bug-Types.jpg",
			linkImg: "./img/pokemons/127M.png",
			linkType1: "./img/types/Bug.png",
			linkType2: "./img/types/Flying.png"
		}
	}, {
		number: 128,
		name: "Tauros",
		types: {
			primary: "Normal",
			secondary: ""
		},
		attributes: {
			hp: 75,
			attack: 100,
			defense: 95,
			spAttack: 40,
			spDefense: 70,
			speed: 110
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/128.png",
			linkType1: "./img/types/Normal.png",
			linkType2: ""
		}
	}, {
		number: 129,
		name: "Magikarp",
		types: {
			primary: "Water",
			secondary: ""
		},
		attributes: {
			hp: 20,
			attack: 10,
			defense: 55,
			spAttack: 15,
			spDefense: 20,
			speed: 80
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/129.png",
			linkType1: "./img/types/Water.png",
			linkType2: ""
		}
	}, {
		number: 130,
		name: "Gyarados",
		types: {
			primary: "Water",
			secondary: "Flying"
		},
		attributes: {
			hp: 95,
			attack: 125,
			defense: 79,
			spAttack: 60,
			spDefense: 100,
			speed: 81
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/130.png",
			linkType1: "./img/types/Water.png",
			linkType2: "./img/types/Flying.png"
		}
	}, {
		number: 130,
		name: "Mega Gyarados",
		types: {
			primary: "Water",
			secondary: "Dark"
		},
		attributes: {
			hp: 95,
			attack: 155,
			defense: 109,
			spAttack: 70,
			spDefense: 130,
			speed: 81
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/130M.png",
			linkType1: "./img/types/Water.png",
			linkType2: "./img/types/Dark.png"
		}
	}, {
		number: 131,
		name: "Lapras",
		types: {
			primary: "Water",
			secondary: "Ice"
		},
		attributes: {
			hp: 130,
			attack: 85,
			defense: 80,
			spAttack: 85,
			spDefense: 95,
			speed: 60
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/131.png",
			linkType1: "./img/types/Water.png",
			linkType2: "./img/types/Ice.png"
		}
	}, {
		number: 131,
		name: "GMax Lapras",
		types: {
			primary: "Water",
			secondary: "Ice"
		},
		attributes: {
			hp: 130,
			attack: 85,
			defense: 80,
			spAttack: 85,
			spDefense: 95,
			speed: 60
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/131GMAX.png",
			linkType1: "./img/types/Water.png",
			linkType2: "./img/types/Ice.png"
		}
	}, {
		number: 132,
		name: "Ditto",
		types: {
			primary: "Normal",
			secondary: ""
		},
		attributes: {
			hp: 48,
			attack: 48,
			defense: 48,
			spAttack: 48,
			spDefense: 48,
			speed: 48
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/132.png",
			linkType1: "./img/types/Normal.png",
			linkType2: ""
		}
	}, {
		number: 133,
		name: "Eevee",
		types: {
			primary: "Normal",
			secondary: ""
		},
		attributes: {
			hp: 55,
			attack: 55,
			defense: 50,
			spAttack: 45,
			spDefense: 65,
			speed: 55
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/133.png",
			linkType1: "./img/types/Normal.png",
			linkType2: ""
		}
	}, {
		number: 133,
		name: "GMax Eevee",
		types: {
			primary: "Normal",
			secondary: ""
		},
		attributes: {
			hp: 55,
			attack: 55,
			defense: 50,
			spAttack: 45,
			spDefense: 65,
			speed: 55
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/133GMAX.png",
			linkType1: "./img/types/Normal.png",
			linkType2: ""
		}
	}, {
		number: 133,
		name: "Partner Eevee",
		types: {
			primary: "Normal",
			secondary: ""
		},
		attributes: {
			hp: 65,
			attack: 75,
			defense: 70,
			spAttack: 65,
			spDefense: 85,
			speed: 75
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/133LG.png",
			linkType1: "./img/types/Normal.png",
			linkType2: ""
		}
	}, {
		number: 134,
		name: "Vaporeon",
		types: {
			primary: "Water",
			secondary: ""
		},
		attributes: {
			hp: 130,
			attack: 65,
			defense: 60,
			spAttack: 110,
			spDefense: 95,
			speed: 65
		},
		links: {
			linkBg: "./img/bg-types/Water-Types.jpg",
			linkImg: "./img/pokemons/134.png",
			linkType1: "./img/types/Water.png",
			linkType2: ""
		}
	}, {
		number: 135,
		name: "Jolteon",
		types: {
			primary: "Electric",
			secondary: ""
		},
		attributes: {
			hp: 65,
			attack: 65,
			defense: 60,
			spAttack: 110,
			spDefense: 95,
			speed: 130
		},
		links: {
			linkBg: "./img/bg-types/Electric-Types.jpg",
			linkImg: "./img/pokemons/135.png",
			linkType1: "./img/types/Electric.png",
			linkType2: ""
		}
	}, {
		number: 136,
		name: "Flareon",
		types: {
			primary: "Fire",
			secondary: ""
		},
		attributes: {
			hp: 65,
			attack: 130,
			defense: 60,
			spAttack: 95,
			spDefense: 110,
			speed: 65
		},
		links: {
			linkBg: "./img/bg-types/Fire-Types.jpg",
			linkImg: "./img/pokemons/136.png",
			linkType1: "./img/types/Fire.png",
			linkType2: ""
		}
	}, {
		number: 137,
		name: "Porygon",
		types: {
			primary: "Normal",
			secondary: ""
		},
		attributes: {
			hp: 65,
			attack: 60,
			defense: 70,
			spAttack: 85,
			spDefense: 75,
			speed: 40
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/137.png",
			linkType1: "./img/types/Normal.png",
			linkType2: ""
		}
	}, {
		number: 138,
		name: "Omanyte",
		types: {
			primary: "Rock",
			secondary: "Water"
		},
		attributes: {
			hp: 35,
			attack: 40,
			defense: 100,
			spAttack: 90,
			spDefense: 55,
			speed: 35
		},
		links: {
			linkBg: "./img/bg-types/Rock-Types.jpg",
			linkImg: "./img/pokemons/138.png",
			linkType1: "./img/types/Rock.png",
			linkType2: "./img/types/Water.png"
		}
	}, {
		number: 139,
		name: "Omastar",
		types: {
			primary: "Rock",
			secondary: "Water"
		},
		attributes: {
			hp: 70,
			attack: 60,
			defense: 125,
			spAttack: 115,
			spDefense: 70,
			speed: 55
		},
		links: {
			linkBg: "./img/bg-types/Rock-Types.jpg",
			linkImg: "./img/pokemons/139.png",
			linkType1: "./img/types/Rock.png",
			linkType2: "./img/types/Water.png"
		}
	}, {
		number: 140,
		name: "Kabuto",
		types: {
			primary: "Rock",
			secondary: "Water"
		},
		attributes: {
			hp: 30,
			attack: 80,
			defense: 90,
			spAttack: 55,
			spDefense: 45,
			speed: 55
		},
		links: {
			linkBg: "./img/bg-types/Rock-Types.jpg",
			linkImg: "./img/pokemons/140.png",
			linkType1: "./img/types/Rock.png",
			linkType2: "./img/types/Water.png"
		}
	}, {
		number: 141,
		name: "Kabutops",
		types: {
			primary: "Rock",
			secondary: "Water"
		},
		attributes: {
			hp: 60,
			attack: 115,
			defense: 105,
			spAttack: 65,
			spDefense: 70,
			speed: 80
		},
		links: {
			linkBg: "./img/bg-types/Rock-Types.jpg",
			linkImg: "./img/pokemons/141.png",
			linkType1: "./img/types/Rock.png",
			linkType2: "./img/types/Water.png"
		}
	}, {
		number: 142,
		name: "Aerodactyl",
		types: {
			primary: "Rock",
			secondary: "Flying"
		},
		attributes: {
			hp: 80,
			attack: 105,
			defense: 65,
			spAttack: 60,
			spDefense: 75,
			speed: 130
		},
		links: {
			linkBg: "./img/bg-types/Rock-Types.jpg",
			linkImg: "./img/pokemons/142.png",
			linkType1: "./img/types/Rock.png",
			linkType2: "./img/types/Flying.png"
		}
	}, {
		number: 142,
		name: "Mega Aerodactyl",
		types: {
			primary: "Rock",
			secondary: "Flying"
		},
		attributes: {
			hp: 80,
			attack: 135,
			defense: 85,
			spAttack: 70,
			spDefense: 95,
			speed: 150
		},
		links: {
			linkBg: "./img/bg-types/Rock-Types.jpg",
			linkImg: "./img/pokemons/142M.png",
			linkType1: "./img/types/Rock.png",
			linkType2: "./img/types/Flying.png"
		}
	}, {
		number: 143,
		name: "Snorlax",
		types: {
			primary: "Normal",
			secondary: ""
		},
		attributes: {
			hp: 160,
			attack: 110,
			defense: 65,
			spAttack: 65,
			spDefense: 110,
			speed: 30
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/143.png",
			linkType1: "./img/types/Normal.png",
			linkType2: ""
		}
	}, {
		number: 143,
		name: "GMax Snorlax",
		types: {
			primary: "Normal",
			secondary: ""
		},
		attributes: {
			hp: 160,
			attack: 110,
			defense: 65,
			spAttack: 65,
			spDefense: 110,
			speed: 30
		},
		links: {
			linkBg: "./img/bg-types/Normal-Types.jpg",
			linkImg: "./img/pokemons/143GMAX.png",
			linkType1: "./img/types/Normal.png",
			linkType2: ""
		}
	}, {
		number: 144,
		name: "Articuno",
		types: {
			primary: "Ice",
			secondary: "Flying"
		},
		attributes: {
			hp: 90,
			attack: 85,
			defense: 100,
			spAttack: 95,
			spDefense: 125,
			speed: 85
		},
		links: {
			linkBg: "./img/bg-types/Ice-Types.jpg",
			linkImg: "./img/pokemons/144.png",
			linkType1: "./img/types/Ice.png",
			linkType2: "./img/types/Flying.png"
		}
	}, {
		number: 144,
		name: "Galarian Articuno",
		types: {
			primary: "Psychic",
			secondary: "Flying"
		},
		attributes: {
			hp: 90,
			attack: 85,
			defense: 85,
			spAttack: 125,
			spDefense: 100,
			speed: 95
		},
		links: {
			linkBg: "./img/bg-types/Psychic-Types.jpg",
			linkImg: "./img/pokemons/144G.png",
			linkType1: "./img/types/Psychic.png",
			linkType2: "./img/types/Flying.png"
		}
	}, {
		number: 145,
		name: "Zapdos",
		types: {
			primary: "Electric",
			secondary: "Flying"
		},
		attributes: {
			hp: 90,
			attack: 90,
			defense: 85,
			spAttack: 125,
			spDefense: 90,
			speed: 100
		},
		links: {
			linkBg: "./img/bg-types/Electric-Types.jpg",
			linkImg: "./img/pokemons/145.png",
			linkType1: "./img/types/Electric.png",
			linkType2: "./img/types/Flying.png"
		}
	}, {
		number: 145,
		name: "Galarian Zapdos",
		types: {
			primary: "Fighting",
			secondary: "Flying"
		},
		attributes: {
			hp: 90,
			attack: 125,
			defense: 90,
			spAttack: 85,
			spDefense: 90,
			speed: 100
		},
		links: {
			linkBg: "./img/bg-types/Fighting-Types.jpg",
			linkImg: "./img/pokemons/145G.png",
			linkType1: "./img/types/Fighting.png",
			linkType2: "./img/types/Flying.png"
		}
	}, {
		number: 146,
		name: "Moltres",
		types: {
			primary: "Fire",
			secondary: "Flying"
		},
		attributes: {
			hp: 90,
			attack: 100,
			defense: 90,
			spAttack: 125,
			spDefense: 85,
			speed: 90
		},
		links: {
			linkBg: "./img/bg-types/Fire-Types.jpg",
			linkImg: "./img/pokemons/146.png",
			linkType1: "./img/types/Fire.png",
			linkType2: "./img/types/Flying.png"
		}
	}, {
		number: 146,
		name: "Galarian Moltres",
		types: {
			primary: "Dark",
			secondary: "Flying"
		},
		attributes: {
			hp: 90,
			attack: 85,
			defense: 90,
			spAttack: 100,
			spDefense: 125,
			speed: 90
		},
		links: {
			linkBg: "./img/bg-types/Dark-Types.jpg",
			linkImg: "./img/pokemons/146G.png",
			linkType1: "./img/types/Dark.png",
			linkType2: "./img/types/Flying.png"
		}
	}, {
		number: 147,
		name: "Dratini",
		types: {
			primary: "Dragon",
			secondary: ""
		},
		attributes: {
			hp: 41,
			attack: 64,
			defense: 45,
			spAttack: 50,
			spDefense: 50,
			speed: 50
		},
		links: {
			linkBg: "./img/bg-types/Dragon-Types.jpg",
			linkImg: "./img/pokemons/147.png",
			linkType1: "./img/types/Dragon.png",
			linkType2: ""
		}
	}, {
		number: 148,
		name: "Dragonair",
		types: {
			primary: "Dragon",
			secondary: ""
		},
		attributes: {
			hp: 61,
			attack: 84,
			defense: 65,
			spAttack: 70,
			spDefense: 70,
			speed: 70
		},
		links: {
			linkBg: "./img/bg-types/Dragon-Types.jpg",
			linkImg: "./img/pokemons/148.png",
			linkType1: "./img/types/Dragon.png",
			linkType2: ""
		}
	}, {
		number: 149,
		name: "Dragonite",
		types: {
			primary: "Dragon",
			secondary: "Flying"
		},
		attributes: {
			hp: 91,
			attack: 134,
			defense: 95,
			spAttack: 100,
			spDefense: 100,
			speed: 80
		},
		links: {
			linkBg: "./img/bg-types/Dragon-Types.jpg",
			linkImg: "./img/pokemons/149.png",
			linkType1: "./img/types/Dragon.png",
			linkType2: "./img/types/Flying.png"
		}
	}, {
		number: 150,
		name: "Mewtwo",
		types: {
			primary: "Psychic",
			secondary: ""
		},
		attributes: {
			hp: 106,
			attack: 110,
			defense: 90,
			spAttack: 154,
			spDefense: 90,
			speed: 130
		},
		links: {
			linkBg: "./img/bg-types/Psychic-Types.jpg",
			linkImg: "./img/pokemons/150.png",
			linkType1: "./img/types/Psychic.png",
			linkType2: ""
		}
	}, {
		number: 150,
		name: "Mega Mewtwo X",
		types: {
			primary: "Psychic",
			secondary: "Fighting"
		},
		attributes: {
			hp: 106,
			attack: 190,
			defense: 100,
			spAttack: 154,
			spDefense: 100,
			speed: 130
		},
		links: {
			linkBg: "./img/bg-types/Psychic-Types.jpg",
			linkImg: "./img/pokemons/150M-X.png",
			linkType1: "./img/types/Psychic.png",
			linkType2: "./img/types/Fighting.png"
		}
	}, {
		number: 150,
		name: "Mega Mewtwo Y",
		types: {
			primary: "Psychic",
			secondary: ""
		},
		attributes: {
			hp: 106,
			attack: 150,
			defense: 70,
			spAttack: 194,
			spDefense: 120,
			speed: 140
		},
		links: {
			linkBg: "./img/bg-types/Psychic-Types.jpg",
			linkImg: "./img/pokemons/150M-Y.png",
			linkType1: "./img/types/Psychic.png",
			linkType2: ""
		}
	}, {
		number: 151,
		name: "Mew",
		types: {
			primary: "Psychic",
			secondary: ""
		},
		attributes: {
			hp: 100,
			attack: 100,
			defense: 100,
			spAttack: 100,
			spDefense: 100,
			speed: 100
		},
		links: {
			linkBg: "./img/bg-types/Psychic-Types.jpg",
			linkImg: "./img/pokemons/151.png",
			linkType1: "./img/types/Psychic.png",
			linkType2: ""
		}
	}
	];

	return data;
}