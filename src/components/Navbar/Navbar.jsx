import React, {useState} from 'react'
import BarItems from './BarItems'
import { useHistory } from 'react-router-dom';
import $ from 'jquery';

export default function Navbar(props) {

    const history = useHistory();
    const [navState , setnavState] = useState(' ');
    const [openBar, setopenBar] = useState(false);
    
    const changeNavBack = () =>{
        if(window.scrollY > 20 || $('.top, .content').hasClass('scrolled')){
            setnavState("active");
        }else{
            setnavState(" ");
        }
    }

    function clickDropDown(item){
        if(!item.drop){
            history.push(item.route); 
        }
        
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
        <div  > 
            <nav className={`navBar ${navState}`}>

                <h1 >IIITR</h1>

                <div className="menu" onClick={()=>{setopenBar(!openBar)}}>
                    {openBar ? getHam("is-active") : getHam(' ')}
                </div>
                
                <ul className={openBar ? 'list active ' : 'list '}>
                    {BarItems.map( item => {
                        return(
                            <li key={item.id} className="dropdown activeA" onClick={()=> {clickDropDown(item)}}> 
                                {item.heading}
                                <ul className="dropdownMenu">
                                    {item.drop ? item.drop.map( (droppedItem,id) => {
                                        return( 
                                            <li key={id} className={`dropdownItem-${id}`} onClick={()=>{clickDropDown(droppedItem)}}>
                                                {droppedItem.heading}
                                            </li> 
                                        );
                                    }) : null}
                                </ul>
                            </li>
                        )
                    }) } 

                </ul>
            </nav>
        </div>
    )
}


