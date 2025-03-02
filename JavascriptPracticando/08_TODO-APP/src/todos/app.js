import todoStore from "../store/todo.store";
import html from "./app.html?raw";
import { renderTodos } from "./use-cases";

const ElementIDs = {
  TodoList: '.todo-list',
  NewTodoInput:'#new-todo-input',
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

    //Listeners 
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

}