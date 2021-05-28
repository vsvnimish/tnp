import React, { useState } from "react";
import { withStyles } from '@material-ui/core/styles';
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
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);


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

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

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

      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
});


export default Navbar;
