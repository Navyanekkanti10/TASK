import React, { useReducer } from "react";

let CountReducer=(cstate,action)=>{
    console.log(cstate);
    console.log(action);
    switch(action){
        case 'increment':return cstate+1
        case 'decrement':return cstate-1
        case 'reset':return 0
    }
    

}


 export default function UsereducerHook1(){
let[count,dispatcher]=useReducer(CountReducer,0)
return(
    <div>
        <h1>count:{count}</h1>
        <button onClick={()=>{dispatcher("increment")}}>increment</button>
        <button onClick={()=>{dispatcher("decrement")}}>decrement</button>
        <button onClick={()=>{dispatcher("reset")}} >reset</button>
    </div>
)
}