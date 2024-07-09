import React from 'react';
// import NavBar from './NavBar';
import './NavNewBestsellers.css';

function NavCategoryDetails(props) {

    const {productCategory, imgCategory,cardCategory} = props;
    return (
    <div style={{display: 'flex', flexDirection: 'row', width:'100%'}}>
       <div style={{ width: '40%',display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
            <ul>
               <li>{productCategory}</li>
               <li>{productCategory}</li>
               <li>{productCategory}</li>
               <li>{productCategory}</li>
               <li>{productCategory}</li>
               <li>{productCategory}</li>
               <li>{productCategory}</li>
               <li>{productCategory}</li>
            </ul>
            <img src= {imgCategory} alt="" 
            style={{width: '200px', height: '300px'}}
            />
          
       </div>


      

       <section style={{width: '60%', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
        <div>{cardCategory}</div>
        <div>{cardCategory}</div>
        <div>{cardCategory}</div>
       </section>
    </div>
    );
}

export default NavCategoryDetails;
