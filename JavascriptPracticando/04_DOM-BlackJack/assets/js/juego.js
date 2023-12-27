
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
const pedirCarta = (deck) => {
    if(deck.length === 0){
        throw 'No hay cartas en el deck';
    }
    return deck.pop();
}



// *********** MAIN ************** 

let deck = shuffleDeck(crearDeck());
console.log({deck});
let carta = pedirCarta(deck);
console.log({carta});



// // Comprobar si al vaciar la baraja salta error contenplado
// for (let i = 0; i < 54; i++) {
    
//     carta = pedirCarta(deck);
//     console.log({carta});
// }
// // Comprobar que la echa
// console.log(deck.some(c=>c==carta));