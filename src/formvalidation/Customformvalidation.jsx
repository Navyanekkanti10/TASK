
import React, { useState } from "react";
export default function Customformvalidation(){
    let [formdata, setformdata] = useState({ fn: "", mob: "", email: "", pwd: "" })
    let [error, seterror] = useState({})

    // ! updating state with entered data from thr ui
    let updateformdata=({target:{name,value}})=>{
        setformdata({...formdata,[name]:value})
    }

    // ! submit form data

    let submitformdata=(e)=>{
e.preventDefault()
seterror(validateform(formdata))

    }

    // ! validating form data

    let validateform=(fdata)=>{
let errormessage={};
// ^ fn validate code 
if(!fdata.fn){
  errormessage.fnmessage="fullname is mandatory"
}
else if(fdata.fn.length<6){
    errormessage.fnmessage="fullname should contain atleast 6 characters"
    }
    // ! mobile validation

    if(!fdata.mob)
    {
        errormessage.mobmessage="Mobile is mandatory"  
    }
    return errormessage
}

    console.log(error);


    return (
        <div>
            <form action="" onSubmit={submitformdata}>
                <div className="div">
                    <input type="text" placeholder="fullname" name="fn"  onChange={updateformdata} value={formdata.fn} />
                   </div>
                <small>{ error.fnmessage && error.fnmessage}</small>
                <div className="div">
                    <input type="text"placeholder="mobile" name="mob"  onChange={updateformdata} value={formdata.ln} />
                </div>
                <small>{ error.mobmessage && error.mobmessage}</small>
                <div className="div">
                    <input type="text" placeholder="email" name="email" onChange={updateformdata} value={formdata.email} />
                </div>
                <small>{ error.emailmessage && error.emailmessage}</small>
                <div className="div">
                    <input type="text" placeholder="password" name="pwd"  onChange={updateformdata} value={formdata.pwd}/>
                </div>
                <small>{ error.pwdmessage && error.pwdmessage}</small>
                <div>
                    <button type="submit">Register</button>
                </div>

            </form>
        </div>
    )
}
