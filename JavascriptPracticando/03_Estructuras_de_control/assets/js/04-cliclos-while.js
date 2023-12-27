
/**  
 * Poner segunda condicion siempre para no caer 
 * en bucle infinito sin querer
 * CTRL+C si ocurre o cerrar VScode
*/
let x; // undefine
let contadorWhile = 0;
// al ser undefine, lo toma como false
while(x && contadorWhile<5){
    console.log(contadorWhile);
    contadorWhile ++;
}
contadorWhile= reseteo();
let xx = null;
// null tambien lo toma como false
while(xx && contadorWhile<5){
    console.log(contadorWhile);
    contadorWhile ++;
}

let xxx = 3;
contadorWhile= reseteo();
// number o cualqueir otro lo toma true
while(xxx && contadorWhile<5){
    console.log(contadorWhile);
    contadorWhile ++;
}
contadorWhile=reseteo();

function reseteo(){
    return 0;
}

let frutas = ['Fresa', 'Platano', 'Kiwi', 'Mango']

do{
   console.log(frutas[contadorWhile]);
   contadorWhile ++; 
}while( contadorWhile < frutas.length);

contadorWhile=reseteo();

