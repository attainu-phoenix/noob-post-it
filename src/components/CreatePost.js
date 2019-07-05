import React from 'react';



class CreatePostComponent extends React.Component{
    render(){
        return(
            <div className='col-md-8'>
            
                   
                        <div class="form-group">
                            <textarea className="form-control" 
                                      rows="5" id="Post" 
                                      placeholder="Share what's in your mind!"
                                      onChange={this.props.captionChanged}>
                            </textarea>
                            <input type="file" 
                                   className="form-control-file" 
                                   id="exampleFormControlFile1"
                                   onChange={this.props.photoLocation}>
                            </input>
                        </div>
                        <h4>Share this on</h4>
                       
                        {this.props.isAccountsConnected.isFacebookConnected ? 
                            <div>
                                 <input type="checkbox" name="Facebook" value="Facebook"  onChange={this.props.handleFacebookChecked}/>Facebook
                            </div> : 
                             <p>Connect Facebook Account to post on fb</p>}
                        {this.props.isAccountsConnected.isInstagramConnected ? 
                            <div>
                                 <input type="checkbox" name="Instagram" value="Instagram" onChange={this.props.handleInstagramChecked}/>Instagram
                            </div> : 
                             <p>Connect Instagram Account to post on Instagram</p>}
                        {this.props.isAccountsConnected.isTwitterConnected ? 
                            <div>
                                 <input type="checkbox" name="Twitter" value="Twitter" onChange={this.props.handleTwitterChecked}/>Twitter
                            </div> : 
                             <p>Connect Twitter Account to post on Twitter</p>}

                        <button className="btn btn-info" type="submit" onClick={this.props.submitPost}>Post IT</button>
                
            </div>
        )
    }
}


export default CreatePostComponent;