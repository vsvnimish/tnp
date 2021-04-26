import React from 'react'
import { Switch, Route} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './Structure/Footer';
import Department from "./Pages/department";
import Faculties from "./Pages/faculties";
import WhyRecruitUs from "./Pages/whyRecruitUs";
import Home from "./Pages/homePage";

function App() {

  return (
    <div className="base" >

      <CssBaseline/>

      <Navbar/>

      <div className="mainBody">
        <Switch>
            
            <Route exact path='/' render={props => (<Home/>)}/>
            <Route path='/WhyRecruitUs' render={props => (<WhyRecruitUs />)}
            />
            <Route path='/Department' render={props => (<Department />)} 
            />
            <Route path='/Faculties' render={props => (<Faculties />)} 
            />
  
        </Switch>
      </div>

      <Footer/> 
      

    </div>
  );
}

export default App;
