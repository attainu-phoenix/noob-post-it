import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/Login.js";
import {Provider} from "react-redux";
import {store} from "./store/store.js";
import {ManageAccounts} from "./components/Manage-Accounts.js";
import TwitterAuth from "./components/TwitterAuth.js";
import SignUp from "./components/Sign-Up.js";


class Home extends React.Component {

  render() {
    return (
      <Provider store={store}>
      <div className="container-fullwidth">
      <div className="row">
        <div className="col-md-12">
          <TwitterAuth/>
        </div>
      </div>
      </div>
      </Provider>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));
