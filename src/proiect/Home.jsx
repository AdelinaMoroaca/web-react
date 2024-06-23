import React from "react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import {SidebarCard, BlogCard, TestimonialCard} from "./components/Card";
import Footer from "./components/Footer";
import card1 from './assets/card-1.jpeg';
import card2 from './assets/card-2.jpeg';
import card3 from './assets/card-3.jpg';
import card4 from './assets/card-4.jpg';
import UserItem from "../proiect/components/UserItem";
import ContactsBook from "../proiect/components/ContactsBook";
import "./Home.css";
// import "./Card.css";





function Home() {
    return (
    <div>
       <NavBar/>

       {/* Page Content */}
       <div id = 'homeContainer'>
            <div id="test">
                <div id = 'leftContainer'> 
                    
                    <Banner/>

                    <section id = 'cardSection'>
                        <BlogCard className = 'card' image = {card1} title = 'Card Title 1' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' button = 'Read more'/>
                        {/* <div id = 'cardContent'> */}
                            <BlogCard className = 'card' image = {card2} title = 'Card Title 2' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' button = 'Read more'/>
                            <BlogCard className = 'card' image = {card3} title = 'Card Title 3' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' button = 'Read more'/>
                            <BlogCard className = 'card' image = {card4} title = 'Card Title 4' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' button = 'Read more'/>
                        {/* </div> */}
                    </section>
                </div>

                <div id = 'sideBarContainer'>
                    <h2>Featured Articles</h2>
                    <SidebarCard 
                        title='Sidebar Card Title 1' 
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    />

                    <SidebarCard 
                        title = 'Sidebar Card Title 2' 
                        description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    />
                </div>
            </div>
        

            <section id="testimonialsContainer" >
                <h2>Testimonials</h2>

                <section id="testimonialCards">
                    <TestimonialCard
                        image = {card2}
                        description ='This service changed my life! Highly recommend.'
                        author = 'John Doe'
                        company = 'CEO at CompanyX'
                    /> 

                    <TestimonialCard
                        image = {card2}
                        description ='Incredibly helpful and easy to use. Fantastic support.'
                        author = 'Jane Smith'
                        company = 'Freelancer'
                    /> 

                    <TestimonialCard
                        image = {card2}
                        description ='Great work! I enjoyed every step of the process.'
                        author = 'John Doe'
                        company = 'Freelancer'
                    /> 

                    <TestimonialCard
                        image = {card2}
                        description ='This service changed my life! Highly recommend.'
                        author = 'John Doe'
                        company = 'CEO at CompanyX'
                    /> 
                </section>
             
            </section>

       </div>



       {/* <div style={{width: '100%', height: 'auto', border: '1px solid red'}}>
           <ContactsBook/>
           <UserItem name = 'Adelina' email = 'adelina@gmail.com' age = '30' city = 'Timisoara' phoneNumber = '0731-000000'/>
           <UserItem name = 'Maria' email = 'adelina@gmail.com' age = '30' city = 'Timisoara' phoneNumber = '0731-000000'/>
           <UserItem name = 'Sabrina' email = 'adelina@gmail.com' age = '30' city = 'Timisoara' phoneNumber = '0731-000000'/>
       </div>  */}

       <Footer/>

   
        
    </div>
    );
}

export default Home;