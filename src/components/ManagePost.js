import React from "react";
import { connect } from "react-redux";
import { stateMapper, store } from "../store/store.js";
import {BrowserRouter as Router, Route,Link,Redirect} from 'react-router-dom';

var status;
var TwitterPostId;
var postId;
var thisPostUrl;
var isSomethingChanged;
var user;

class ManagePostComponent extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            isPostDeleted : false,
            isPostTweeted : false,
        }
        this.handleDelete=this.handleDelete.bind(this);
        this.doRedirect=this.doRedirect.bind(this);   
        this.postOnTwitter=this.postOnTwitter.bind(this);
        this.deleteFromTwitter=this.deleteFromTwitter.bind(this);

        this.somethingChanged=this.somethingChanged.bind(this);
    }
  
  componentDidMount(){
    store.dispatch({
        type: "FETCH_ONE_POST",
        data : this.props.match.params.postId
      });
      if(this.props.singlePost.data){
      status=this.props.singlePost.data.Caption;
      }
      postId=this.props.match.params.postId;
      thisPostUrl=`/dashboard/viewposts`
      isSomethingChanged=false;
  }
  componentWillMount(){
      user=localStorage.getItem('user');
  }
  
   
  
 doRedirect = () =>{
     if(!user){
         return <Redirect to='/login'/>
     }
    if(this.state.isPostDeleted===true){
        return <Redirect to='/dashboard/viewposts'/>
        
    } 
  
  } 
  somethingChanged(){
      if(isSomethingChanged===true){
        return <Redirect to={thisPostUrl}/>
      }
  }


 handleDelete(){
   
   if(this.props.singlePost.data.postedOnTwitter){
    store.dispatch({
        type : 'DELETE_FROM_TWITTER',
        twitterPostId : this.props.singlePost.data.postIdTwitter,
    })
   }
   store.dispatch({
    type : 'DELETE_POST',
    data : this.props.match.params.postId
    } )
   this.setState({
       isPostDeleted : true
   })
 }

 postOnTwitter(event){
  if(status){
      store.dispatch({
          type : 'POST_TO_TWITTER',
          data : status
      })
      this.setState({isPostTweeted : true})
  }
 }

 postCreatedTwitter(){
     if(this.state.isPostTweeted){
       TwitterPostId=this.props.TwitterPosts.id_str;
       this.updateTwitterId();
     }
     
 }
 updateTwitterId(){
     store.dispatch({
         type : 'UPDATE_TWITTER_ID',
         postId : postId,
         twitterPostId : TwitterPostId
     })
     isSomethingChanged=true;
 }
 deleteFromTwitter(){
    if(this.props.singlePost.data.postIdTwitter){
        store.dispatch({
            type : 'DELETE_FROM_TWITTER',
            twitterPostId : this.props.singlePost.data.postIdTwitter,
            parsePostId : postId
        })
      isSomethingChanged=true;
    }
 }
 
  
    render(){
        return(
            <div class='col-md-9'>    
                   <h3>{this.props.singlePost.data&&this.props.singlePost.data.Caption}</h3>
                {this.props.usersocialaccounts.isTwitterConnected?
                (this.props.singlePost.data&&this.props.singlePost.data.postedOnTwitter?<button  className='hredbtn hredbtnfull' onClick={this.deleteFromTwitter}>Delete From Twitter</button>:<button  className='hredbtn hredbtnfull' onClick={this.postOnTwitter}>Post on twitter</button>)
                :<h4>Connect to twitter to post on it</h4>}
                {this.props.usersocialaccounts.isInstagramConnected?
                (this.props.singlePost.data&&this.props.singlePost.data.postedOnInstagram?<button  className='hredbtn hredbtnfull'>Delete From Instagram</button>:<button>Post on Instagram</button>)
                :<h4>Connect to Instagram to post on it</h4>}
                {this.props.usersocialaccounts.isFacebookConnected?
                (this.props.singlePost.data&&this.props.singlePost.data.postedOnFacebook?<button className='hredbtn hredbtnfull'>Delete From Facebook</button>:<button>Post on Facebook</button>)
                :<h4>Connect to Facebook to post on it</h4>}  
                {this.postCreatedTwitter()}
                <button onClick={this.handleDelete}>Delete Post</button>
                {this.doRedirect()}
                {this.somethingChanged()}
            </div>
           
        )
    }
}

let ManagePost=connect(stateMapper)(ManagePostComponent);

export default ManagePost;