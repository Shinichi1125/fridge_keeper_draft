import React from "react";

function Login(props){

    let {letLogin, propBoolean} = props;

    function checkClicked(){
      console.log("Button clicked!");
      console.log(props);
      console.log(letLogin);
      console.log(propBoolean);
      alert("Button clicked!")
      //event.preventDefault();
    }

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
            onClick={checkClicked}
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