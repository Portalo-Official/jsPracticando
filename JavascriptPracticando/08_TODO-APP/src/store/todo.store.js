import { Todo} from '../todos/models/todo.model'

const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pendind: 'Pending',
}

const state ={
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo'),
        new Todo('Piedra de la realidad'),
    ],
    filter: Filters.All,
}

const initStore = ()=>{
    loadStore();
    console.log('InitStore 🥑');
}

const loadStore = () =>{
    if(!localStorage.getItem('state')) return;
    let { todos = [] , filter = Filters.All} =JSON.parse(localStorage.getItem("state"));
    state.todos = todos;
    state.filter = filter;
}

const saveStateLocalStorage = () =>{
    
    localStorage.setItem("state", JSON.stringify(state));
}

/**
 * 
 * @param {Filters} filter - Filtro 
 * @returns {Array<Todo>} array de Todo segun el filtro como parametro
 * @throws Error si el filtro no existe.
 */
const getTodos = (filter = Filters.All)=>{
    
    switch(filter){
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter( todo => todo.done);
        case Filters.Pendind:
            // si es false es que no esta acabada
            return state.todos.filter( todo => !todo.done);
        default:
            throw new Error(`Opcion ${filter} no permitida`)
    }
}

/**
 * 
 * @param {String} description 
 */
const addTodo = (description) =>{
    if(!description) throw new Error("Descripcion es requerida");
    state.todos.push(new Todo(description))
    saveStateLocalStorage();
}

const toggleTodo = (todoId) => {
    if (!todoId) throw new Error("El id es requerido");
    state.todos = state.todos.map( todo => {
    if(todo.id === todoId){
        todo.done = !todo.done
    }
    return todo;
    });
    saveStateLocalStorage();
}

const deleteTodo = (todoId) => {
    if (!todoId) throw new Error("El id es requerido");

    state.todos = state.todos.filter( todo => todo.id !== todoId);
    saveStateLocalStorage();
}

const deleteCompleted = () =>{
    //Filtrar por aquello que done= false
    state.todos = state.todos.filter( todo => !todo.done);
    saveStateLocalStorage();
}
/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = (newFilter = Filters.All) => {
    if(Object.keys(Filters).includes(newFilter)){
        throw new Error(`El filtro ${newFilter} no existe`);
    }
    state.filter = newFilter;
    saveStateLocalStorage();
}

/**
 * Retorna el filtro actual
 * @returns {Filters}
 */
const getCurrentFilter = ()=>{
    return state.filter;
}

export default {
  addTodo,
  deleteCompleted,
  deleteTodo,
  getCurrentFilter,
  getTodos,
  initStore,
  loadStore,
  saveStateLocalStorage,
  setFilter,
  toggleTodo,
};