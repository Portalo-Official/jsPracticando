import usersStore from '../../store/users.store';
import './render-table.css';

let table;

/**
 * 
 * @returns {HTMLTableElement}
 */
const createTable = () =>{
    const table = document.createElement('table');
    table.classList.add('tabla-users');
    const tableHeaders = document.createElement('thead');
    tableHeaders.innerHTML = `
        <tr>
            <th>#ID</th>
            <th>Balance</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Active</th>
            <th>Actions</th>
        </tr>
    `;

    const tableBody = document.createElement('tbody');
    table.append( tableHeaders, tableBody);
    return table;
}
/**
 * 
 * @param {HTMLDataElement} element 
 */
export const RenderTable = ( element ) =>{

    const users = usersStore.getUsers();

    if (!table){
        table = createTable();
        element.append( table );
        //TODO listeners
    }
    
    let tableHTML = '';
    users.forEach( user =>{
        tableHTML += `
        <tr>
            <td>${user.id}</td>
            <td>${user.balance}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.isActive}</td>
            <td>
                <a href="#/" data-id="${user.id}">Select</a>
                |
                <a href="#/" data-id="${user.id}">Delete</a>
            </td>
        </tr>
        `;
    });
    table.querySelector('tbody').innerHTML = tableHTML;
}

