import { Todo} from '../todos/models/todo.model'

const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pendind: 'Pending',
}

const state ={
    todos: [
        new Todo('Piedra del alama'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo'),
    ],
    filter: Filters.All,
}

const initStore = ()=>{
    console.log(state);
    console.log('InitStore 🥑');
}

export default {
    initStore,
}