
// ############ CREAR DECK #################### 
const tipos      = ['C', 'D', 'H', 'S'];
const especiales = ['J', 'Q', 'K', 'A']

/**
 * funcion que crea una baraja 
 * @returns string[] correspondiente a baraja francesa
 */
const crearDeck = () => {
    let deck = [];
    // Cartas numericas
    for (let i = 1; i < 10; i++) {
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


// *********** MAIN ************** 

let deck = shuffleDeck(crearDeck());
 console.log(deck);
let carta = pedirCarta(deck);
 console.log({carta});
let valor = getValorCarta(carta);
console.log({valor});

let cartas = document.getElementsByClassName('carta');
let botones= document.getElementsByTagName('button');
let jugador= document.getElementById('jugador-cartas');
let crupier= document.getElementById('crupier-cartas');
let jSelector= document.querySelector('#jugador-cartas');
let cartaSelector= document.querySelector('.carta');
let cartasSelector= document.querySelectorAll('.carta');

console.log({jSelector});
console.log({cartaSelector});
console.log({cartasSelector});

// // Comprobar si al vaciar la baraja salta error contenplado
// for (let i = 0; i < 54; i++) {
    
//     carta = pedirCarta(deck);
//     console.log({carta});
// }
// // Comprobar que la echa
// console.log(deck.some(c=>c==carta));