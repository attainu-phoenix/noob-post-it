import React from "react";

class LoginComponent extends React.Component {
  state = {
    formState: {
      isFormValid: true,
      isEmailValid: true,
      isPasswordValid: true
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validateInput() {
    let initialState = {
      isFormValid: true,
      isEmailValid: true,
      isPasswordValid: true
    };

    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!this.state.email || reg.test(this.state.email) === false) {
      initialState.isFormValid = false;
      initialState.isEmailValid = false;
    }

    if (!this.state.password) {
      initialState.isFormValid = false;
      initialState.isPasswordValid = false;
    }

    this.setState({
      formState: initialState
    });

    return initialState.isFormValid;
  }

  checkCredentials() {
    let { email, password } = this.state;
    let User = JSON.parse(localStorage.getItem("user"));
    return User.email !== email || User.password !== password ? false : true;
  }

  handleSubmit = e => {
    if (!this.validateInput()) {
      return;
    }

    return !this.checkCredentials()
      ? console.log("invalid credentials")
      : console.log("logged in");
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-fixed-top navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            PostIt
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#btcNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="btcNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link">
                  SignUp
                </a>
              </li>
              <li className="nav-item">
                <a href="/prcing" className="nav-link">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="row">
          <div className="offset-md-4 col-md-4">
            <h2 className="display-4 text-center">Login Here</h2>
            <hr />
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                {!this.state.formState.isFormValid && (
                  <div>
                    <h3>
                      <span className="badge badge-pill badge-danger">
                        Please Fill All The Input Boxes.
                      </span>
                    </h3>
                  </div>
                )}
                <label>Email</label>
                <input
                  onChange={this.handleChange}
                  name="email"
                  type="text"
                  className={`form-control ${!this.state.formState
                    .isEmailValid && "is-invalid"}`}
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  onChange={this.handleChange}
                  name="password"
                  type="password"
                  className={`form-control ${!this.state.formState
                    .isPasswordValid && "is-invalid"}`}
                  placeholder="Password"
                />
              </div>
              <button
                onClick={this.handleSubmit}
                type="button"
                className="btn btn-primary"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginComponent;
