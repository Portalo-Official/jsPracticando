import userStore from './store/users.store'
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UsersApp = async( element ) => {
    element.innerHTML = 'UserApp loading...';
    await userStore.loadNextPage();

}