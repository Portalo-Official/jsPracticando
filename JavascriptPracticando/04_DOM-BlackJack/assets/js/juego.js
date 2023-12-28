
// ######## INICIALIZACIONES ##############
// Variables para la baraja
const tipos      = ['C', 'D', 'H', 'S'];
const especiales = ['J', 'Q', 'K', 'A'];
// ------- Elementos del HTML -------
let btnNewGame        = document.getElementById('new-game');
let btnGiveCard       = document.querySelector('#give-card');
let btnStop           = document.querySelector('#stop');
let puntosHTML        = document.querySelectorAll('small'); // [0] crupier [1] jugador
let nombreJugador     = document.getElementById('nombre-jugador');
let cartasJugador     = document.getElementById('jugador-cartas');
let cartasCrupier     = document.getElementById('crupier-cartas');

let deck // baraja
let carta // carta pedida
let valor // valor de la carta
let puntosJugador = 0,
    puntosCrupier = 0;

// ############ CREAR DECK #################### 
/**
 * funcion que crea una baraja 
 * @returns string[] correspondiente a baraja francesa
 */
const crearDeck = () => {
    let deck = [];
    // Cartas numericas
    for (let i = 2; i < 10; i++) {
        for( let tipo of tipos){
            deck.push(i+tipo);
        }
    }  
    // Cartas especiales
    for (let tipo of tipos) {
        for (let especial of especiales) {
            deck.push(especial+tipo);
        }
    }
    return deck;
}
/**
 * Funcion que desordena una array
 * @param {*} deck array[]
 * @returns retorna el parametro deck desordenado
 */
const shuffleDeck = (deck) => {
    return _.shuffle(deck);
}

// ########## PERDIR CARTA #############
/**
 * Quita un elemento del array por parametro y lo retorna
 * @param {*} deck string[]
 * @returns Un elemento del array
 */
const pedirCarta = (deck) => {
    if(deck.length === 0){
        throw 'No hay cartas en el deck';
    }
    return deck.pop();
}

// ########## VALORES DE LAS CARTAS ##############
const valoresCarta = { 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, J:10, Q:10, K:10, A:11 }
const getValorCarta= (card) => {
    return valoresCarta[ card.split('')[0] ];
}
// Manera de el tutorial
const valoresCartaTutorial = (card) =>{
    const numero = card.substring(0, carta.length-1);
    let puntos = 0;
    if(isNaN(numero)){
        puntos = (numero === 'A') ? 11 :10;
    }else{
        puntos = numero *1;
    }
    return puntos;
}
// Manera de el tutorial reducida
const valoresCartaTutorialReducida = (card) =>{
    const numero = card.substring(0, carta.length-1);
    return (!isNaN(numero)) ? numero*1:
            (numero === 'A') ? 11 : 10;
} 
// ############## añadir html #################
const addCardHTML = (card) =>{
   let newCard = document.createElement('img');
   newCard.src= `assets/img/cartas/`+card+`.png`;
   newCard.classList.add('carta');
   cartasJugador.append(newCard);
}

// ############# Listeners ##################
btnGiveCard.addEventListener('click', () =>{
    const carta = pedirCarta(deck);
    console.log({carta});
    puntosJugador += getValorCarta(carta);
    puntosHTML[1].innerText= puntosJugador;
    addCardHTML(carta);
})

btnNewGame.addEventListener('click', () =>{
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;
    puntosCrupier = 0;
    puntosJugador = 0;
    deck = shuffleDeck(crearDeck());
    
})

// *********** MAIN ************** 
deck = shuffleDeck(crearDeck());
//carta = pedirCarta(deck);
// console.log({carta});
// valor = getValorCarta(carta);
// console.log({valor});

//btnNewGame.addEventListener


// // Comprobar si al vaciar la baraja salta error contenplado
// for (let i = 0; i < 54; i++) {
    
//     carta = pedirCarta(deck);
//     console.log({carta});
// }
// // Comprobar que la echa
// console.log(deck.some(c=>c==carta));