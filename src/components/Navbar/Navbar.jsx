import React, {useState} from 'react'
import BarItems from './BarItems'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        backgroundColor: "#ffffff",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.4)",     
        },
});


export default function Navbar(props) {

    const classes = useStyles(props);
    const history = useHistory();
    const [navState , setnavState] = useState(' ');
    const [openBar, setopenBar] = useState(false);
    
    const changeNavBack = () =>{
        if(window.scrollY > 0){
            setnavState("active");
        }else{
            setnavState(" ");
        }
    }

    function changeBarState(){
        if(openBar){setopenBar(!openBar)}
    }

    function getHam(state){
        return(
            <button className={`hamburger hamburger--collapse ${state} ham`} type="button">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
            </button>
        )
    }

    window.addEventListener("scroll", changeNavBack);

    return (
        <div className={classes.root} > 
            <nav className={`navBar ${navState}`}>

                <h1 >IIITR</h1>

                <div className="menu" onClick={()=>{setopenBar(!openBar)}}>
                    {openBar ? getHam("is-active") : getHam(' ')}
                </div>
                <ul className={openBar ? 'list active' : 'list'}>
                    {BarItems.map( item => {
                    return(
                            <li key={item.id} > 
                                <Button variant="outlined" className="item" onClick={() => {history.push(item.route); changeBarState()} }>
                                    {item.heading}
                                </Button>
                            </li>
                        )
                    }) } 
                </ul>
            </nav>
        </div>
    )
}


