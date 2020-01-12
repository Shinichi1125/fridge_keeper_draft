import React from "react";

function Login(){
    return (
      <div class="login-body">
        <form> 
          <div class="form-signin">
              <label for="email">Email</label>
              <input type="email" class="form-control" name="username"/>
          </div>
          <div class="form-signin">
              <label for="password">Password</label>
              <input type="password" class="form-control" name="password"/>
          </div>
          <button class="btn btn-dark">Log in</button>
          <br></br>
          <button class="btn btn-success">Easy Log in</button>
          <br></br>
          <p class="alert alert-info">↑ Just click "Easy Log in" and you can log in</p>

          
        </form>
      </div> 
    );
}

export default Login; 