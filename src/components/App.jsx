import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";

//function App(){
class App extends React.Component{
/*    const [loggedin, setBoolean] = useState(false);
    function letLogin(){       
        setBoolean(true);
    }
    function letLogout(){
        setBoolean(false);
    }  */

    constructor(){
        super();
        this.state = {
            loggedin: false
        }
        this.letLogin = this.letLogin.bind(this);
        this.letLogout = this.letLogout.bind(this);
    }
    letLogin(){
        this.setState({ loggedin: true});
    }
    letLogout(){
        this.setState({ loggedin: false});
    }
    // as a functional component it's fine without 'this.'
    // but as a class component 'this.' is required, otherwise 
    // it doesn't pass the unit test  
    render(){
    return <div>
        <Header onClick={this.letLogout}  />
        {!this.loggedin? 
            <Login onClick={this.letLogin} />:
            <div>
                <h1>Welcome to Fridge Manager!</h1>
                <Footer/>
            </div>
        }
    </div>
    }
}

export default App; 