import {store} from '../store.js';
import signupUser from "../api/signupUser.js";
import loginUser from "../api/loginUser.js";

export default function UserAccountReducer(account={},action) {
  if (action.type === "SIGNUP_USER") {
     signupUser(store,action);
  }

  if (action.type === "SIGNUP_STATUS") {
    if(action.data.error){
      action.data.error="Account already exists for this email";
    }
    return action.data;
  }

  if (action.type === "LOGIN_USER") {
    loginUser(store,action);
  }

  if (action.type === "LOGIN_STATUS") {
    return action.data;
  }

  return account;
}