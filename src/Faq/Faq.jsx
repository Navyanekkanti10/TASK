import React, { useState } from "react";

function Faq({que,detail}){
    let [bool,setbool]=useState(true)
    let show=()=>{
        setbool(!bool)
    }

    return(
        <div>
            <h1>{que}</h1>
            {
                 bool || <p>{detail}</p>
            }
            <button onClick={show}>{bool?"show":"hide"}</button>

        </div>
    )
    
}
export default Faq