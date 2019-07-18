import React from 'react';
import { store, stateMapper} from "../store/store.js";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import TwitterLogin from "react-twitter-auth";
let social = JSON.parse(localStorage.getItem("social"));
class SideBarComponent extends React.Component{
    
    componentDidMount() {
        store.dispatch({
          type: "FETCH_ACCOUNTS"
        });
      }
      handleUnlink() {
        store.dispatch({
          type: "REMOVE_TWITTER",
          objectId: social.objectId
        });
      }
      constructor(props){
        super(props);
        this.callback=this.callback.bind(this);
        this.twitterLoginComponent=this.twitterLoginComponent.bind(this);
      }
    
      callback(data) {
      console.log(data);
        let initialState=Object.assign({}, social);
        data.json().then(d => {
          initialState.isTwitterConnected = true;
          initialState.twitterData = d;
          store.dispatch({
            type: "CONNECT_TWITTER",
            data: initialState
          });
        });
      }
      twitterLoginComponent(){
       return (<TwitterLogin
        loginUrl="http://localhost:4444/auth/twitter/login"
        requestTokenUrl="http://localhost:4444/auth/twitter/request"
        onFailure={this.callback}
        onSuccess={this.callback}  
      />)
      }
    render(){
        
        return(
            <div className='col-md-3 hsidebar'>
                <div className='row' style={{paddingBottom : 6}}>
                    <input type='submit' className="mx-auto btn btn-ghost" value="Connect to instagram"/>
                </div>
                <div className='row' style={{paddingBottom : 6}}>
                    <input type='submit' className="mx-auto btn btn-ghost" value="Connect to facebook"/>
                </div>
                <div className='row' style={{paddingBottom : 50}}>
                    {(this.props.usersocialaccounts&& !this.props.usersocialaccounts.isTwitterConnected)?
                        this.twitterLoginComponent()
                    :<button className='hbtn hbtn-ghost' onClick={this.handleUnlink}><i><ion-icon name="logo-twitter"></ion-icon></i>{this.props.usersocialaccounts.twitterData.screen_name}</button>}
                   
                </div>
                <div className='row'>
                  <input type='submit' className="mx-auto btn btn-ghost" value="Manage Accounts"/>
                </div>
            </div>
        );
    }
}

let SideBar=connect(stateMapper)(SideBarComponent);

export default SideBar;