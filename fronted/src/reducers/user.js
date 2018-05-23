/**
 * Created by nxy on 2018/5/23.
 */
const User = (state = null, action) => {
  switch (action.type) {
    case 'signIn':
      return action.token;
    case 'signOut':
      return null;
    default:
      return state
  }
};