import React from "react";
import { useState } from "react";

export default function Expenses({amount}){
    let sum=0;
    let rem;
   
    let [save,setsave]=useState("")
    let [savings,setsavings]=useState([])
   
    
    
    let updatesave=({target:{value}})=>{
        setsave(parseInt(value))       
    }
    
    let addexpense=()=>{
        setsavings([...savings,save])
        setsave("")
    }
    let deletexpense=(index)=>{
        let remain=savings.filter((e,i)=>{
         return index!==i
        })
        setsavings(remain)
    }
   
    return(
        <div>
            <h1>expenses</h1>
            <input type="number" placeholder="amount" onChange={updatesave} value={save}/>
            
            <button onClick={addexpense}>Add</button>
            <div>
                {savings.map((e,i)=>{
                    return <div key={i}>
                        <h3>{e}<button onClick={()=>deletexpense(i)}>delete</button></h3>
                    </div>
                })}
            </div>
            <div>
               
                <h1>Savings</h1>
                
                {savings.forEach((e)=>{
                 sum=sum+e
                 rem=amount-sum
                })}
                 <h4>{rem}</h4>     
            </div>
          
        
        </div>
    )
}