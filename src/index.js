import React from "react";
import ReactDOM from "react-dom";
import SignUpComponent from "./components/Sign-Up.js";


class Home extends React.Component {
  render() {
    return ( 
     <h1>hello world</h1>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));
