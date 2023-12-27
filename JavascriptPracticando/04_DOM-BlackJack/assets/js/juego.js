
// Crear deck 

let deck         = [];
const tipos      = ['C', 'D', 'H', 'S'];
const especiales = ['J', 'Q', 'K', 'A']

const crearDeck = () => {
    // Cartas numericas
    for (let i = 1; i < 10; i++) {
        for( let tipo of tipos){
            deck.push(i+tipo)
        }
    }  
    // Cartas especiales
    for (let tipo of tipos) {
        for (let especial of especiales) {
            deck.push(especial+tipo)
        }
    }
}
crearDeck();
console.log({deck})