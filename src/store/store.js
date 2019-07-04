import {createStore, combineReducers} from 'redux';
import UserAccountsReducer from "./reducers/manageUserAccountsReducer.js"

let reducer = combineReducers({ 
    useraccounts:UserAccountsReducer
});

let store = createStore(reducer);

store.subscribe(function(){
    console.log( store.getState() );
});

let stateMapper = function (state) {
    return state;
}



export{store,stateMapper}