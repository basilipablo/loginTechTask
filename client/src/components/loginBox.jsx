//React Imports
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import './styles.css'

function LoginBox() {
    const submitLogin = (e) => {
        e.preventDefault();
        console.log('hi there')
    }

    return (
    <div className='container'>
        <div className='header'>
            <h3>Login</h3>
        </div>
        <form className='form'>
            <h3>User Name</h3>
            <input
                type='text'
                name='username'
                classname='input-login'
                placeholder='ortexusername'
            />
            <h3>Password</h3>
            <input
                type='password'
                name='password'
                classname='input-pass'
                placeholder='12345tomorrow!'
            />
            <button
            type='button'
            classname='btn'
            onClick={(e) => submitLogin(e)}
            >
                Login
            </button>
        </form>
    </div>
    )
}


export default LoginBox;