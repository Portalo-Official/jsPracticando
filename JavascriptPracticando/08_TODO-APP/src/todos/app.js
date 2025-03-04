import todoStore, { Filters } from "../store/todo.store";
import html from "./app.html?raw";
import { renderTodos, renderPending } from "./use-cases";

const ElementIDs = {
  TodoList: '.todo-list',
  NewTodoInput:'#new-todo-input',
  ClearCompleted: '.clear-completed',
  ChangeFilters: '.filtro',
  PendingCount: '#pending-count',
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
        updatePendingCount();
    }

    const updatePendingCount = () =>{
        renderPending(ElementIDs.PendingCount);
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
    const filtersLI = document.querySelectorAll(ElementIDs.ChangeFilters);

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

    // Cambiar filtro
    filtersLI.forEach( element => {
         element.addEventListener ('click' , ( event )=>{
            // Quitar el 'selected' de todos
            filtersLI.forEach( el=> el.classList.remove('selected') );
            // Añadir selcted
            event.target.classList.add('selected');
        
            
            switch(event.target.text){
                case 'Todos':
                    todoStore.setFilter(Filters.All);
                    break;
                case 'Pendientes':
                    todoStore.setFilter(Filters.Pendind);
                    break;
                case 'Completados':
                    todoStore.setFilter(Filters.Completed);
                    break;
            }

            displayTodos()
        });
    })



}