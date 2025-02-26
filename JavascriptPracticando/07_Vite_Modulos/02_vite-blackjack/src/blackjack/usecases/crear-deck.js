import _ from 'underscore'

/**
 * Crea una nueva baraja de cartas.
 * @param {Array<string>} tiposDeCarta 
 * @param {Array<string>} tiposEspeciales 
 * @returns {Array<string>} array de string de una baraja
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta.length == 0)
      throw new Error("TiposDeCartas es obligatorio");
    if (!tiposEspeciales || tiposEspeciales.length == 0)
      throw new Error("TiposEspeciales es obligatorio");

    let deck = [];

    for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
        deck.push(i + tipo);
    }
    }

    for (let tipo of tiposDeCarta) {
    for (let esp of tiposEspeciales) {
        deck.push(esp + tipo);
    }
    }
    // console.log( deck );
    deck = _.shuffle(deck);
    return deck;
};
