import todoStore from "../store/todo.store";
import html from "./app.html?raw";
import { renderTodos } from "./use-cases";

const ElementIDs = {
  TodoList: '.todo-list',
  NewTodoInput:'#new-todo-input',
  ClearCompleted: '.clear-completed',
};

/**
 * 
 * @param {String} elementId - id del tag
 */
export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        let id = ElementIDs.TodoList;
        renderTodos(id, todos);
    }

    //Cuando la funcion app se llama
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

    //Referencias HTML
    const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput);
    const todoListUL = document.querySelector(ElementIDs.TodoList);
    const clearCompletedButton = document.querySelector(ElementIDs.ClearCompleted);

    //Listeners 
    
    //Add Todo to TodoList
    newDescriptionInput.addEventListener('keyup', ( event )=>{
        //Clausulas Guardia
        //Sale si no mete nada o espacio o es distinto de enter
        if( event.keyCode !== 13) return;
        if( event.target.value.trim().length === 0) return;

        todoStore.addTodo(event.target.value);
        displayTodos();

        //Borrar caja de texto
        event.target.value = '';
    })

    //Completar Todo
    todoListUL.addEventListener('click', ( event) =>{
        
        const element = event.target.closest('[data-id]');
        let idTodo = element.getAttribute("data-id");
        todoStore.toggleTodo(idTodo);
        displayTodos();
        
        // unificando listeners
        // if (event.target.className === "destroy"){
        //     todoStore.deleteTodo(idTodo);
        // }else{
        //     todoStore.toggleTodo(idTodo);
        // }
        // displayTodos();
    })

    //Eliminar 
    todoListUL.addEventListener('click', ( event) =>{
        
        const element = event.target.closest('[data-id]');
        let isDestroyButton = event.target.className === "destroy";
        let idTodo = element.getAttribute("data-id");

        if (!element || !isDestroyButton ) return;
        todoStore.deleteTodo(idTodo);
        displayTodos();
    })

    //Eliminar completados
    clearCompletedButton.addEventListener('click', ( event ) =>{
        todoStore.deleteCompleted();
        displayTodos();
    })

}