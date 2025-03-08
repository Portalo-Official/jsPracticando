import './render-buttons.css'
import usersStore from "../../store/users.store";
import { RenderTable } from '../render-table/render-table';


const ids = {
    currentPage:'current-page',
}


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderButtons = ( element ) => {

    const nextButton = document.createElement('button');
    nextButton.innerText = 'Next >';
    nextButton.classList.add('button-page')
    
    const prevButton = document.createElement('button');
    prevButton.innerText = 'Prev <';
    prevButton.classList.add("button-page");

    const currentPageLabel = document.createElement('span');
    currentPageLabel.id = ids.currentPage;
    
    currentPageLabel.innerText = `${usersStore.getCurrentPage()}`;

    element.append( prevButton, currentPageLabel, nextButton);

    //Listeners
    nextButton.addEventListener('click', async ( event )=>{
        await usersStore.loadNextPage();
        currentPageLabel.innerText=usersStore.getCurrentPage();
        RenderTable( element );
    });

    prevButton.addEventListener('click', async() => {
        await usersStore.loadPreviusPage();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        RenderTable(element);
    })
}

