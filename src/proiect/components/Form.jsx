import React, { useState } from "react";

function Form(){
    const [formState, setFormState] = useState({
        username: '',
        email: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({
            ...prevState, // ES6 ~ copiaza toate valorile din state-ul anterior
            [name]: value, // Actualizeaza valoarea campului cu numele `name`
        }));
    };

    return(
        <form style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
        }}>

        <input 
            type = 'text'
            name = 'username'
            value = {formState.username}
            onChange = {handleInputChange} 
            onBlur={(e) => console.log('onBlur - echivalent ev change')}
            placeholder = 'Username'
        />

        <input 
            type = 'email'
            name = 'email'
            value = {formState.email}
            onChange = {handleInputChange}  
            placeholder = 'Email'
        />

        <p>
            Username: {formState.username}, Email: {formState.email}
        </p>
        </form>
    )
}

export default Form;