import React from 'react';
import ReactDOM from 'react-dom';
import TwitterLogin from 'react-twitter-auth';
import { connect } from 'react-redux';
import{store,stateMapper} from "../store/store.js";


class TwitterAuthComponent extends React.Component {
    callback(data) {
        data.json().then(d => console.log(d))
    }

    render() {
        return (
            <TwitterLogin
                loginUrl="http://localhost:4444/auth/twitter/login"
                onFailure={this.callback}
                onSuccess={this.callback}
                requestTokenUrl="http://localhost:4444/auth/twitter/request"
            />
        );
    }
}

let TwitterAuth = connect(stateMapper)(TwitterAuthComponent);

export default TwitterAuth;