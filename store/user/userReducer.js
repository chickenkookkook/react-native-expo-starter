import userAction from "./userActions";
const initState = {
  username: undefined,
  password: undefined,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    //Change character name
    case userAction.LOGIN_ACTION:
      return (state = {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
      });
    case userAction.LOGOUT_ACTION:
      return (state = initState);
    default:
      return state;
  }
};

export default userReducer;
