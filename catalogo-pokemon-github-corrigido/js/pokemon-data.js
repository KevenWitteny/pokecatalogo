const POKEMONS = [
  {
    "id": 1,
    "name": "Bulbasaur",
    "types": [
      "grass",
      "poison"
    ],
    "typesPt": [
      "Planta",
      "Venenoso"
    ],
    "description": "Há uma semente de planta em suas costas desde o dia em que este Pokémon nasceu. A semente cresce lentamente.",
    "stats": {
      "HP": 45,
      "Ataque": 49,
      "Defesa": 49,
      "Sp. Atq": 65,
      "Sp. Def": 65,
      "Velocidade": 45,
      "Total": 318
    }
  },
  {
    "id": 2,
    "name": "Ivysaur",
    "types": [
      "grass",
      "poison"
    ],
    "typesPt": [
      "Planta",
      "Venenoso"
    ],
    "description": "Quando o bulbo nas costas cresce, parece perder a capacidade de ficar de pé nas patas traseiras.",
    "stats": {
      "HP": 60,
      "Ataque": 62,
      "Defesa": 63,
      "Sp. Atq": 80,
      "Sp. Def": 80,
      "Velocidade": 60,
      "Total": 405
    }
  },
  {
    "id": 3,
    "name": "Venusaur",
    "types": [
      "grass",
      "poison"
    ],
    "typesPt": [
      "Planta",
      "Venenoso"
    ],
    "description": "A flor em suas costas libera um aroma suave. O aroma acalma as emoções de quem está por perto.",
    "stats": {
      "HP": 80,
      "Ataque": 82,
      "Defesa": 83,
      "Sp. Atq": 100,
      "Sp. Def": 100,
      "Velocidade": 80,
      "Total": 525
    }
  },
  {
    "id": 4,
    "name": "Charmander",
    "types": [
      "fire"
    ],
    "typesPt": [
      "Fogo"
    ],
    "description": "A chama na ponta de sua cauda mostra sua força vital. Se estiver fraco, a chama fica pequena.",
    "stats": {
      "HP": 39,
      "Ataque": 52,
      "Defesa": 43,
      "Sp. Atq": 60,
      "Sp. Def": 50,
      "Velocidade": 65,
      "Total": 309
    }
  },
  {
    "id": 5,
    "name": "Charmeleon",
    "types": [
      "fire"
    ],
    "typesPt": [
      "Fogo"
    ],
    "description": "Tem natureza agressiva. Em batalha, balança sua cauda flamejante e corta com garras afiadas.",
    "stats": {
      "HP": 58,
      "Ataque": 64,
      "Defesa": 58,
      "Sp. Atq": 80,
      "Sp. Def": 65,
      "Velocidade": 80,
      "Total": 405
    }
  },
  {
    "id": 6,
    "name": "Charizard",
    "types": [
      "fire",
      "flying"
    ],
    "typesPt": [
      "Fogo",
      "Voador"
    ],
    "description": "Cospe fogo quente o suficiente para derreter rochas. Suas asas permitem voar por grandes alturas.",
    "stats": {
      "HP": 78,
      "Ataque": 84,
      "Defesa": 78,
      "Sp. Atq": 109,
      "Sp. Def": 85,
      "Velocidade": 100,
      "Total": 534
    }
  },
  {
    "id": 7,
    "name": "Squirtle",
    "types": [
      "water"
    ],
    "typesPt": [
      "Água"
    ],
    "description": "Quando se sente ameaçado, retrai-se para dentro do casco e dispara jatos de água.",
    "stats": {
      "HP": 44,
      "Ataque": 48,
      "Defesa": 65,
      "Sp. Atq": 50,
      "Sp. Def": 64,
      "Velocidade": 43,
      "Total": 314
    }
  },
  {
    "id": 8,
    "name": "Wartortle",
    "types": [
      "water"
    ],
    "typesPt": [
      "Água"
    ],
    "description": "É reconhecido por sua cauda felpuda, símbolo de longevidade e experiência em batalha.",
    "stats": {
      "HP": 59,
      "Ataque": 63,
      "Defesa": 80,
      "Sp. Atq": 65,
      "Sp. Def": 80,
      "Velocidade": 58,
      "Total": 405
    }
  },
  {
    "id": 9,
    "name": "Blastoise",
    "types": [
      "water"
    ],
    "typesPt": [
      "Água"
    ],
    "description": "Os canhões em seu casco disparam jatos de água poderosos com grande precisão.",
    "stats": {
      "HP": 79,
      "Ataque": 83,
      "Defesa": 100,
      "Sp. Atq": 85,
      "Sp. Def": 105,
      "Velocidade": 78,
      "Total": 530
    }
  },
  {
    "id": 10,
    "name": "Caterpie",
    "types": [
      "bug"
    ],
    "typesPt": [
      "Inseto"
    ],
    "description": "Seus pés têm ventosas que permitem subir árvores e folhas sem escorregar.",
    "stats": {
      "HP": 45,
      "Ataque": 30,
      "Defesa": 35,
      "Sp. Atq": 20,
      "Sp. Def": 20,
      "Velocidade": 45,
      "Total": 195
    }
  },
  {
    "id": 11,
    "name": "Metapod",
    "types": [
      "bug"
    ],
    "typesPt": [
      "Inseto"
    ],
    "description": "Sua casca é dura, mas o interior é macio. Ele espera a evolução enquanto se protege.",
    "stats": {
      "HP": 50,
      "Ataque": 20,
      "Defesa": 55,
      "Sp. Atq": 25,
      "Sp. Def": 25,
      "Velocidade": 30,
      "Total": 205
    }
  },
  {
    "id": 12,
    "name": "Butterfree",
    "types": [
      "bug",
      "flying"
    ],
    "typesPt": [
      "Inseto",
      "Voador"
    ],
    "description": "Bate suas asas rapidamente para espalhar pólen fino e causar efeitos variados.",
    "stats": {
      "HP": 60,
      "Ataque": 45,
      "Defesa": 50,
      "Sp. Atq": 90,
      "Sp. Def": 80,
      "Velocidade": 70,
      "Total": 395
    }
  }
];
