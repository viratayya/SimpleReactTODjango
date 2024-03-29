import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';



function CustomMain() {
 

  return (
    <div>
        <Container className="jumbotron col-4">
        <form className="form-signin">
            <h1 className="h3 mb-3 font-weight-bold text-uppercase">Brand_Logo</h1>
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label for="inputEmail" className="sr-only">Email address</label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
            <label for="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
            <div className="checkbox mb-3">
                <label>
                <input type="checkbox" value="remember-me"/> Remember me
                </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
        </Container>
    </div>
  );
}

export default CustomMain;
