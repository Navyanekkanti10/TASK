import React from "react";
import {  Outlet } from "react-router-dom";
import Navbarstyles from './Navbarstyle.module.css'
import Navbar from "./Navbar";
export default function Produts(){
    return(
        <div>
            <h1>Produts</h1>
            < Navbar navlinks={{key1:"Mobiles",key2:"Watches",key3:"Televisions",key4:"Laptops"}}
            navpaths={{url1:"mobiles",url2:"watches",url3:"television",url4:"laptops"}}
            classname={Navbarstyles.nav} anchorClass={Navbarstyles.a}/>
            <Outlet/>
        </div>
    )
}