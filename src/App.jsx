import React, {useState} from 'react'
import { Switch, Route} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './Structure/Footer';
import Department from "./Pages/Department";
import Faculties from "./Pages/Faculties";
import WhyRecruitUs from "./Pages/WhyRecruitUs";
import Home from "./Pages/HomePage";
import ErrorPage from './Pages/404';

function App() {

  const [screenSize, setScreenSize] = useState(window.screen.width);
  window.addEventListener('resize', ()=>{setScreenSize(window.screen.width)});

  if(screenSize <=960){
    return (
      <ErrorPage/>
    )
  }else{
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
}

export default App;
