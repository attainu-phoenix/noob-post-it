import React from "react";
import { connect } from "react-redux";
import { stateMapper, store } from "../store/store.js";
import {BrowserRouter as Router, Route,Link,Redirect} from 'react-router-dom';


class ManagePostComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isPostDeleted : false,
            caption  : ''
        }
        this.handleDelete=this.handleDelete.bind(this);
        this.renderPost=this.renderPost.bind(this);
        this.doRedirect=this.doRedirect.bind(this);
        
    }
  componentDidMount(){
    store.dispatch({
        type: "FETCH_ONE_POST",
        data : this.props.match.params.postId
      });
  }
   
  renderPost(){
    return this.props.Posts.map( p =>{
       return(
           <div key={p.objectId}>
            
                <h3>{p.Caption}</h3>
                {this.props.usersocialaccounts.isTwitterConnected?
                (p.postedOnTwitter?<button onClick={this.deleteFromTwitter}>Delete From Twitter</button>:<button onClick={this.postToTwitter}>Post on twitter</button>)
                :<h4>Connect to twitter to post on it</h4>}
                {this.props.usersocialaccounts.isInstagramConnected?
                (p.postedOnInstagram?<button>Delete From Instagram</button>:<button>Post on Instagram</button>)
                :<h4>Connect to Instagram to post on it</h4>}
                {this.props.usersocialaccounts.isFacebookConnected?
                (p.postedOnFacebook?<button>Delete From Facebook</button>:<button>Post on Facebook</button>)
                :<h4>Connect to Facebook to post on it</h4>}
           </div>
           
           
       )
    })
  
 }
 doRedirect = () =>{
    if(this.state.isPostDeleted){
        return <Redirect to='/dashboard/viewposts'/>
        
    } 
  } 

 handleDelete(){
   store.dispatch({
       type : 'DELETE_POST',
       data : this.props.match.params.postId
   })
   this.setState({
       isPostDeleted : true
   })
   

 }

 postToTwitter(){
     store.dispatch({
         type : 'POST_TO_TWITTER',
         data : this.props
     })
 }
    
    render(){
        return(

            <div class='col-md-9'>
                {this.renderPost()}
                
                <button onClick={this.handleDelete}>Delete</button>
                {this.doRedirect()}
            </div>
           
        )
    }
}

let ManagePost=connect(stateMapper)(ManagePostComponent);

export default ManagePost;