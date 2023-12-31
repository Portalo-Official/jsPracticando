// Forma antigua
function Persona(nombre ,edad=10){
    this.nombre= nombre;
    this.edad  = edad;

}
let persona1Antigua = new Persona(nombre = 'Pedro', edad = 25);
let persona2Antigua = new Persona(nombre = 'Ana' ,  edad = 35);

// #### Forma actual #####

class PersonaClase{
    static _conteo = 0;

    static incrementarConteo() {
        PersonaClase._conteo++;
    }

    static get Conteo(){
        return this._conteo;
    }

    nombre         = '';
    codigo         = '';
    _frase         = '';
    comida         = '';

    constructor(nombre = 'noName', codigo = 'Sin codigo', frase='Sin frase'){
        this.nombre = nombre;
        this.codigo = codigo;
        this._frase  = frase;
        PersonaClase.incrementarConteo();
    }

    set ComidaFavorita(comida){
        this.comida=comida.toUpperCase();
    }

    set frase(frase){
        this._frase=frase;
    }

    get frase(){
        return this._frase;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre}, codigo: ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`Siempre digo: ${this._frase}`);
    }
}
const persona1 = new PersonaClase();
const persona2 = new PersonaClase('Jaime', 'AB-5', 'Pienso, luego existo')

// console.log({persona1});
// console.log({persona2});
persona2.miFrase();
persona2.ComidaFavorita = 'Pizza'
console.log({persona2});

console.log(PersonaClase.Conteo);