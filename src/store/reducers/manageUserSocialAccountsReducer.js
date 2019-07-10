import {store} from '../store.js';


export default function UserSocialAccountsReducer(
  accounts = [
    { network: "facebook", token: "ab", username: "mysweetbranch" },
    { network: "instagram", token: "abc", username: "mysweetbranch" },
    { network: "twitter", token: "abcd", username: "mysweetbranch" }
  ],
  action
) {
  if (action.type === "FETCH_ACCOUNTS") {
    return accounts;
  }

  if (action.type === "UNLINK_ACCOUNT") {
    return accounts = accounts.filter( account => account.token !== action.token);
  }



  return accounts;
}