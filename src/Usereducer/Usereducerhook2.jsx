import React, { useReducer } from "react";

let initialstate=
{
    count1:0,
    count2:0
}

let countreducer=(cstate,action)=>{
    console.log(cstate);
    console.log(action);
    switch(action){
        case 'increment1':return {...cstate,count1:cstate.count1+1}
        case 'decrement1':return  {...cstate,count1:cstate.count1-1}
        case 'increment2':return  {...cstate,count2:cstate.count2+1}
        case 'decrement2':return  {...cstate,count2:cstate.count2-1}
        case 'reset':return initialstate
    }
    return cstate
}

 export default function UsereducerHook2(){
    let[cstate,dispatcher]=useReducer(countreducer,initialstate)
    return(
        <div>
            <h1>count1:{cstate.count1}</h1>
            <button onClick={()=>{dispatcher("increment1")}}>Increment</button>
            <button onClick={()=>{dispatcher("decrement1")}}>decrement</button>

            <h1>count2:{cstate.count2}</h1>
            <button onClick={()=>{dispatcher("increment2")}}>Increment</button>
            <button onClick={()=>{dispatcher("decrement2")}}>decrement</button>

            <br />
            <button onClick={()=>{dispatcher("reset")}}>Reset</button>
        </div>
    )
}