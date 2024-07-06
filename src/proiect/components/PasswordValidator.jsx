import React, { useState } from 'react';
import './PasswordValidator.css';

function PasswordValidator(){
    const [passwordValue, setFormValues] = useState({
        password: '',
    });

    //const [isError, setErrors] = useState(true);
    const [isValid, setIsValid] = useState(false);


    //pt butonul de submit
    const validatePass = (passwordValue) => {
        setFormValues(passwordValue === '' ? 'PAROLA MERGE FCT' : 'NU MERGE FCT')
        // if (passwordValue.length >= 3 && passwordValue.length <= 6) {
        //     setIsValid(true);
        //     console.log("Password length is valid.");
        // } else {
        //     console.log("Password length is invalid.");
        //     setIsValid(false)
        // }
    };

    const isNotError = {
        display: 'none',
    }

    return(
        <div style={{display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'center',}}>

            <h2>
                Verifica daca parola are intre 3-6 caractere incluzand litere
            </h2>
     
            <form autoComplete = 'off'>
                <input className={'new'}
                    id='pass'
                    type="password"
                    name = 'password'
                    placeholder = 'Input your password...' 
                    value={passwordValue.password}
                    //className={isValid ? 'new' : 'invalid-password'}

                    onChange={(e) => {
                        const passwordValue = e.target.value;

                        // if(passwordValue.length >= 8 && passwordValue.length <= 16){
                        //     console.log('merge')
                        // } else {
                        //     console.log('eroare eroare')
                        // }

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

               

                <p style = {isNotError}
                className= {passwordValue.length >= 3 && passwordValue.length <= 6 ? console.log('VALID') : console.log('NOT VALID')}


                > Afiseaza text de eroare</p>
                <p>valoarea din state: {passwordValue.password}</p>

                {/* <p>varificarea lumgimii din state: {setErrors}</p> */}
                
                
                
                <div>
                <button onClick={() => validatePass(passwordValue)}>Validate Password</button>
                </div>
            </form>
        </div>
    )
}

export default PasswordValidator;
