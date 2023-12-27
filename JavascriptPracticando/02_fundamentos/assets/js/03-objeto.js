
const objeto = {
    id: 23,
    name: 'Pez espada',
}

console.log(objeto.id)
console.log(objeto['name']);

objeto.id = 'A-22' // Cambio valor 23 -> A-22

let id = 'id'; // Referencia por string
console.log(objeto[id]) // imprime A-22