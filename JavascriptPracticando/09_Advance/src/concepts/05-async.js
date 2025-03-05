import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = ( element ) =>{

    console.log("asyncComponent");

    const renderHero = ( hero ) =>{
        element.innerHTML = hero.name;
    }
    const id = '5d86371fd55e2e2a30fe1ccb2';
    findHero(id)
        .then(renderHero);

1   
}

/**
 * 
 * @param {String} id 
 * @returns {Promise<heroes>}
 */
const findHero = async( id )=> {

    const hero = heroes.find( hero => hero.id === id);


    return hero;
}