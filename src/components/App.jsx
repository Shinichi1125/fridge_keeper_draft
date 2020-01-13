import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";

function App(){
    const [loggedin, setBoolean] = useState(false);

    function letLogin(){       
        setBoolean(true);
    }
    function letLogout(){
        setBoolean(false);
    }

    return <div>
        <Header onClick={letLogout}  />
        {!loggedin ? 
            <Login onClick={letLogin} /> :
            <div>
                <h1>Welcome to Fridge Manager!</h1>
                <Footer/>
            </div>
        }
    </div>
}

export default App; 