import React from "react";
export default function Studimg({image}){
    let s={height:"200px",weight:"200px"}
    let styl={border:"1px solid black",height:"250px",width:"200px"}
    return (
        <div style={styl}>
        <img style={s} src={image} alt=""/>
        </div>
    )
}