import {createStore, combineReducers} from 'redux';

let reducer = combineReducers({ });

let store = createStore(reducer);

store.subscribe(function(){
    console.log( store.getState() );
});

let stateMapper = function (state) {
    return state;
}

export{store,stateMapper}