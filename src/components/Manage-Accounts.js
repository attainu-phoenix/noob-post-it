import React from "react";
import {connect} from "react-redux";
import {store,stateMapper} from "../store/store.js";


class ManageAccountsComponent extends React.Component {
  
  componentDidMount() {
    store.dispatch({
      type:"FETCH_ACCOUNTS"
    })
  }

  handleUnlink(token) {
    store.dispatch({
      type:"UNLINK_ACCOUNT",
      token:token
    })
  }

  render() {
    return (
      <ul className="list-group">
        {this.props.useraccounts.map(user => {
          return (
            <li key={user.token} className="list-group-item d-flex justify-content-between align-items-center">
              <h6>{user.network}</h6>
              <h6 className="ml-1">{user.username}</h6>
              <button onClick={() => this.handleUnlink(user.token)} className="btn btn-danger">Unlink</button>
            </li>
          );
        })}
      </ul>
    );
  }
}

let ManageAccounts  = connect(stateMapper)(ManageAccountsComponent);

export {ManageAccounts};