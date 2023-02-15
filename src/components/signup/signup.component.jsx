import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import './signup.component.css';

const SignupForm = () => {
    const {handleSubmit, register} = useForm([]);
    const signup = (data) => {
        fetch('http://ec2-34-238-76-176.compute-1.amazonaws.com/api/login', {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                businessName: data.businessName,
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phoneNumber: data.phoneNumber,
                password: data.password
                })
            })
            .then((response) => (
                response.json()))
            .then((data) => {
                if(data.success === true){
                    Navigate(`/pin`);
                } 
            })
        }
    return(
        <div className='signup-page'>
            <h1>Register your account</h1>
            <form className="signup-form" onSubmit={handleSubmit(signup)}>
                <label>Business Name</label>
                <input type="text" placeholder='Enter Text' {...register("businessName",{required: true})} required />
                <div className='name'>
                    <div className='firstname'>
                        <label>First Name</label>
                        <input type="text" placeholder='Enter firstname' {...register("firstName",{required: true})}required/>
                    </div>
                    <div className='lastname'>
                        <label>Last Name</label>
                        <input type="text" placeholder='Enter lastname' {...register("lastName",{required: true})} required/>
                    </div>
                </div>
                <label>Email</label>
                <input type="email" placeholder='Enter Email Address'{...register("email",{required: true})} required/>
                <label>Phone Number</label>
                <input type="phone" placeholder='2349102918870' {...register("phoneNumber",{required: true})} required/>
                <label>Create Password</label>
                <input type="password" placeholder='*********' {...register("password",{required: true})} required/>
                <div className="privacy">
                    <input type="checkbox" required />
                    <p>I consent to the collection and processing of my personal data in line with the data<br /> 
                    regulations as described in Persent’s Privacy Policy</p>
                </div>
                <button className='signup-button'>Sign Up</button>
            </form>
            <sub>By clicking the “Sign up” button, you agree to Persent’s Terms.</sub>
            <p className='route'>Already a user? <Link to='/' className='login-link'>login</Link> </p>
        </div>
    )
}

export default SignupForm;