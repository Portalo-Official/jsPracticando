
numerosPrimos =[]
// numeros primos hasta 150
for (let i = 1; i < 150; i++) {
    let divisores=0;
    for (let j = 1; j <= i; j++) {
       if(i%j==0){
        divisores++;
       } 
    }
    if(divisores==2){
        numerosPrimos.push(i);
    }
}

console.log('---- For of -----');
for (numeros of numerosPrimos){
    console.log(numeros);
}

console.log('---- For in -----');
let superHeros = ['Spider-Man', 'Iron Man', 'Captain America', 'Black Widow']

for( i in superHeros){
    console.log(superHeros[i]);
}