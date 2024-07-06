import React, { useState } from "react";

function Form(){
    const [formState, setFormState] = useState({
        username: '',
        email: '',
    })

    const handleInputChange = (e) => {
        console.log('onChange')
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
                onChange = {handleInputChange} //onChange este echivalentul evenimentului de input
                onBlur={(e) => console.log('onBlur - echivalent ev change')} //onBlur este echivalentul evenimentului de onChange din JS
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

function ExempleForm(){
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
            onChange = {handleInputChange} //onChange este echivalentul evenimentului de input
            onBlur={(e) => console.log('onBlur - echivalent ev change')} //onBlur este echivalentul evenimentului de onChange din JS
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

export { Form, ExempleForm};