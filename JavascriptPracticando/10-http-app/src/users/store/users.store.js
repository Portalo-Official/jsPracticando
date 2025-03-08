import { loadUsersByPage } from "../usecases/load-users-by-page";



const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async()=>{

   let users = await loadUsersByPage(state.currentPage + 1);

   if( users.length === 0) return;
   state.currentPage +=1;
   state.users = users;
}

const loadPreviusPage = async()=>{
    let users = await loadUsersByPage(state.currentPage - 1);
    if (users.length === 0) return;
    state.currentPage -= 1;
    state.users = users;
}

//TODO: implementar
const onUserChanged = ()=>{
     throw new Error("Not implemented");
}

const reloadPage = async() =>{
     throw new Error("Not implemented");
}

export default{
    loadNextPage,
    loadPreviusPage,
    onUserChanged,
    reloadPage,
    /**
     * 
     * @returns {User[]}
     */
    getUsers: ()=> [...state.users],
    /**
     * 
     * @returns {Number}
     */
    getCurrentPage:()=> state.currentPage,
}
