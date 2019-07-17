import {createStore, combineReducers} from 'redux';
import UserSocialAccountsReducer from "./reducers/UserSocialAccountsReducer.js"
import UserAccountReducer from "./reducers/UserAccountReducer.js";
import UserTwitterAccountReducer from "./reducers/UserTwitterAccountReducer.js";
import PostsReducer from "./reducers/PostsReducer";

let reducer = combineReducers({ 
    usersocialaccounts:UserSocialAccountsReducer,
    useraccount:UserAccountReducer,
    twitter:UserTwitterAccountReducer,
    Posts:PostsReducer
});

let store = createStore(reducer);

store.subscribe(function(){
    console.log( store.getState() );
});

let stateMapper = function (state) {
    return state;
}



export{store,stateMapper}