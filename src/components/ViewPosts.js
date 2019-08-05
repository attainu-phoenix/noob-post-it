import React from "react";
import { store, stateMapper} from "../store/store.js";

import {connect} from "react-redux";
import {Route , Link ,BrowserRouter as Router,Redirect} from 'react-router-dom';
var user;
class ViewPostsComponent extends React.Component{
    componentDidMount() {
        user=localStorage.getItem('user');
        if(user){
          store.dispatch({
            type: "FETCH_POSTS"
          });
        }
       
      }
      doRedirect(){
        if(!user){
         return <Redirect to='/login'/>
        }
      }
      
      renderPosts(){
         return this.props.Posts.map( p =>{
            let url=`/dashboard/managepost/${p.objectId}`
            return(
                <div key={p.objectId} style={{marginLeft:25, marginBottom : 20}}>
                   <div className="card" style={{width:220, padding: 15}}>
                        <div className="card-body">
                            <h5 className="card-title">Posted At:-{p.updatedAt}</h5>
                            <p className="card-text">{p.Caption}</p>
                            <Link to={url} className="card-link">Open</Link>
                        </div>
                    </div>
                </div>
            )
         })
       
      }
    
    render(){
        return(
            <div className='col-md-9'>
              <div className='row'>
                {this.renderPosts()};
              </div>
            
           
             
            </div>
        )
    }
}

let ViewPosts=connect(stateMapper)(ViewPostsComponent);

export default ViewPosts;