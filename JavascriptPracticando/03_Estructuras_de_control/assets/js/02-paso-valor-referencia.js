// Paso por valor
let a=10,
    b=a;
    a=30;
console.log({a, b});

let juan = {nombre: 'juan', edad: 24}
let ana = juan
juan.edad= 37

console.log('juan',juan);
console.log('ana',ana);

let tom = {nombre: 'Tom', edad: 24}
let jerry = {...tom} // Operador spread
jerry.nombre= 'Jerry'

console.log('Tom',tom);
console.log('Jerry',jerry);

// Operador spread en arrays
let frutas = ['Manzana', 'Pera', 'Piña']
console.time('spread')
const otrasFrutas= [...frutas];
console.timeEnd('spread')

console.time('slice')
const otrasFrutas2= frutas.slice();
console.timeEnd('slice')

otrasFrutas.push('Mango')
otrasFrutas2.push('Coco')

console.table({frutas,otrasFrutas,otrasFrutas2});