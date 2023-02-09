import React from 'react';
import './login.component.css';

const LoginForm = () => {
    return(
        <div className='login-form'>
            <h1>Welcome Back!</h1>
            <p>Securely login into your Persent account</p>
            <form>
                <label>Phone / Email Address</label>
                <inut type="text" placeholder="Enter phone or email" required />
                <label>Password</label>
                <input type="password" placeholder='Enter Placeholder' required />
                <div className='forgot-password'>
                    <div className='remember-me'>
                        <input type="checkbox" />
                        <p>Remember me</p>
                    </div>
                    <p>Forgot password?</p>
                </div>
                <button className='login'>Login</button>
            </form>
            <p>Don't have an account? Sign Up</p>
        </div>
    )
}

export default LoginForm;