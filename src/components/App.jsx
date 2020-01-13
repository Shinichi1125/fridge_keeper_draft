import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";

function App(){

    const [loggedin, setBoolean] = useState(false);
    let isLoggedIn = false; 
    let isPropPassed = true;

    function letLogin(event){       
        console.log("letLogin got called!");
     /*   isLoggedIn = true;
        console.log("Value of isLoggedIn: " + isLoggedIn);
        alert("letLogin got called!");
        event.preventDefault();  */
        setBoolean(true);
    }
    function letLogout(){
        //isLoggedIn = false; 
        console.log("letLogout got called!");
        setBoolean(false);
    }

    return <div>
        <Header/>
        <button 
            className="btn btn-success"
            onClick={letLogin}
          >   
            Easy Log in
          </button>
          <button 
            className="btn btn-secondary"
            onClick={letLogout}
          >   
            Log out
          </button>
        {!loggedin ? 
            <Login
                easyLogin={letLogin}
                propBoolean={isPropPassed}
            /> :
            <div>
                <h1>Welcome to Fridge Manager!</h1>
                <Footer/>
            </div>
        }
    </div>
}

export default App; 