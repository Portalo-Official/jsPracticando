
const regresaTrue = () => {
    console.log('Regresa True');
    return true;
}
const regresaFalse = () => {
    console.log('Regresa False');
    return false;
}

console.log('=====AND======');
// Operador && mira corta comprobacion si ya dio falso antes
regresaFalse() && regresaTrue(); // solo imprimira regresa False y AND se sale, pues ya tuvo false como resultado 

console.log('=====OR======');
// Operador OR || dejara de comprobar si ya hay una solucion verdadera
regresaTrue() || regresaFalse(); 

console.log('------------------------------------\n');
console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

// && -> todas tienen que ser verdadero, si no ponde false por defecto
const a1 = true && 'Hola Mundo' && 150; // asigna lo ultimo
const a2 = false && 'Hola Mundo' && 150; // no asigna nada
console.log({a1, a2});

// || mira todo, y si es falso undefine o null coge lo que ya no sea ninguno de eso.
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyNull || soyUndefined || 'Ya no soy falso';
const a5 = soyFalso || soyNull || soyUndefined || 0 ||'Ya no soy falso' || 'Soy yo mismo';
console.log({a3, a4, a5});


console.log('------------------------------------\n');
console.warn('Operador Ternario');

const elMayor = (a,b)=> (a>b)? a:b;

const tieneMembresia = (miembro) => (miembro) ? '2 dollares.' : '10 dolares.';

console.log(elMayor(15, 56));

console.log(tieneMembresia(true));

let amigo = true;
let amigos = 
[
    'Santi',
    'Angel',
    'Yeray',
    amigo ? 'Luis' : 'Samuel'
]
console.log(amigos);

let nota = 65
let grado = nota >= 95 ? 'A+':
            nota >= 90 ? 'A' :
            nota >= 85 ? 'B+':
            nota >= 80 ? 'B' :
            nota >= 75 ? 'C+':
            nota >= 70 ? 'C' :'F' 