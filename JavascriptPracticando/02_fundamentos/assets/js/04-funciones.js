function saludar(nombre){
    console.log('Hola', nombre);
}

//var saludar = 234 // Arroja TypeError
// let saludar =345 // Arroja SyntaxError
saludar('Anastasia');

const saludar2 = function(){
    console.log('Hola mundo');
}
console.log(saludar2());
saludar2();

function saludar3(nombre){
    console.log(arguments);
    console.log('Hola',nombre);
}

saludar3('Plakton', 23, 'Patricio')
/**
 * [Arguments] { '0': 'Plakton', '1': 23, '2': 'Patricio' }
*  Hola Plakton
 */

const saludarFlecha = (nombre)  => {
    console.log('Hola', nombre,',Buen dia')
}
saludarFlecha('Melisa');

const sumar= (a,b) => a + b;
console.log(sumar(4,4));

const getRadom= () => Math.random();
console.log(getRadom());