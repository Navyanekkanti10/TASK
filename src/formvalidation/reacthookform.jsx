import React from "react";
import { useForm } from 'react-hook-form';

function Reacthookform() {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    // console.log(handleSubmit);
    // console.log(register());
    console.log(errors);

    let submitformdata = (fdata) => {
        console.log(fdata);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submitformdata)}   >
                <div >
                    <input type="text" placeholder="fullname" {...register("fn",{required:{value:true,message:"fullname is required"},minLength:{value:6,message:"fullname should contain atleast 6 characters"}})} />
                </div>
                <small>{errors.fn?.message}</small>
                <div >
                    <input type="text" placeholder="mobile"   {...register("mobile",{required:{value:true,message:"mobile is required"},minLength:{value:10,message:"mobile should contain atleast 10 numbers"},pattern:{value:/^[6-9][0-9]{9}$/,message:"mobile should contain only numbers"}})}/>
                </div>
                <small>{errors.mobile?.message}</small>
                <div >
                    <input type="text" placeholder="email"   {...register("email",{required:{value:true,message:"email is required"},pattern:{value:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,message:"pattrern is not correct"}})}/>
                </div>
                <small>{errors.email?.message}</small>
                <div >
                    <input type="text" placeholder="password"{...register("password",{required:{value:true,message:"password is required"},pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/,message:"strong password required"}})} />
                </div>
                <small>{errors.password?.message}</small>
                <div>
                    <button type="submit">Register</button>
                </div>
                

            </form>
        </div>
    )

}
export default Reacthookform