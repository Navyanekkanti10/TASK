import React from "react";
import { Link } from "react-router-dom";

function  Navbar(){
    return(
        <nav>
           <Link to="/">Home</Link>
           <Link to="/Products"></Link>
           <Link to="/Register">Login</Link>
           <Link to="/signupr">Signup</Link>
        </nav>
    )
}
export default Navbar