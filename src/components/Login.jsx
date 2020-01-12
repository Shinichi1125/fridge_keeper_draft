import React from "react";

function Login(){
    return (
      <div>
        <form> 
          <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" name="username"/>
          </div>
          <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" name="password"/>
          </div>
          <button class="btn btn-dark">Log in</button>
          <button class="btn btn-dark">Easy Log in</button>
        </form>
      </div> 
    );
}

export default Login; 