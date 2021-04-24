import React from 'react'
import { Switch, Route} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/footer/Footer';
import Landing from './components/Landing';
import WhyRecruitUs from './components/WhyRecruitUs';
import Department from './components/Department';
import Faculties from './components/Faculties'


function App() {

  

  return (
    <div className="base" >

      <CssBaseline/>

      <Navbar/>

      <Switch>
            
          <Route exact path='/' render={props => (<Landing/>)}/>
          <Route path='/WhyRecruitUs' render={props => (<WhyRecruitUs />)}
          />
          <Route path='/Department' render={props => (<Department />)} 
          />
          <Route path='/Faculties' render={props => (<Faculties />)} 
          />

      </Switch>

      
      <Footer/> 
      

    </div>
  );
}

export default App;
