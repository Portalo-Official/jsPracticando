import { localhostUserListToModelList } from "../mappers/localhost-user.mapper";


const baseUrl  = import.meta.env.VITE_BBASE_URL;
const PAGE_MIN = 1; 

 
   /**
    * 
    * @param {Number} page 
    * @returns {Promise<User[]>}
    */
export const loadUsersByPage = async( page=1)=>{
  let endpoint = `users?_page=${page}`;

  const url = `${baseUrl}/${endpoint}`;
  const res = await fetch(url);
  const data = await res.json();

  let isPassLastPage    = page > data.last;
  let isBeforeFirstPage = page < PAGE_MIN;  
  // Si no es ultima pagina y next ==
  if (isPassLastPage || isBeforeFirstPage) {
    return [];
  }
  /*
  data retorna este objeto
        data:[]
        first:
        items:
        last:
        next:
        pages:
        prev:
    */
  return localhostUserListToModelList(data?.data);
}