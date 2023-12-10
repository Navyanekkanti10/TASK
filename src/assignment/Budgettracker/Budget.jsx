import React from "react";
import { useState } from "react";
import Expenses from "./Expense.jsx";
export default function Budget(){
    let [totalamt,settotalamt]=useState("")
    let Totalamount=({target:{value}})=>{
        settotalamt(value)
    }
    return(
        <div>
            <h1>Budget:{totalamt}</h1>
            <input type="number" value={totalamt} onChange={Totalamount}/>
            <Expenses amount={totalamt}/>
        </div>
    )
}