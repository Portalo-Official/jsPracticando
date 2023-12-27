

function crearPersona(nombre, apellido){
    return{
        nombre: nombre,
        apellido: apellido
    }
}
console.log(crearPersona('Santiago', 'Miguez'));

const createPersona= (nombre, apellido)=> ({nombre,apellido})
console.log(createPersona('Ratita','Presumida'));

//
function imprimeArgumentos(){
    console.log(arguments);
}

const imprimeArgumentos2 = (...args) => {
    console.log(args);
}
const imprimeArgumentos3 = (edad,...args) => {
      console.log({edad, args});
}
imprimeArgumentos3(10,'Noche',23,true)


const envioCosas = (...args) => {
    return args
}
const [edad, casado, nombre] = envioCosas(12,false, 'Ana')
console.log(edad);
console.log();
// DESESTRUCTURACION de argumentos
let peter = {
    name: 'Peter',
    apellido: ' Parker',
    edad: 23,
    vivo: true,
    estudios: 'actor'
}

const printProp= ({name='', apellido='', edad=8, vivo ,estudios})=>
{
    console.log({name});
    console.log({apellido});
    console.log({edad});
    console.log({vivo});
    console.log({estudios});
}
printProp(peter);
