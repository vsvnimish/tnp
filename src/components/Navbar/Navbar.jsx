import React, { useState } from "react";
import BarItems from "../../Content/BarItems";
import { useHistory } from "react-router-dom";
import Logo from "../../images/ocs_logo.svg";
import $ from "jquery";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

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

// ScrollTop.propTypes = {
// children: PropTypes.element.isRequired,
// window: PropTypes.func,
// };

export default function Navbar(props) {
  const history = useHistory();
  const [navState, setnavState] = useState(" ");
  const [openBar, setopenBar] = useState(false);

  const changeNavBack = () => {
    if (window.scrollY > 20) {
      setnavState("activeA");
    } else {
      setnavState(" ");
    }
  };

  function clickDropDown(item) {
    if (!item.drop) {
      history.push(item.route);
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

  window.addEventListener("scroll", changeNavBack);

  return (
    <div className="navBase">
      <Toolbar className={`navBar ${navState}`}>
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
                <div className="naviTab">
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
    </div>
  );
}
