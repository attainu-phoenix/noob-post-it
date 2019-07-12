import {createStore, combineReducers} from 'redux';
import UserSocialAccountsReducer from "./reducers/UserSocialAccountsReducer.js"
import UserAccountReducer from "./reducers/UserAccountReducer.js";
import UserTwitterAccountReducer from "./reducers/UserTwitterAccountReducer.js";
let reducer = combineReducers({ 
    usersocialaccounts:UserSocialAccountsReducer,
    useraccount:UserAccountReducer,
    twitter:UserTwitterAccountReducer
});

let store = createStore(reducer);

store.subscribe(function(){
    console.log( store.getState() );
});

let stateMapper = function (state) {
    return state;
}



export{store,stateMapper}