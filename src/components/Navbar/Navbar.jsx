import React, { useState } from "react";
import BarItems from "../../Content/BarItems";
import { useHistory } from "react-router-dom";
import Logo from "../../images/logo.svg";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Dialog from '@material-ui/core/Dialog';
import ContactUsCard from "../ContactUsCard"


const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));


function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Zoom in={trigger}>
      <div
        onClick={() => {
          document
            .getElementById("back-to-top")
            .scrollIntoView({ behavior: "smooth" });
        }}
        role="presentation"
        className={classes.root}
      >
        {children}
      </div>
    </Zoom>
  );
}


const Navbar = React.forwardRef((props, ref) => { 
  const history = useHistory();
  const [navState, setnavState] = useState(" ");
  const [navColor, setnav] = useState(" ");
  const [openBar, setopenBar] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

//   function isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

  const changeNavBack = () => {
    if (window.scrollY > 20) {
      setnavState("activeA");
    } else {
      setnavState(" ");
    }

    if(window.location.pathname === '/')
    //if( isInViewport(document.getElementById('recruit')) || isInViewport(document.getElementById('recruit2'))  || isInViewport(document.getElementById('recruit3')) ){
    if(window.scrollY >= 2100){  
      addActiveClass("2");
    }else{
      addActiveClass("1");
    }
  
  };

  function clickDropDown(item) {
    

    if(item.id!==1){
      setnavState("activeA");
    }else{
      setnavState(" ");
    }

    if(item.id === 1){
      document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    }
    else if(item.id === 2){
      document.getElementById('recruit').scrollIntoView({ behavior: 'smooth' });
    }
    else {
      handleClickOpen();
      //window.open(item.route);
    }

    if (openBar) {
      setopenBar(!openBar);
    }
  }

  function getHam(state) {
    return (
      <button
        className={`hamburger hamburger--collapse ${state} ham`}
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    );
  }

  function addActiveClass(tab){
    for(var i=1; i<=BarItems.length; i++){
      if(i!==parseInt(tab)){
        document.getElementById(i).classList.remove("activeTab");
      }else{
        document.getElementById(tab).classList.add("activeTab");
      }
    }
  }

  React.useImperativeHandle(ref, () => {
    return {
      setNavState: (state, tab)=>{
        setnav(state);
        addActiveClass(tab);
      }
    };
  });


  window.addEventListener("scroll", changeNavBack);


  return (
    <div className="navBase">
      <Toolbar className={`navBar ${navState} ${navColor}`} >
        <img
          src={Logo}
          alt="Logo"
          className="logo"
          onClick={() => {
            history.push("/");
          }}
        />

        <div
          className="menu"
          onClick={() => {
            setopenBar(!openBar);
          }}
        >
          {openBar ? getHam("is-active") : getHam(" ")}
        </div>

        <ul className={openBar ? "list active " : "list "}>
          {BarItems.map((item) => {
            return (
              <li
                key={item.id}
                className="dropdown"
                onClick={() => {
                  clickDropDown(item);
                }}
              >
                <div id={item.id} className="naviTab">
                  <div className="tabTitle">{item.heading}</div>
                  {item.drop ? <ArrowDropDownIcon /> : null}
                </div>
                <ul className="dropdownMenu">
                  {item.drop
                    ? item.drop.map((droppedItem, id) => {
                        return (
                          <li
                            key={id}
                            className={`dropdownItem-${id}`}
                            onClick={() => {
                              clickDropDown(droppedItem);
                            }}
                          >
                            {droppedItem.heading}
                          </li>
                        );
                      })
                    : null}
                </ul>
              </li>
            );
          })}
        </ul>
      </Toolbar>

      <Toolbar id="back-to-top-anchor" />

      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>

      <Dialog  onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      <h3 className="contacUsCardsHeading"> Faculty Head </h3>

      <div className="contactUsCardDialog">
      <ContactUsCard 
        name="Jatin"
        email="cs19b1013@iiitr.ac.in"
        phoneNum="9068334677"
      />

      <ContactUsCard 
        name="Jatin"
        email="cs19b1013@iiitr.ac.in"
        phoneNum="9068334677"
      />

      <ContactUsCard 
        name="Jatin"
        email="cs19b1013@iiitr.ac.in"
        phoneNum="9068334677"
      />
      </div>
 
      </Dialog>
    </div>
  );
});


export default Navbar;
