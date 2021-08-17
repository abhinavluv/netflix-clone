import React from 'react';
import './SignIn.css';

const SignIn = () => {
    return (
        <div className='SignIn'>
            <form>
                <h1>Sign In</h1>
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <button type='submit'>Sign In</button>
                <h4>
                    <span className='signin__gray'>New to Netflix? </span>
                    <span className='signin__link'>Sign Up Now.</span>
                </h4>
            </form>
        </div>
    );
};

export default SignIn;
