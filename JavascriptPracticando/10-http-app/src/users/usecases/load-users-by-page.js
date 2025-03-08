

const endpoint = `users?_page=2`;
const baseUrl = import.meta.env.VITE_BBASE_URL;



export const loadUsersByPage = async( page=1)=>{
    
    const url = `${baseUrl}/${endpoint}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
}