import React, { useState } from 'react';
import './PasswordValidator.css';

function PasswordValidator(){
    const [passwordValue, setFormValues] = useState({
        password: '',
    });

    const [isError, setErrors] = useState(true);
    const [isValid, setIsValid] = useState(false);
    const validatePass = (passwordValue) => {
        if (passwordValue.length >= 8 && passwordValue.length <= 16) {
            setIsValid(true);
            console.log("Password length is valid.");
        } else {
            console.log("Password length is invalid.");
            setIsValid(false)
        }
    };

    return(
        <div>
             <h2>
                Verifica daca parola are intre 8-16 caractere incluzand litere
            </h2>
     
        <form autoComplete = 'off'>
            <input className={"new"}
                id='pass'
                type="password"
                name = 'password'
                placeholder = 'Input your password...' 
                value={passwordValue.password}
                className={isValid ? 'new' : 'invalid-password'}

                onChange={(e) => {
                    const passwordValue = e.target.value;

                    setFormValues({
                        ...passwordValue,
                        password: passwordValue,
                    })

                    // setErrors(!isError){
                    //     {isError ? 'Hide Details' : 'Show Details'}

                    // }
                    // if (passwordValue.length >= 8 && passwordValue.length <= 16) {
                    //     // useState(true);
                        
                    // } else {
                    //     console.log("Password length is invalid.");
                    //     // useState(false)
                    // }
                }}
            
            />

            <p>valoarea din state: {passwordValue.password}</p>

            <p>varificarea lumgimii din state: {setErrors}</p>
            
            
            
            <div>
            <button onClick={() => validatePass(passwordValue)}>Validate Password</button>
            </div>
        </form>
    </div>
    )
}

export default PasswordValidator;
