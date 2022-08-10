import React from "react";
import globe from "./images/navGlobe.png";


export default function Navbar(argument) {
    return(

        <nav className="navv">
            <img alt="location pin" className="nav--logo" src={globe} />
            <h3 className="nav--title">my travel journal.</h3>
        </nav>

    )
}