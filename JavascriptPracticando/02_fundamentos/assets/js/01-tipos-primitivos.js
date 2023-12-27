let nombre = 'Peter Parker'
console.log('\n'+nombre);
nombre = 'Ben Parker'
console.log(nombre);

nombre = "Tia May"; // es mas pesado "" que ''
nombre=`Tia MAy`;

console.log(typeof nombre);
console.log();
// cambiamos a number
nombre = 12_000; // _ sirve para separa entre 3 digitos
console.log(typeof nombre);
console.log();
// cambiamos a boolean
nombre = false;
console.log(typeof nombre);

let apellido; // sin inicializar
console.log(typeof apellido);// imprime undefined

let amigos = null;
console.log(typeof amigos); // imprime object

// SYMBOL
let simbolo1 = Symbol('a');
let simbolo2 = Symbol('a');

console.log(typeof simbolo1); // symbol
console.log(simbolo1 === simbolo2); // si son el mismo
console.log(simbolo1 == simbolo2);

