import React, { useState } from 'react';
import './ContactUs.css';


function ContactList(){
 return (
    <div id='introForm'>
         <h2>WE’RE HERE FOR YOU!</h2>
         <p>Email Our Customer Service (customerservice@pampam.com) or call XXXXXXXXX. Operating hours are 9:00am – 9:00pm ET, Monday- Friday and Saturday 9:00am- 6:00pm ET, excluding major EU holidays.</p>
    </div>

)
}


function PassValidator(){
    const [inputValue, setInputValues] = useState({
        firstName: '',
        // lastName: '',
        // email:'',
        // phoneNumber: '',
        // orderNumber: '',
        // quesionTopic: '',
        // comments: ''
        // password: ''
    });

    const [handleErrorStyle, setErrorStyle] = useState(false);

    const [errorFnMsg, setFnErrorMsg] = useState('');
    const [errorLnMsg, setLnErrorMsg] = useState('');
    const [errorEmailMsg, setEmailErrorMsg] = useState('');
    const [errorPhoneMsg, setPhoneErrorMsg] = useState('');
    const [errorOrderMsg, setOrderErrorMsg] = useState('');
    const [errorQuestionMsg, setQuestionErrorMsg] = useState('');



    // state pt first name
    const [inputFirstNameValue, setFnInputValues] = useState({ firstName: ''});
    const [inputLastNameValue, setLnInputValues] = useState({ lastName: ''});
    const [inputEmailValue, setEmailInputValues] = useState({ email: ''});
    const [inputPhoneValue, setPhoneInputValues] = useState({ phoneNumber: ''});
    const [inputOrderValue, setOrderValues] = useState({ orderNumber: ''});
    const [inputQuestionValue, setQuestionValues] = useState({ quesionTopic: ''});


    return(
      
        <form className = 'formStyle'>
        
            <div className='input name'>
            <label><span>*</span>Required</label>
            </div>
         

            <div className='input name'>
                {/* first name */}
               
                <label style={{display: 'flex',  flexDirection: 'column'}}>  
                    First Name*:
                    <input 
                        style={{borderRadius: '1px',
                            // backgroundColor : setErrorMsg ? 'rgba(0, 128, 0, 0.568)' : 'rgba(255, 0, 0, 0.493)'
                        }}
                        // className = {handleErrorStyle === true ? 'errorStyle' : 'passedStyle'}
                        type="text" 
                        name = 'fname'
                        placeholder = 'First Name...'
                        required 
                        value={inputFirstNameValue.firstName}
                        onChange=
                        //   {handleInputName}
                            {(event) => {
                            const value = event.target.value;

                            if(value.length < 2 || value.length > 8){
                                console.log('weak pass');
                                setFnErrorMsg('First Name should have 2-8 characters');
                                
                                
                                setErrorStyle(true);
                            } else {
                                console.log('strong pass');
                                setFnErrorMsg('');


                                setErrorStyle(false);
                            }

                            setFnInputValues({
                                ...inputFirstNameValue,
                                firstName: value,
                            })
                        }}
                    />
                    
                    <p className = {handleErrorStyle === true ? 'errorColor' : 'passedColor'} >{errorFnMsg}</p>
                    {/* <p style={{display: setErrorMsg ? 'block' : 'hidden'}}>{errorMsg}</p> */}
                
                </label>
          
             


                {/* last name */}
            
                    <label style={{display: 'flex',  flexDirection: 'column'}}>  
                        Last Name*:
                        <input 
                            style={{borderRadius: '1px'}}
                            // className = {handleErrorStyle === true ? 'errorStyle' : 'passedStyle'}

                            // className = {handleErrorStyle === true ? 'errorStyle' : 'passedStyle'}
                            type= 'text'
                            name = 'password'
                            placeholder = 'Last Name...'
                            required
                            value={inputLastNameValue.lastName}
                            onChange=
                            //   {handleInput}
                                {(event) => {
                                const value = event.target.value;

                                if(value.length < 3 || value.length > 8){
                                    console.log('weak pass');
                                    setLnErrorMsg('Last Name should have 3-8 characters');
                                    
                                    
                                    setErrorStyle(true);
                                } else {
                                    console.log('strong pass');
                                    setLnErrorMsg('');
    
    
                                    setErrorStyle(false);
                                }

                                setLnInputValues({
                                    ...inputLastNameValue,
                                    lastName: value,
                                })
                            }}
                        />
                        
                        <p className = {handleErrorStyle === true ? 'errorColor' : 'passedColor'} >{errorLnMsg}</p>
                    </label>
                
            </div>

            <div className='input contact'>
                {/* email address */}

                <label style={{display: 'flex',  flexDirection: 'column'}}>  
                    Email Address*:
                    <input 
                        style={{borderRadius: '5px'}}
                        // className = {handleErrorStyle === true ? 'errorStyle' : 'passedStyle'}
                        type= 'email' 
                        name = 'email'
                        placeholder = 'Email Address...'
                        required
                        value={inputEmailValue.email}
                        onChange=
                        //   {handleInput}
                            {(event) => {
                            const value = event.target.value;

                            if(value.length < 2 || value.length > 4){
                                // value.length < 2 || value.length > 4 &&
                                console.log('weak pass');
                                setEmailErrorMsg('*email is not valid');
                                // setErrorStyle(true);
                            } else {
                                console.log('strong pass');
                                setEmailErrorMsg('');
                                // setErrorStyle(false);
                            }

                            setEmailInputValues({
                                ...inputEmailValue,
                                email: value,
                            })
                        }}
                    />
                    
                    <p className = {handleErrorStyle === true ? 'errorColor' : 'passedColor'} > {errorEmailMsg}</p>
                </label>

                {/* phone number */}
                <label style={{display: 'flex',  flexDirection: 'column'}}>  
                    Phone Number:
                    <input 
                        style={{borderRadius: '5px'}}
                        // className = {handleErrorStyle === true ? 'errorStyle' : 'passedStyle'}
                        type= 'tel'
                        name = 'phone'
                        placeholder = 'Phone Number...'
                        // pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                        value={inputPhoneValue.phoneNumber}
                        onChange=
                        //   {handleInput}
                            {(event) => {
                            const value = event.target.value;

                            if(value.length !== Number && value.length < 10 || value.length > 10){
                                console.log('weak pass');
                                setPhoneErrorMsg('*phone is not valid');

                                setErrorStyle(true);
                            } else {
                                console.log('strong pass');
                                setPhoneErrorMsg('');


                                setErrorStyle(false);
                            }

                            setPhoneInputValues({
                                ...inputPhoneValue,
                                phoneNumber: value,
                            })
                        }}
                    />
                    
                    <p className = {handleErrorStyle === true ? 'errorColor' : 'passedColor'} >{errorPhoneMsg}</p>
                </label>
            </div>        

            <div className='input order'>
                {/* order number */}
                <label style={{display: 'flex',  flexDirection: 'column'}}>  
                    Order Number:
                    <input 
                        style={{borderRadius: '5px'}}
                        // className = {handleErrorStyle === true ? 'errorStyle' : 'passedStyle'}
                        type= 'number' 
                        name = 'orderNumber'
                        placeholder = 'Order Number...'
                        value={inputOrderValue.orderNumber}
                        onChange=
                        //   {handleInput}
                            {(event) => {
                            const value = event.target.value;

                            if(value.length < 7 || value.length > 9 ){
                                console.log('weak pass');
                                setOrderErrorMsg('order number is not valid');
        

                                setErrorStyle(true);
                            } else {
                                console.log('strong pass');
                                setOrderErrorMsg('');


                                setErrorStyle(false);
                            }

                            setOrderValues({
                                ...inputOrderValue,
                                orderNumber: value,
                            })
                        }}
                    />
                    
                    <p className = {handleErrorStyle === true ? 'errorColor' : 'passedColor'} > {errorOrderMsg}</p>
                </label>

              
                {/* my question is about... */}
                <label style={{display: 'flex',  flexDirection: 'column'}}>  
                    My question is about...*  :

                    <select 
                        name="selectedTopic"
                        value={inputQuestionValue.quesionTopic}
                        placeholder = 'My question is about...'
                        required
                        // onChange={e => setQuestionValues(e.target.value, console.log(e.target.value))}
                        onChange=
                        //   {handleInput}
                            {(event) => {
                            const value = event.target.value;

                            //need validation condition

                            // if(value.length <= 4){
                            //     console.log('weak pass');
                            //     setQuestionErrorMsg('*cannot be empty');
                            // } else {
                            //     console.log('strong pass');
                            //     setQuestionErrorMsg('');
                            // }

                            setQuestionValues({
                                ...inputQuestionValue,
                                quesionTopic: value,
                            })

                            console.log(event.target.value)
                        }}
                    >
                        <option value="someOption"></option>
                        <option value="productInfoOption">Product Information</option>
                        <option value="orderStatusOption">Order Status</option>
                        <option value="accountOption">My Account</option>
                        <option value="otherOption">Other</option>


                    </select>

                
                    <p className = {handleErrorStyle === true ? 'errorColor' : 'passedColor'} > {errorQuestionMsg}</p>
                </label>
            </div>

            <div className='input other'>
                   {/* Comments */}
                <label style={{display: 'flex',  flexDirection: 'column'}}>  
                    Comments (max 5, 000 characters):
                    <input 
                        style={{borderRadius: '5px'}}
                        // className = {handleErrorStyle === true ? 'errorStyle' : 'passedStyle'}
                        type= 'text' 
                        name = 'password'
                        placeholder = 'Comments (max 5, 000 characters)'
                        required
                        value={inputValue.comments}
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
                                comments: value,
                            })
                        }}
                    />
                    
                    <p className = {handleErrorStyle === true ? 'errorColor' : 'passedColor'} > {inputValue.comments}</p>
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


export { ContactList, PassValidator};