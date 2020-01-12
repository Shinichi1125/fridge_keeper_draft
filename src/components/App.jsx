import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";

function App(){

    let isLoggedIn = false; 

    return <div>
        <Login/>
        <Header/>
        
        <Footer/>
    </div>
}

export default App; 