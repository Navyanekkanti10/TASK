import React, { useState } from "react";

export default function Addelements(){
let colors=["red","pink","blue","orange"]
let[IsArray,SetIsArray]=useState([])
let [Count,Setcount]=useState(0)
 let addcolour=()=>{
  colors.map(()=>{
  return SetIsArray([...IsArray,colors[Count]])
  })
   Setcount(Count+1)
}
   return(
    <div>
        <ol>
{IsArray.map((Element,index)=>(
    <li key ={index}>{Element}</li>
))}
        </ol>
        <button onClick={addcolour}>Add</button>
        
    </div>
   )
}