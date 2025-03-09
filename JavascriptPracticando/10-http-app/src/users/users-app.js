import { renderAddButton } from './presentation/render-add-button/render-add-button';
import { renderButtons } from './presentation/render-buttons/render-buttons';
import { renderModal } from './presentation/render-modal/render-modal';
import { RenderTable } from './presentation/render-table/render-table';
import userStore from './store/users.store'
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UsersApp = async( element ) => {
    element.innerHTML = 'UserApp loading...';
    await userStore.loadNextPage();
    element.innerHTML='';
    
    RenderTable( element );
    renderButtons(element);
    renderAddButton( element );
    renderModal(element);
}