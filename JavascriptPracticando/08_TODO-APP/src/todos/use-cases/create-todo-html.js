import { Todo } from "../models/todo.model";

/**
 * Crea HTML para una tarea (TODO)
 * @param {Todo} todo 
 * @returns {HTMLElement} un elemento HTML.
 */
export const createTodoHTML = ( todo ) =>{
    if(!todo) throw new Error('un TODO es requerido');

    const {done, description, id} = todo;

    const html = `
      
            <div class="view">
                <input class="toggle" type="checkbox" ${ done ? 'checked':''}>
                <label>${description}</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
    `;
    const liElement = document.createElement('li');
    //   <li class="${ todo.done ? 'checked' : ''}" data-id="${todo.id}">
    liElement.setAttribute('data-id', id);
    if(todo.done){
        liElement.classList.add('completed')
    }

    liElement.innerHTML = html;
    
    return liElement;
}
