import React, { useState } from "react";
   export default function Form(){

     let[formdata,setformdata]=useState({name:"",age:"",mobile:""})
     let[submit,setsubmit]=useState("")

     let updateformdata=({target:{name,value}})=>{
        setformdata({...formdata,[name]:value})
    }

let submitdata=(e)=>{
e.preventDefault()
console.log(formdata);
setformdata({name:"",age:"",mobile:""})
}


    return(
        <div>
            <form action="" onSubmit={submitdata}>
                <div>
                    <input type="text"  placeholder="name"  name="name" onChange={updateformdata} value={formdata.name}/>
                    </div>
                <div>
                    <input type="number" placeholder="age" name="age" onChange={updateformdata}  value={formdata.age}/>
                
                </div>
                <div>
                    <input type="tel" placeholder="mobile"  name="mobile" onChange={updateformdata} value={formdata.mobile}/></div>
                    <button>submit</button>
            </form>

            {
              <div>
                
              </div>
                
            }
        </div>
    )
  }