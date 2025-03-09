import { mapUserTolocalhostUser } from '../mappers/localhost-user.mapper';
import { User } from '../models/user-model'


const urlBase = import.meta.env.VITE_BBASE_URL;

/**
 * 
 * @param {Like<User>} userLike 
 */
export const saveUser = async( userLike ) =>{
    
    const user = new User( userLike );

    if( !user.firstName || !user.lastName){
        throw new Error('firstName and lastName is required');
    }

    if( user.id ){
        throw new Error('No implementada la actualizacón');
    }

    const updateUser = await createUser( user );
    return updateUser;
}

/**
 * 
 * @param {Like<User>} user 
 * @returns {User}
 */
const createUser = async( user ) =>{
    
    const url = `${urlBase}/users`;
    // Mapeamos de usuario a userLocalhost
    let userLocalhost = mapUserTolocalhostUser(user);

    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(userLocalhost),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const newUser = await res.json();
    console.log('Crear usuario:');
    console.log(newUser);
    return newUser;
    
}