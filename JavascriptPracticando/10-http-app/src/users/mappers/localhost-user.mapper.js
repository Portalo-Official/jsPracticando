import { User } from "../models/user-model";

/**
 * 
 * @param {Like<User>} localhostUser - luce como un usuario
 * @returns {User}
 */
export const localhostUserToModel = ( localhostUser ) =>{

    const {
        avatar,
        balance,
        first_name,
        gender,
        id,
        isActive,
        last_name,
    } = localhostUser;

    return new User({
      avatar,
      balance,
      firstName: first_name,
      gender,
      id,
      isActive,
      lastName: last_name,
    });
}
/**
 * 
 * @param {Array<Like<User>>} localhostUser - luce como un usuario
 * @returns {Array<User>}
 */
export const localhostUserListToModelList = ( localhostUser ) =>{

    return localhostUser.map((likeUser) => localhostUserToModel(likeUser));
}

/**
 * 
 * @param {User} localhostUser - luce como un usuario
 * @returns {Like<User>}
 */
export const mapUserTolocalhostUser = (user) => {
  const { avatar, balance, firstName, gender, id, isActive, lastName } = user;

  return ({
    avatar,
    balance,
    first_name: firstName,
    gender,
    id,
    isActive,
    last_name: lastName,
  });
};