import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = ( element ) =>{

    console.log("callbacksComponent");
    const idHero = '5d86371f97c29d020f1e1f6d';
    findHero(idHero, ( error ,hero )=> {
        if(error){
            element.innerHTML = error;
            return;
        }
            element.innerHTML = hero?.name || 'heroe no tiene nombre';
    });
}

/**
 * 
 * @param {String} id 
 * @param { (error: String|Null, hero: Object) => void} callback 
 * @returns 
 */
const findHero = ( id, callback) =>{
    const hero = heroes.find( hero => hero.id == id);
    if( !hero ){
        callback(`Hero with id ${id} not found`);
        return;
    }
    callback(null, hero);
}