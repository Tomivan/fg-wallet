import React from 'react';
import { Link } from '@reach/router';
import './signup.component.css';

const SignupForm = () => {
    return(
        <div className='signup-page'>
            <h1>Register your account</h1>
            <form className="signup-form">
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