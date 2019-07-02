import React from "react";
import NavBarComponent from './NavBar.js';
import SideBarComponent from './SideBar.js';
import CreatePostComponent from "./CreatePost.js";


class Dashboard extends React.Component {
    constructor(props){
      super(props);
      this.state={
          isFacebookConnected : false,
          isTwitterConnected  : false,
          isInstagramConnected : false,
          caption : "",
          photo   : "",
          isFacebookChecked : false,
          isInstagramChecked : false,
          isTwitterChecked : false,
          isPostSubmitted : false
      }
      this.facebookConnected=this.facebookConnected.bind(this);
      this.instagramConnected=this.instagramConnected.bind(this);
      this.twitterConnected=this.twitterConnected.bind(this);
      this.captionChanged=this.captionChanged.bind(this);
      this.photoLocation=this.photoLocation.bind(this);
      this.handleFacebookChecked=this.handleFacebookChecked.bind(this);
      this.handleInstagramChecked=this.handleInstagramChecked.bind(this);
      this.handleTwitterChecked=this.handleTwitterChecked.bind(this);
      this.submitPost=this.submitPost.bind(this);
  
  }
  facebookConnected = (event) =>{
      this.setState({isFacebookConnected : true});
  }
  instagramConnected = (event) =>{
      this.setState( {isInstagramConnected : true});
  }
  twitterConnected = (event) =>{
      this.setState({isTwitterConnected : true}); 
  }
  captionChanged = (event) =>{
  this.setState({caption : event.target.value});
  }
  photoLocation = (event) =>{
    this.setState({photo : event.target.value});
  }
  handleFacebookChecked () {
    this.setState({isFacebookChecked: !this.state.isFacebookChecked});
  }
  handleInstagramChecked () {
    this.setState({isInstagramChecked: !this.state.isInstagramChecked});
  }
  handleTwitterChecked () {
    this.setState({isTwitterChecked: !this.state.isTwitterChecked});
  }
  submitPost = () =>{
    this.setState({isPostSubmitted : true})
    console.log(this.state);
  }
    render() {
      return (<div className='container'>
                <NavBarComponent />
  
                <div >
                  <div class='row'>
                    <SideBarComponent isAccountsConnected={this.state}
                                      facebookConnected={this.facebookConnected}
                                      instagramConnected={this.instagramConnected}
                                      twitterConnected={this.twitterConnected}/>
                    <CreatePostComponent isAccountsConnected={this.state}
                                          captionChanged={this.captionChanged}
                                          photoLocation={this.photoLocation}
                                          handleFacebookChecked={this.handleFacebookChecked}
                                          handleInstagramChecked={this.handleInstagramChecked}
                                          handleTwitterChecked={this.handleTwitterChecked}
                                          submitPost={this.submitPost}/>
                  </div>
                </div>
              </div>);
    }
  }

  export default Dashboard;