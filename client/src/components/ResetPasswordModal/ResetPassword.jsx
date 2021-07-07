//React Imports
import React, {useState} from 'react';
import { useDispatch } from "react-redux";

import './styles.css';
import { resetPass } from '../../actions/logInActions';

function ResetPassword(props) {
    const dispatch = useDispatch()
    const setShowResetPassword = props.setShow
    const showResetPassword = props.show;
    
    const [newPasswords, setNewPasswords] = useState({
        pass1: '',
        pass2: '',
        oldPass: '',
    })
    const [errorsMessage, setErrorsMessage] = useState('');
    
    const showHideClassName = showResetPassword ? "modal display-block" : "modal display-none";

    const handleClose = () => {
        setShowResetPassword(false);
    }

    const submitResetPassword = async (e) => {
        e.preventDefault();
        if(newPasswords.pass1 !== newPasswords.pass2) return setErrorsMessage("The new passwords don't match, please repeat")
        await dispatch(resetPass(newPasswords))
        setShowResetPassword(false);
    }

    const handleChange = (e) => {
        setNewPasswords({
            ...newPasswords,
            [e.target.name]: e.target.value
        });
    }

    return (
    <div className={showHideClassName}>
        <section className="modal-main">
            <h3>Reset Password</h3>
                <h5>Old Password</h5>
                <input
                    type='password'
                    name='oldPass'
                    className='input'
                    onChange={handleChange}
                />
                <h5>New Password</h5>
                <input
                    type='password'
                    name='pass1'
                    className='input'
                    onChange={handleChange}
                />
                <h5>Repeat New Password</h5>
                <input
                    type='password'
                    name='pass2'
                    className='input'
                    onChange={handleChange}
                />
                <div className="message">
                    <h5>{errorsMessage}</h5>
                </div>
                <button
                    className='btn-red-modal'
                    onClick={(e) => submitResetPassword(e)}
                >
                    Reset
                </button>
                <button
                    className='btn-red-modal'
                    onClick={() => handleClose()}
                >
                    Close
                </button>
            </section>
        </div>
    )
}

export default ResetPassword;