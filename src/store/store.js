import {createStore, combineReducers} from 'redux';
import UserSocialAccountsReducer from "./reducers/UserSocialAccountsReducer.js"
import UserAccountReducer from "./reducers/UserAccountReducer.js";
let reducer = combineReducers({ 
    usersocialaccounts:UserSocialAccountsReducer,
    useraccount:UserAccountReducer
});

let store = createStore(reducer);

store.subscribe(function(){
    console.log( store.getState() );
});

let stateMapper = function (state) {
    return state;
}



export{store,stateMapper}