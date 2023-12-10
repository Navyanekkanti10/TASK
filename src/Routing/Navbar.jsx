import React from "react";
import {Link} from "react-router-dom"
import Navbarstyles from './Navbarstyle.module.css'
export default function Navbar({navlinks,navpaths,classname,anchorClass}){
    
    return(
        <nav className={classname}>
            <Link classname={anchorClass} to={navpaths.url1}>{navlinks.key1}</Link>
            <Link classname={anchorClass} to={navpaths.url2}>{navlinks.key2}</Link>
            <Link classname={anchorClass} to={navpaths.url3}>{navlinks.key3}</Link>
            <Link classname={anchorClass} to={navpaths.url4}>{navlinks.key4}</Link>
        </nav>
    )
} 