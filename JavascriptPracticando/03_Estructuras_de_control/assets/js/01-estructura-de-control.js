
let hoy = new Date();

// Enero -> 0 , Diciembre -> 11
if ( hoy.getMonth() == 10 ){
    console.log("Es Noviembre");
}else if(hoy.getMonth() == 11){
    console.log("Es Dicimebre");
}else{
	console.log("No es Noviembre ni Diciembre");
}

// Domingo -> 0
if (hoy.getDay() == 0){
    console.log('Es Domigno');
}
// Alternativa a if else en estos casos
let diaSemana = {
    0:'Domingo',
    1:'Lunes',
    2:'Martes',
    3:'Miercoles',
    4:'Jueves',
    5:'Viernes',
    6:'Sabado'
}
console.log(diaSemana[hoy.getDay()]);

switch(hoy.getDay()){
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Lunes');
        break;
    default:
        console.log('Es otro dia');
}
