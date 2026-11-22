const lista = document.querySelector(".lista");

const temas = [
    "animais", "anime", "desenho", "pokemon", "amor", "comidas", "times"
];

const modelos = {
    animais: {
        0: {
            nome: "Avestruz",
            src: "../midia/avestrus.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20de%20avestruz"
        },
        1: {
            nome: "Vaca",
            src: "../midia/cow.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20de%20vaca"
        },
        2: {
            nome: "Cachorro",
            src: "../midia/dog1.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20de%20cachorro"
        },
        3: {
            nome: "Pato",
            src: "../midia/duck.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20de%20pato"
        },
        4: {
            nome: "Porco",
            src: "../midia/pig.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20de%20porco"
        },
        5: {
            nome: "Galinha Branca",
            src: "../midia/kitchen.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20de%20galinha%20branca"
        },
        6: {
            nome: "Galinha Bege",
            src: "https://i.pinimg.com/736x/7e/12/86/7e12860d62b211d4ab698b881f94afa2.jpg",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20de%20galinha%20bege"
        },
        7: {
            nome: "Vaca Sentada",
            src: "https://i.pinimg.com/736x/fa/8f/5b/fa8f5bbfc6159658c65f421f70879eec.jpg",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20de%20vaca%20sentada"
        },
        8: {
            nome: "Gato Bege e Marrom",
            src: "https://i.pinimg.com/736x/8e/7f/80/8e7f808ee7c73ff003b501cc56a4e63e.jpg",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20de%20gato%20bege%20e%20marrom"
        },
        9: {
            nome: "Gato Meme",
            src: "https://i.pinimg.com/736x/db/6a/56/db6a56e6536eb0796931c958c1a78ada.jpg",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20de%20gato%20meme"
        },
        10: {
            nome: "Gato Bege",
            src: "https://i.pinimg.com/736x/a5/26/3f/a5263f0d455113cb23499b28d47ec865.jpg",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20de%20gato%20bege"
        },
        11: {
            nome: "Gato Roxo",
            src: "https://i.pinimg.com/736x/13/88/e7/1388e76f19dc1cb3236d209a283e4db7.jpg",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20de%20gato%20roxo"
        },
        12: {
            nome: "Cavalo",
            src: "../midia/horse.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20de%20cavalo"
        },
        13: {
            nome: "Ovelha",
            src: "../midia/sheep.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20de%20ovelha"
        }
    },
    anime: {
        0: {
            nome: "Goku",
            src: "https://i.pinimg.com/736x/d5/da/e4/d5dae422a9d09755e6f6a0990e2a51c0.jpg",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20Goku"
        },
        1: {
            nome: "Freeza",
            src: "../midia/frezer.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20Freeza"
        },
        2: {
            nome: "Kuririn",
            src: "https://i.pinimg.com/736x/78/5f/eb/785feb5e1fa95bcfa2d1392f2c01c24f.jpg",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20Kuririn"
        },
        3: {
            nome: "Chopper",
            src: "../midia/chooper.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20Chopper"
        },
        4: {
            nome: "Tanjiro",
            src: "../midia/tanjiro.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20Tanjiro"
        },
        5: {
            nome: "Naruto",
            src: "../midia/naruto.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20Naruto"
        },
        6: {
            nome: "Gojo",
            src: "https://i.pinimg.com/736x/e7/72/f5/e772f51c1c0b81063e6e83e649dc2dc2.jpg",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20Gojo"
        },
        7: {
            nome: "Ace",
            src: "../midia/irmao-do-luffy.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20Ace"
        },
        8: {
            nome: "Luffy",
            src: "../midia/luffy.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20Luffy"
        },
        9: {
            nome: "Sanji",
            src: "../midia/sand.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20Sanji"
        },
        10: {
            nome: "Nami",
            src: "../midia/nami.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20da%20Nami"
        },
        11: {
            nome: "Zoro",
            src: "../midia/zoro.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20Zoro"
        },
        12: {
            nome: "Sukuna",
            src: "https://i.pinimg.com/736x/c1/34/b9/c134b995601e9c39f33b2b76ff61290b.jpg",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20Sukuna"
        },
        13: {
            nome: "Vegeta",
            src: "https://i.pinimg.com/736x/af/68/a8/af68a87a17397ebc3e4fbe249fae3327.jpg",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20Vegeta"
        }
    },
    desenho: {
        0: {
            nome: "Bob Esponja",
            src: "../midia/bob-esponja.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20bob%20esponja"
        },
        1: {
            nome: "Patrick Estrela",
            src: "../midia/patrique_estrela.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20patrick%20estrela"
        },
        2: {
            nome: "Finn",
            src: "../midia/Fin.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20Finn"
        },
        3: {
            nome: "Jake",
            src: "../midia/Jake.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20Jake"
        },
        4: {
            nome: "Homer Simpson",
            src: "../midia/Homer-Simpson.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20Homer%20Simpson"
        },
        5: {
            nome: "Steven Universe",
            src: "../midia/Steven-Universe.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20Steven%20Universe"
        },
        6: {
            nome: "Ametista",
            src: "../midia/menina-roxa-do-esteve-uneverse.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20da%20menina%20roxa"
        },
        7: {
            nome: "Sonic",
            src: "../midia/sonic.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20Sonic"
        },
        8: {
            nome: "Springtrap",
            src: "../midia/spring-trap.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20Spring%20Trap"
        },
        9: {
            nome: "Chica",
            src: "../midia/chica.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20da%20Chica"
        },
        10: {
            nome: "Bonnie",
            src: "../midia/bonnie.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20Bonnie"
        },
        11: {
            nome: "Enderman",
            src: "../midia/enderman.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20Enderman"
        },
        12: {
            nome: "Bloco de Terra",
            src: "../midia/terra.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20bloco%20de%20terra"
        },
        13: {
            nome: "Picareta",
            src: "../midia/picareta.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20da%20picareta"
        },
        14: {
            nome: "Machado",
            src: "../midia/machado.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20machado"
        },
        15: {
            nome: "Pá",
            src: "../midia/pa.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20da%20pa"
        }
    },
    pokemon: {
        0: {
            nome: "Pikachu",
            src: "https://i.pinimg.com/736x/0b/56/29/0b56299ca218a44e26209a0cdc3a0069.jpg",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20Pikachu"
        },
        1: {
            nome: "Charmander",
            src: "../midia/charmander.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20Charmander"
        },
        2: {
            nome: "Bulbasaur",
            src: "https://i.pinimg.com/736x/97/84/82/9784820ae307bbf7865e0c7d3b28f927.jpg",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20Bulbasaur"
        },
        3: {
            nome: "Squirtle",
            src: "../midia/squitle.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20Squirtle"
        },
        4: {
            nome: "Gengar",
            src: "../midia/gengar.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20Gengar"
        },
        5: {
            nome: "Snorlax",
            src: "../midia/Snorlax.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20Snorlax"
        },
        6: {
            nome: "Eevee",
            src: "../midia/Eevee.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20Eevee"
        },
        7: {
            nome: "Jigglypuff",
            src: "../midia/Jigglypuff.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20Jigglypuff"
        },
        8: {
            nome: "Psyduck",
            src: "../midia/Psyduck.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20Psyduck"
        },
        9: {
            nome: "Mewtwo",
            src: "https://i.pinimg.com/736x/da/c4/25/dac425d8a455d5100b02fd154f9a28c5.jpg",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20Mewtwo"
        },
        10: {
            nome: "Lucario",
            src: "../midia/Lucario.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20Lucario"
        },
        11: {
            nome: "Gyarados",
            src: "../midia/Gyarados.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20Gyarados"
        },
        12: {
            nome: "Rayquaza",
            src: "../midia/rayquaza.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20Rayquaza"
        },
        13: {
            nome: "Master Ball",
            src: "../midia/masterball.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20da%20Master%20Ball"
        },
        14: {
            nome: "Ultra Ball",
            src: "../midia/ultraball.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20da%20Ultra%20Ball"
        }
    },
    amor: {
        0: {
            nome: "Coração",
            src: "../midia/coracao.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20de%20coracao"
        },
        1: {
            nome: "Ursinho Love",
            src: "../midia/urso-coracao.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20de%20ursinho%20com%20coracao"
        },
        2: {
            nome: "Laço Coquette",
            src: "../midia/laço.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20de%20laco%20coquette"
        },
        3: {
            nome: "Morango Fofo",
            src: "../midia/Moranguinho.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20de%20mor%20Morango%20romantico"
        },
        4: {
            nome: "Casal • 3 Peças",
            src: "../midia/casal.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20de%20Casal"
        },
        5: {
            nome: "Gatinho Love",
            src: "../midia/gato.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20de%20gatinho%20apaixonado"
        },
        6: {
            nome: "Florzinha",
            src: "../midia/Florzinha-Kawaii.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20de%20flor%20delicada"
        },
        7: {
            nome: "Placa-love",
            src: "../midia/placa-love.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20de%20xicara%20com%20coracao"
        }
    },
    comidas: {
        0: {
            nome: "Hambúrguer",
            src: "../midia/hamburguer.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20de%20hamburguer"
        },
        1: {
            nome: "Pizza",
            src: "../midia/pizza.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20de%20pizza"
        },
        2: {
            nome: "Batata Frita",
            src: "../midia/batata-frita.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20de%20batata%20frita"
        },
        3: {
            nome: "Hot Dog",
            src: "../midia/hot-dog.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20de%20hot%20dog"
        },
        4: {
            nome: "Sushi",
            src: "../midia/sushi.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20de%20sushi"
        },
        5: {
            nome: "Brigadeiro",
            src: "../midia/chocolate.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20de%20chocolate"
        },
        6: {
            nome: "Coxinha",
            src: "../midia/coxinha.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20de%20coxinha"
        },
        7: {
            nome: "Donut",
            src: "../midia/donut.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20de%20donut"
        },
        8: {
            nome: "Sorvete",
            src: "../midia/sorvete.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20de%20sorvete"
        },
        9: {
            nome: "Melancia",
            src: "../midia/melancia.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20de%20melancia"
        },
        10: {
            nome: "Abacate",
            src: "../midia/abacate.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20de%20abacate"
        },
        11: {
            nome: "Ovo Frito",
            src: "../midia/ovo-frito.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20de%20ovo%20frito"
        },
        12: {
            nome: "Pipoca",
            src: "../midia/pipoca.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20de%20pipoca"
        },
        13: {
            nome: "Café",
            src: "../midia/cafe.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20de%20cafe"
        },
        14: {
            nome: "Boba Tea",
            src: "../midia/boba-tea.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20de%20boba%20tea"
        },
        15: {
            nome: "Morango",
            src: "../midia/morango.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20de%20morango"
        }
    },
    times: {
        0: {
            nome: "Escudo do Flamengo",
            src: "../midia/flamengo.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20flamengo"
        },
        1: {
            nome: "Corinthians",
            src: "../midia/corinthians.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20corinthians"
        },
        2: {
            nome: "São Paulo",
            src: "../midia/sao-paulo.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20Sao%20Paulo"
        },
        3: {
            nome: "Palmeiras",
            src: "../midia/palmeiras.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20Palmeiras"
        },
        4: {
            nome: "Vasco da Gama",
            src: "../midia/vasco-gama.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20Vasco%20da%20Gama"
        },
        5: {
            nome: "Grêmio",
            src: "../midia/Gremio.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20Gremio"
        },
        6: {
            nome: "Cruzeiro",
            src: "../midia/Santos.png",
            mensagem: "https://wa.me/5512988520109?text=Ol%C3%A1!%20Eu%20quero%20o%20chaveiro%20do%20Santos"
        }
    }
};

function renderizar(temaEscolhido = localStorage.getItem("tema")) {
    if (!lista) return;

    const temaValido = temas.includes(temaEscolhido) ? temaEscolhido : temas[0];
    const itens = modelos[temaValido];

    lista.innerHTML = "";

    Object.values(itens).forEach((item) => {
        const link = document.createElement("a");
        link.href = item.mensagem;
        link.target = "_blank";

        const section = document.createElement("section");

        const img = document.createElement("img");
        img.src = item.src;
        img.alt = item.nome;

        const p = document.createElement("p");
        p.textContent = item.nome;

        section.append(img, p);
        link.appendChild(section);
        lista.appendChild(link);
    });
}

renderizar();