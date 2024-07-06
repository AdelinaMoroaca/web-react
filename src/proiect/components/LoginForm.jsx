import React, { useState } from 'react';


function LoginForm(){
    const [formValues, setFormValues] = useState({
        username: '',
        password: '',
    });

    return(
        <div>
            <h4>Login</h4>

            <form autoComplete = 'off' onSubmit={() => alert(`form submitted`)}>
                <input 
                    name = 'username'
                    type = 'text'
                    placeholder = 'Input your username...'
                    value={formValues.username}
                    onChange={(event) => {
                        const value = event.target.value;

                        //if(value.length > 8) return <p>Mai incerca</p>;

                        setFormValues({
                            ...formValues,
                            username: value,
                        })
                    }}
                />

                <p>valoarea din state: {formValues.username}</p>

                <input 
                    name = 'password'
                    type = 'password'
                    placeholder = 'Input your password...'
                    value={formValues.password}
                    onChange={(event) => {
                        const value = event.target.value;

                        setFormValues({
                            ...formValues,
                            password: value,
                        })
                    }}
                />
                {/* 
                {<p>Error: afiseaza tipul de eroare...</p> */}

                <p>valoarea din state: {formValues.password}</p>


                <div>
                    <button type = 'submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;