// Forma antigua
function Persona(nombre ,edad=10){
    this.nombre= nombre;
    this.edad  = edad;

}
let persona1Antigua = new Persona(nombre = 'Pedro', edad = 25);
let persona2Antigua = new Persona(nombre = 'Ana' ,  edad = 35);

// #### Forma actual #####

class PersonaClase{
    nombre = '';
    codigo = '';
    frase  = '';
    constructor(nombre = 'noName', codigo = 'Sin codigo', frase='Sin frase'){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;
    }
}
const persona1 = new PersonaClase();
const persona2 = new PersonaClase('Jaime', 'AB-5', 'Pienso, luego existo')

console.log({persona1});
console.log({persona2});


// // ******** Sabrina ********
// palaba = ['p','e','l','i','c','a','n','e'];
// palabaBraille= []

// for (let i = 0; i < palabra.length; i++) {
//     palabaBraille[i] = convertirBrailler(palaba[i]);

// }