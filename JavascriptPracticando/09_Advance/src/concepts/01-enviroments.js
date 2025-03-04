
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const enviromentsComponent = ( element ) =>{

      console.log(import.meta.env);
      let key = import.meta.env.VITE_API_KEY;
      let url = import.meta.env.VITE_BASE_URL;

      const html = `
        variables: 
        Key: ${key} </br>
        Url: ${url} </br>
    `;
      element.innerHTML = html;
}