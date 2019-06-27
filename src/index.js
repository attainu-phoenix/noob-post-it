import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import SignUpComponent from "./components/Sign-Up.js";
import login from "./assets/images/login.jpg";


class Home extends React.Component {
  render() {
    return ( 
      <div className="container-fullwidth">
      <div className="row">
        <div className="col-md-12">
          <SignUpComponent />
        </div>
      </div>
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));
