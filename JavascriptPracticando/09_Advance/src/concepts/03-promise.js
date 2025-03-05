import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = ( element ) =>{

    const renderHero = ( hero ) =>{
        element.innerHTML = hero.name;
    }
    
    const renderError = ( error ) =>{
        element.innerHTML = `
            <h3>${ error }</h3>
        `;
    }
 
    const id_1 = '5d86371f2343e37870b91ef1';
    const id_2 = "5d86371f25a058e5b1c8a65e";
    // Reducida, al entrar los mismos elementos en la funcion
    // findHero( id_1 ).then( renderHero )
    //  .catch( renderError );

    findHero( id_1 )
        .then( (hero) => renderHero(hero) )
        .catch( error => renderError( error ));
}

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = ( id ) => {

    return new Promise( ( resolve, reject ) => {
        
        const hero = heroes.find( hero => hero.id === id );
        
        if ( hero ) {
            resolve( hero );
            return;
        }

        reject(`Hero with id ${id} not found`);
    });

}