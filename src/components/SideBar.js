import React from 'react';


class SideBarComponent extends React.Component{
    
    
    
    
    
    
    render(){
        
        return(
            <div className='col-md-4'>

                <div className='row'>
                    <ul className="list-group">
                        <li className="list-group-item active">Connected Social Accounts</li>
                        {this.props.isAccountsConnected.isFacebookConnected ? <li className="list-group-item"><a href="#" className="fa fa-lg fa-facebook"> Facebook Connected</a></li> : <p></p>}
                        {this.props.isAccountsConnected.isInstagramConnected ? <li className="list-group-item"><a href="#" className="fa fa-lg fa-instagram"> Instagram Connected</a></li> : <p></p>}
                        {this.props.isAccountsConnected.isTwitterConnected ? <li className="list-group-item"><a href="#" className="fa fa-lg fa-twitter"> Twitter Connected</a></li> : <p></p>}
                    </ul>
                </div>
                <div className='row'>
                    <ul class="list-group">
                        <li class="list-group-item active bg-danger">Not connected Social Accounts</li>
                        {this.props.isAccountsConnected.isFacebookConnected ? <p></p> : <button onClick={this.props.facebookConnected} className="fa fa-lg fa-facebook">Connect Facebook</button>}
                        {this.props.isAccountsConnected.isInstagramConnected ? <p></p> : <button onClick={this.props.instagramConnected} className="fa fa-lg fa-instagram">Connect Instagram</button>}
                        {this.props.isAccountsConnected.isTwitterConnected ? <p></p> : <button onClick={this.props.twitterConnected} className="fa fa-lg fa-twitter">Connect twitter</button>}
                        
                    </ul>
                </div>
            </div>
        );
    }
}

export default SideBarComponent;