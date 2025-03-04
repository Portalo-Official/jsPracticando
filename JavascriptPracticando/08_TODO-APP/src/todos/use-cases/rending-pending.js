import todoStore, { Filters } from "../../store/todo.store";

let element;

export const renderPending = ( elementId ) =>{

    if(!element){
        element = document.querySelector( elementId );
    }
    if( !element ) throw new Error(`Elemento ${ elementId } no encontrado`);
    
    element.innerHTML = todoStore.getTodos(Filters.Pendind).length;
}