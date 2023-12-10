import React from "react";
import Studimg from "./Studimg"
import Studname from "./Studname"
export default function Singlestudent({name,image}){
    return (
        <>
            <Studimg image={image} />
            <Studname name={name} />    
        </>
    )
}