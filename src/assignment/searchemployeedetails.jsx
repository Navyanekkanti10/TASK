
import React, { useState } from "react";
export default function Searchemployeedetails() {
    let [formdata, setformdata] = useState({ fn: "", mob: "", email: "", pwd: "" })
    let [error, seterror] = useState({})
    let [users, setusers] = useState([])
    let [searchName, setsearchName] = useState("")
    let [searchresults, setsearchresults] = useState([])



    // ! updating state with entered data from thr ui
    let updateformdata = ({ target: { name, value } }) => {
        setformdata({ ...formdata, [name]: value })
    }

    // ! submit form data

    let submitformdata = (e) => {
        e.preventDefault()
        seterror(validateform(formdata))
        setusers([...users, formdata])
        setformdata({ fn: "", mob: "", email: "", pwd: "" })


    }

    // ! validating form data

    let validateform = (fdata) => {
        let errormessage = {};
        // ^ fn validate code 
        if (!fdata.fn) {
            errormessage.fnmessage = "fullname is mandatory"
        }
        else if (fdata.fn.length < 6) {
            errormessage.fnmessage = "fullname should contain atleast 6 characters"
        }
        // ! mobile validation

        if (!fdata.mob) {
            errormessage.mobmessage = "Mobile is mandatory"
        }
        return errormessage
    }

    // console.log(error);
    // console.log(formdata);
    console.log(users);
    let searchname = (e) => {
        setsearchName(e.target.value)
    }
    let searchnameresult = () => {
        let userdetails = ""
        if (users.fn === searchName) {
            userdetails = userdetails
        }
        if (userdetails) {
            setsearchresults(userdetails)
        }
    }






    return (
        <div>

            <div>
                <input type="text" placeholder="search employee" onChange={searchname} />
                <button onClick={searchnameresult} >search</button>
                <section>
                    <h1>user details</h1>
                    <ul>
                        {
                            users.map((userdetails, i) => {
                                <li key={i}>
                                    <p>{users.fn}</p>
                                    <p>{users.mob}</p>
                                    <p>{users.email}</p>
                                    
                                </li>
                            })
                        }
                    </ul>
                </section>

            </div>
            <br />
            <hr />

            <form action="" onSubmit={submitformdata}>
                <div className="div">
                    <input type="text" placeholder="fullname" name="fn" onChange={updateformdata} value={formdata.fn} />
                </div>
                <small>{error.fnmessage && error.fnmessage}</small>
                <div className="div">
                    <input type="text" placeholder="mobile" name="mob" onChange={updateformdata} value={formdata.mob} />
                </div>
                <small>{error.mobmessage && error.mobmessage}</small>
                <div className="div">
                    <input type="text" placeholder="email" name="email" onChange={updateformdata} value={formdata.email} />
                </div>
                <small>{error.emailmessage && error.emailmessage}</small>
                <div className="div">
                    <input type="text" placeholder="password" name="pwd" onChange={updateformdata} value={formdata.pwd} />
                </div>
                <small>{error.pwdmessage && error.pwdmessage}</small>
                <div>
                    <button type="submit">Register</button>
                </div>

            </form>

        </div>
    )
}
