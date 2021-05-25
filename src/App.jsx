import React, {useState} from 'react'
import { Switch, Route} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './Structure/Footer';
import Programs from "./Pages/Programs";
import ClubActivities from "./Pages/ClubActivities";
// import WhyRecruitUs from "./Pages/WhyRecruitUs";
import Home from "./Pages/HomePage";
import ErrorPage from './Pages/404';


function App() {

  const [screenSize, setScreenSize] = useState(window.screen.width);
  window.addEventListener('resize', ()=>{setScreenSize(window.screen.width)});

  const ref = React.useRef(null);

  if(screenSize <=960){
    return (
      <ErrorPage/>
    )
  }else{
    return (
    <div className="base" id="back-to-top" >

      <CssBaseline />
      
      <Navbar ref={ref} />

      <div className="mainBody">
        <Switch>
            
            <Route exact path='/' render={props => (<Home ref={ref}/>)}/>
            {/* <Route path='/WhyRecruitUs' render={props => (<WhyRecruitUs ref={ref}/>)} 
            /> */}
            <Route path='/Programs' render={props => (<Programs ref={ref} />)} 
            />
            <Route path='/Clubs' render={props => (<ClubActivities ref={ref} />)} 
            />
  
        </Switch>
      </div>

      <Footer/> 
      

    </div>
  );
}
}

export default App;
