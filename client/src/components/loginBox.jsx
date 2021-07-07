//React Imports
import React, { useState } from 'react'
import { useDispatch } from "react-redux";

import './styles.css'
//validation improts
import { logInValidation } from '../assets/utils/loginValidations';
import { logIn } from '../actions/logInActions';
import ResetPassword from './ResetPasswordModal/ResetPassword';

function LoginBox() {
    const dispatch = useDispatch()
    const [formInputs, setFormInputs] = useState({
        userName: '',
        password: '',
    });
    const [errorsArray, setErrorsArray] = useState([])
    const [showResetPassword, setShowResetPassword] = useState(false)
    
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
        setShowResetPassword(!showResetPassword);
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
        </form>
            {
                errorsArray && errorsArray.map(e => {
                    return <h5>- {e}</h5>
                })
            }
            <button
                className='btn-red'
                onClick={() => resetPassword()}
            >
                Reset Password
            </button>
            <ResetPassword setShow={setShowResetPassword} show={showResetPassword}/>
    </div>
    )
}


export default LoginBox;