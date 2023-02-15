import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import './login.component.css';

const LoginForm = () => {
    const {handleSubmit, register} = useForm([]);
    const login = (data) => {
        fetch('http://ec2-34-238-76-176.compute-1.amazonaws.com/api/login', {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password
                })
            })
            .then((response) => (
                response.json()))
            .then((data) => {
                if(data.success === true){
                    Navigate(`/dashboard`);
                } else {
                    return alert("Invalid email/password");
                }
            })
        }
    
    return(
        <div className='login-page'>
            <div className="login-top">
                <h1>Welcome Back!</h1>
                <p>Securely login into your Persent account</p>
            </div>
            <form className='login-form' onSubmit={handleSubmit(login)}>
                <label>Phone / Email Address</label>
                <input type="text" placeholder="Enter phone or email" name='email'{...register("email",{required: true})} required />
                <label>Password</label>
                <input type="password" placeholder='Enter Password' name='password'{...register("password",{required: true})} required />
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