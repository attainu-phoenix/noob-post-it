import React from "react";
import { store, stateMapper} from "../store/store.js";

import {connect} from "react-redux";
import {BrowserRouter as Router, Route,Link,Redirect} from 'react-router-dom';
import NavBar from './NavBar.js'
import CreatePost from './CreatePost.js';
import SideBar from './SideBar.js'
import ViewPosts from './ViewPosts.js';
import ManagePost from "./ManagePost.js";


class DashboardComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userObjectId : this.props.useraccount.objectId,
            userEmail : this.props.useraccount.email,
            userName  : this.props.useraccount.name,
            isFacebookConnected : false,
            isTwitterConnected  : false,
            isInstagramConnected : false,
            caption : "",
        }
        this.doRedirect=this.doRedirect.bind(this);
        this.changeCaption=this.changeCaption.bind(this);
    }


      doRedirect = () =>{
        if(localStorage.getItem('user')){
            return <Redirect to='/dashboard'/>
            
        }
        else{
            return <Redirect to='/login'/>
        }
        
      } 
      changeCaption=(event)=>{this.setState({caption : event.target.value})}
    render(){
        return(
            
            <div className='landing'>
               
                <NavBar />
                <div className='container' style={{marginTop : 200}}>
                    <div className='row'>
                        <SideBar/>
                        <Route path='/dashboard' exact={true} render={(props)=><CreatePost 
                                                                CurrentState={this.state}
                                                                changeCaption={this.changeCaption}/>} />
                        <Route path='/dashboard/viewposts' exact={true} component={ViewPosts} />
                        <Route path='/dashboard/managepost/:postId' exact={true} component={ManagePost} />
                        
                    </div>
                </div>
               {this.doRedirect()}
            </div>
           
        )
    }

}

let Dashboard=connect(stateMapper)(DashboardComponent);

export default Dashboard;

