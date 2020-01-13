import React from "react";

function Login(prop){
    return (
      <div className="login-body">
        <form> 
          <div className="form-signin">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" name="username"/>
          </div>
          <div className="form-signin">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" name="password"/>
          </div>
          <button className="btn btn-dark">Log in</button>
          <br></br>
          <button 
            className="btn btn-success"
            onClick={prop.onClick}
          >   
            Easy Log in
          </button>
          <br></br>
          <p className="alert alert-info">↑ Just click "Easy Log in" and you can log in</p>  
        </form>
      </div> 
    );
}

export default Login; 