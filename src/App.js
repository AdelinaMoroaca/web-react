import logo from './logo.svg';
import './App.css';
import { divide } from 'lodash';
import NavBar from './NavBar';
// import {UserItem} from '../src/code/UserItem';
// // import Homepage from '../src/code/Homepage';
// import Homepage from './proiect/Home';
import Home from '../src/proiect/Home';
import About from '../src/proiect/About';
import Contact from '../src/proiect/Contact';
import ToggleTheme from './proiect/components/ToggleTheme';

function App() {
  return (
    <div > 
      {/* className='app-content'> */}
      {/* <NavBar homePageLink="/" aboutPageLink="/about" contactPageLink="/contact"/> */}

      {/* <NavBar homePageLink="/newHome" aboutPageLink="/newAbout" contactPageLink="/newContact"/> */}


      {/* <div className='app-content'>
        <UserItem name="Jane Doe" email="jane.doe@gmail.com"/>
        <UserItem name="Adelina Doe" email="adelina.doe@gmail.com"/>
      
      </div> */}

      {/* <Home/>
      <About/>
      <Contact/> */}
      <ToggleTheme/>
      {/* <UserItem/> */}

    </div>
  );
}

export default App;
