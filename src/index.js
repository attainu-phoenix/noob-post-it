import React from "react";
import ReactDOM from "react-dom";
import LoginComponent from "./components/Login.js";


class Home extends React.Component {
  render() {
    return (
      <div className="container-fullwidth">
      <div className="row">
        <div className="col-md-12">
          <LoginComponent />
        </div>
      </div>
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));
