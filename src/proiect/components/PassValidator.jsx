import React, { useState } from 'react';
import './PassValidator.css';


function Contact(){
 return (
    <div>
         <h1>WE’RE HERE FOR YOU!</h1>
         <p>Email Our Customer Service (customerservice@pampam.com) or call XXXXXXXXX. Operating hours are 9:00am – 9:00pm ET, Monday- Friday and Saturday 9:00am- 6:00pm ET, excluding major EU holidays.</p>
    </div>

)
}


function PassValidator(){
    const [inputValue, setInputValues] = useState({
        password: ''
    });

    const [handleErrorStyle, setErrorStyle] = useState(false);

    return(
      
        <form className = 'formStyle'>
            {/* <form  style={center}>
                
                <input
                id='pass'
                type="password" 
                name = 'password'
                // value = {formState.username}
                //onChange = {handlePassTheme} //onChange este echivalentul evenimentului de input
                onBlur={(e) => console.log('onBlur - echivalent ev change')} //onBlur este echivalentul evenimentului de onChange din JS
                placeholder = 'Password'
                />

                <p
                    // className = {theme === '' ? 'light-theme' : 'dark-theme'}
                    >
                
                Parola e corecta</p>
            </form> */}
            <div className='input name'>
            <label><span>*</span>Required</label>
            </div>
         

            <div className='input name'>
                {/* first name */}
               
                <label style={{display: 'flex',  flexDirection: 'column'}}>  
                    Enter your pass:
                    <input 
                        style={{borderRadius: '5px'}}
                        className = {handleErrorStyle === true ? 'errorStyle' : 'passedStyle'}
                        type="password" 
                        name = 'password'
                        placeholder = 'Input your password...'
                        value={inputValue.password}
                        onChange=
                        //   {handleInput}
                            {(event) => {
                            const value = event.target.value;

                            if(value.length <= 4){
                                console.log('weak pass');
                                setErrorStyle(true);
                            } else if (value.length > 4) {
                                console.log('strong pass');
                                setErrorStyle(false);
                            }

                            setInputValues({
                                ...inputValue,
                                password: value,
                            })
                        }}
                    />
                    
                    <p className = {handleErrorStyle === true ? 'errorColor' : 'passedColor'} > {inputValue.password}</p>
                </label>
          
             


                {/* last name */}
            
                    <label style={{display: 'flex',  flexDirection: 'column'}}>  
                        Enter your pass:
                        <input 
                            style={{borderRadius: '5px'}}
                            className = {handleErrorStyle === true ? 'errorStyle' : 'passedStyle'}
                            type="password" 
                            name = 'password'
                            placeholder = 'Input your password...'
                            value={inputValue.password}
                            onChange=
                            //   {handleInput}
                                {(event) => {
                                const value = event.target.value;

                                if(value.length <= 4){
                                    console.log('weak pass');
                                    setErrorStyle(true);
                                } else if (value.length > 4) {
                                    console.log('strong pass');
                                    setErrorStyle(false);
                                }

                                setInputValues({
                                    ...inputValue,
                                    password: value,
                                })
                            }}
                        />
                        
                        <p className = {handleErrorStyle === true ? 'errorColor' : 'passedColor'} > {inputValue.password}</p>
                    </label>
                
            </div>

            <div className='input contact'>
                {/* email address */}
                <label style={{display: 'flex',  flexDirection: 'column'}}>  
                    Enter your pass:
                    <input 
                        style={{borderRadius: '5px'}}
                        className = {handleErrorStyle === true ? 'errorStyle' : 'passedStyle'}
                        type="password" 
                        name = 'password'
                        placeholder = 'Input your password...'
                        value={inputValue.password}
                        onChange=
                        //   {handleInput}
                            {(event) => {
                            const value = event.target.value;

                            if(value.length <= 4){
                                console.log('weak pass');
                                setErrorStyle(true);
                            } else if (value.length > 4) {
                                console.log('strong pass');
                                setErrorStyle(false);
                            }

                            setInputValues({
                                ...inputValue,
                                password: value,
                            })
                        }}
                    />
                    
                    <p className = {handleErrorStyle === true ? 'errorColor' : 'passedColor'} > {inputValue.password}</p>
                </label>


                {/* phone number */}
                <label style={{display: 'flex',  flexDirection: 'column'}}>  
                    Enter your pass:
                    <input 
                        style={{borderRadius: '5px'}}
                        className = {handleErrorStyle === true ? 'errorStyle' : 'passedStyle'}
                        type="password" 
                        name = 'password'
                        placeholder = 'Input your password...'
                        value={inputValue.password}
                        onChange=
                        //   {handleInput}
                            {(event) => {
                            const value = event.target.value;

                            if(value.length <= 4){
                                console.log('weak pass');
                                setErrorStyle(true);
                            } else if (value.length > 4) {
                                console.log('strong pass');
                                setErrorStyle(false);
                            }

                            setInputValues({
                                ...inputValue,
                                password: value,
                            })
                        }}
                    />
                    
                    <p className = {handleErrorStyle === true ? 'errorColor' : 'passedColor'} > {inputValue.password}</p>
                </label>
            </div>        

            <div className='input order'>
                {/* order number */}
                <label style={{display: 'flex',  flexDirection: 'column'}}>  
                    Enter your pass:
                    <input 
                        style={{borderRadius: '5px'}}
                        className = {handleErrorStyle === true ? 'errorStyle' : 'passedStyle'}
                        type="password" 
                        name = 'password'
                        placeholder = 'Input your password...'
                        value={inputValue.password}
                        onChange=
                        //   {handleInput}
                            {(event) => {
                            const value = event.target.value;

                            if(value.length <= 4){
                                console.log('weak pass');
                                setErrorStyle(true);
                            } else if (value.length > 4) {
                                console.log('strong pass');
                                setErrorStyle(false);
                            }

                            setInputValues({
                                ...inputValue,
                                password: value,
                            })
                        }}
                    />
                    
                    <p className = {handleErrorStyle === true ? 'errorColor' : 'passedColor'} > {inputValue.password}</p>
                </label>

                {/* my question is about... */}
                <label style={{display: 'flex',  flexDirection: 'column'}}>  
                    Enter your pass:
                    <input 
                        style={{borderRadius: '5px'}}
                        className = {handleErrorStyle === true ? 'errorStyle' : 'passedStyle'}
                        type="password" 
                        name = 'password'
                        placeholder = 'Input your password...'
                        value={inputValue.password}
                        onChange=
                        //   {handleInput}
                            {(event) => {
                            const value = event.target.value;

                            if(value.length <= 4){
                                console.log('weak pass');
                                setErrorStyle(true);
                            } else if (value.length > 4) {
                                console.log('strong pass');
                                setErrorStyle(false);
                            }

                            setInputValues({
                                ...inputValue,
                                password: value,
                            })
                        }}
                    />
                    
                    <p className = {handleErrorStyle === true ? 'errorColor' : 'passedColor'} > {inputValue.password}</p>
                </label>
            </div>

            <div className='input other'>
                   {/* Comments */}
                <label style={{display: 'flex',  flexDirection: 'column'}}>  
                    Enter your pass:
                    <input 
                        style={{borderRadius: '5px'}}
                        className = {handleErrorStyle === true ? 'errorStyle' : 'passedStyle'}
                        type="password" 
                        name = 'password'
                        placeholder = 'Input your password...'
                        value={inputValue.password}
                        onChange=
                        //   {handleInput}
                            {(event) => {
                            const value = event.target.value;

                            if(value.length <= 4){
                                console.log('weak pass');
                                setErrorStyle(true);
                            } else if (value.length > 4) {
                                console.log('strong pass');
                                setErrorStyle(false);
                            }

                            setInputValues({
                                ...inputValue,
                                password: value,
                            })
                        }}
                    />
                    
                    <p className = {handleErrorStyle === true ? 'errorColor' : 'passedColor'} > {inputValue.password}</p>
                </label>

                <button>Contact Us</button>
            </div>          
     
          
            {/* tema */}
            {/* <label style={{display: 'flex',  flexDirection: 'column'}}>  
                Enter your pass:
                <input 
                    style={{borderRadius: '5px'}}
                    className = {handleErrorStyle === true ? 'errorStyle' : 'passedStyle'}
                    type="password" 
                    name = 'password'
                    placeholder = 'Input your password...'
                    value={inputValue.password}
                    onChange=
                    //   {handleInput}
                        {(event) => {
                        const value = event.target.value;

                        if(value.length <= 4){
                            console.log('weak pass');
                            setErrorStyle(true);
                        } else if (value.length > 4) {
                            console.log('strong pass');
                            setErrorStyle(false);
                        }

                        setInputValues({
                            ...inputValue,
                            password: value,
                        })
                    }}
                />
                
                <p className = {handleErrorStyle === true ? 'errorColor' : 'passedColor'} > {inputValue.password}</p>
            </label> */}
    
        </form>

     
     
  
    ) 
}


export { Contact, PassValidator};