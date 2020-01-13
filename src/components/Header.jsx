import React from "react";

function Header(prop){
    return <header>
        <h1>Fridge Manager</h1>
        <button 
            className="btn btn-secondary"
            onClick={prop.onClick}
        >   
            Log out
        </button>
    </header>
}

export default Header; 