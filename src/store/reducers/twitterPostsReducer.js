import {store} from '../store.js';
import {sendTweet , removeTweet} from '../api/handleTwitterPosting.js';

function twitterPostsReducer(twitterPosts={},action){
    if(action.type==="POST_TO_TWITTER"){
        sendTweet(store,action);
    }
    if(action.type==="POSTED_TO_TWITTER"){
        twitterPosts=action.data.result;
    }
    
    if(action.type==='DELETE_FROM_TWITTER'){
        removeTweet(store,action);
    }
    return twitterPosts;
}