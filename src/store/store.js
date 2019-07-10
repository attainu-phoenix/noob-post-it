import {createStore, combineReducers} from 'redux';
import UserSocialAccountsReducer from "./reducers/manageUserSocialAccountsReducer.js"

let reducer = combineReducers({ 
    usersocialaccounts:UserSocialAccountsReducer
});

let store = createStore(reducer);

store.subscribe(function(){
    console.log( store.getState() );
});

let stateMapper = function (state) {
    return state;
}



export{store,stateMapper}