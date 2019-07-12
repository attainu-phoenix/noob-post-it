import {store} from '../store.js';
import {connectTwitter} from "../api/handleTwitterAuth.js";

export default function UserTwitterAccountReducer(twitter={},action) {

  if (action.type === "CONNECT_TWITTER") {
     connectTwitter(store,action);
  }

  if (action.type === "TWITTER_STATUS") {
    return twitter;
  }


  return twitter;
}