import React, { useReducer } from "react";

function UsereducerHook(){
    let[count,dispatcher]=useReducer((cstate,action)=>{
        console.log(cstate);
        console.log(action);

        if(action==="increment"){
            return cstate+1
        }
        else if(action==="decrement"){
            return cstate-1
        }
    },0)
    return (
        <div>
            <h1>count:{count}</h1>
            <button onClick={()=>{dispatcher("increment")}}>inc</button>
            <button onClick={()=>{dispatcher("decrement")}}>dec</button>
        </div>
    )

}
export default UsereducerHook