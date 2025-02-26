/**
 * Esta función me permite tomar una carta
 * @param {Array<string>} deck 
 * @returns {string}
 */
export const pedirCarta = ( deck ) => {
    if(!deck) throw new Error('El deck es obligatorio')
  if (deck.length === 0) {
    throw "No hay cartas en el deck";
  }
  const carta = deck.pop();
  return carta;
};
