import React from 'react';
import './signup.component.css'

const SignupForm = () => {
    return(
        <div className='signup-form'>
            <h1>Register your account</h1>
            <label>Business Name</label>
            <input type="text" placeholder='Enter Text' required />
            <div className='name'>
                <div className='firstname'>
                    <label>First Name</label>
                    <input type="text" placeholder='Enter firstname' required/>
                </div>
                <div className='lastname'>
                    <label>Last Name</label>
                    <input type="text" placeholder='Enter lastname' required/>
                </div>
            </div>
            <label>Email</label>
            <input type="email" placeholder='Enter Email Address' required/>
            <label>Phone Number</label>
            <input type="phone" placeholder='2349102918870' required/>
            <label>Create Password</label>
            <input type="password" placeholder='*********' required/>
            <input type="checkbox" required />
            <p>I consent to the collection and processing of my personal data in line with the data<br /> 
            regulations as described in Persent’s Privacy Policy</p>
            <button className='signup-button'>Sign Up</button>
            <sub>By clicking the “Sign up” button, you agree to Persent’s Terms.</sub>
            <p>Already a user? login</p>
        </div>
    )
}

export default SignupForm;