import React from 'react';
import { Link } from '@reach/router';
import './login.component.css';

const LoginForm = () => {
    return(
        <div className='login-page'>
            <div className="login-top">
                <h1>Welcome Back!</h1>
                <p>Securely login into your Persent account</p>
            </div>
            <form className='login-form'>
                <label>Phone / Email Address</label>
                <input type="text" placeholder="Enter phone or email" required />
                <label>Password</label>
                <input type="password" placeholder='Enter Password' required />
                <div className='forgot-password'>
                    <div className='remember-me'>
                        <input type="checkbox" className='checkbox'/>
                        <p>Remember me</p>
                    </div>
                    <p className='blue'>Forgot password?</p>
                </div>
                <button className='login-button'>Login</button>
            </form>
            <p className='blue'>Don't have an account?<Link to='/signup' className='signup-link'>Sign Up</Link> </p>
        </div>
    )
}

export default LoginForm;