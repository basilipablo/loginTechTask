//React Imports
import React, { useState } from 'react'
import { useDispatch } from "react-redux";

import './styles.css'
//validation improts
import { logInValidation } from '../assets/utils/loginValidations';
import { logIn } from '../actions/logInActions';

function LoginBox() {
    const [formInputs, setFormInputs] = useState({
        userName: '',
        password: '',
    });
    const [errorsArray, setErrorsArray] = useState([])
    const dispatch = useDispatch()
    
    const handleInputChange = function (e) {
        setFormInputs({
            ...formInputs,
            [e.target.name]: e.target.value
        });
    }
    //handle the submit of login with actions and reducers
    const submitLogin = (e) => {
        e.preventDefault();
        const inputErrors = logInValidation(formInputs)
        if (Object.keys(inputErrors).length === 0) {
            return dispatch(logIn(formInputs))
        }
        setErrorsArray(Object.values(inputErrors).reduce((acc, v) => [...acc, ...v], []))
        
    }

    const resetPassword = () => {
        console.log('modal')
    }

    return (
    <div className='container'>
        <div className='header'>
            <h3>Login</h3>
        </div>
        <form className='form'>
            <h5>User Name</h5>
            <input
                type='text'
                name='userName'
                className='input-login'
                onChange={handleInputChange}
            />
            <h5>Password</h5>
            <input
                type='password'
                name='password'
                className='input-login'
                onChange={handleInputChange}
            />
            <button
            className='btn'
            onClick={(e) => submitLogin(e)}
            >
                Login
            </button>
            <button
            className='btn-red'
            onClick={() => resetPassword()}
            >
                Reset Password
            </button>
        </form>
            {
                errorsArray && errorsArray.map(e => {
                    return <h5>- {e}</h5>
                })
            }
    </div>
    )
}


export default LoginBox;