import React from 'react';


class NavBarComponent extends React.Component{
        render(){
                return(
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Post IT</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#"><i className="fa fa-share-alt" aria-hidden="true"></i>Share</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Published</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa fa-search" aria-hidden="true"></i> Search</a>
                            </li>
                        </ul>
                        <span className="navbar-text">
                                <a className="nav-link" href="#">Logout</a>
                        </span>
                    </div>
                </nav>
        )
    }
}

export default NavBarComponent;