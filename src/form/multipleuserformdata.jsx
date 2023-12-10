import React, { useState }  from "react";


 export default function Form(){
  
    let[formdata,setformdata]=useState([{fn:"",ln:"",age:"",gender:"",email:"",password:"",mobile:""}])
    let[submit,setsubmit]=useState([])


    let updateformdata=({target:{name,value}})=>{
        setsubmit({...submit,[name]:value})
        console.log(submit);
    }
    let senddata=(e)=>{
        e.preventDefault()  
    console.log(formdata);

    setformdata([{...formdata,...submit}])
      }



    return (
        <div>
           
                <form onSubmit={senddata }>
<label htmlFor="">First Name</label>
<input type="text" placeholder="first name"  name="fn" value={formdata.fn}  onChange={updateformdata}/>
<br />
<label htmlFor="">Last Name</label>
<input type="text" placeholder="last name" name="ln"  value={formdata.ln} onChange={updateformdata}/>
<br />
<label htmlFor="">Age</label>
<input type="number" placeholder="age"  value={formdata.age}   onChange={updateformdata} name="age"/>
<br />

<label htmlFor="">Gender</label>
<input type="radio" placeholder="gender"   value={formdata.gender} onChange={updateformdata}name="gender" id="female"/>
<label htmlFor="female">female</label>
<input type="radio" placeholder="gender"   value={formdata.gender} onChange={updateformdata} name="gender" id="male"/>
<label htmlFor="male">male</label>
<br />
<label htmlFor="">Email</label>
<input type="email"  placeholder="email"  value={formdata.email} onChange={updateformdata} name="email"/>
<br />
<label htmlFor="">Password</label>
<input type="password"  placeholder="password"  value={formdata.password} onChange={updateformdata} name="password"/>
<br />
<label htmlFor="">Mobile</label>
<input type="tel"  placeholder="mobile"   value={formdata.mobile} onChange={updateformdata} name="mobile"/>
<br />
<button   type="submit">submit</button>
            </form>
       
            <div>
                {
                    formdata.map(({fn,ln,age,gender,email,password,mobile},index)=>{
                       return <div key={index}>
                         <p>{fn}</p>
                        <p>{ln}</p>
                        <p>{age}</p>
                        <p>{gender}</p>
                        <p>{email}</p>
                        <p>{password}</p>
                        <p>{mobile}</p>
                        </div>
                    })
                }
            </div>
           
                    
                
        </div>
    )
    
}