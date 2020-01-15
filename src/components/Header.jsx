import React from "react";

function Header(prop){
    return <header>
        <h1 className="header-title">Fridge Manager
            <span className="header-child1">
                <button 
                    className="btn btn-secondary header-btn"
                    onClick={prop.onClick}
                >   
                    Log out
                </button>
            </span>
        </h1>
    </header>
}

export default Header; 