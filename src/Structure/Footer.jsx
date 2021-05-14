import React from 'react';
import '../SASS/_social.scss';
import './_footer.scss';
import Logo from '../images/logo/logo.png';


function Footer(props){

    return (
        <div className="main">
            <footer>
                <div className="footer">
                    <img src={Logo} alt="Logo"  className="logoF" />
                    <div className="quickLinks"  > <h1>QUICK LINKS</h1></div>
                    <div className="contact"  > <h1>CONTACT US</h1></div>
                    <div className="connect"  >
                        <h1>Social Media</h1>
                    </div>
                </div>
                
                <div className="footer-bottom" >

                    <div className="copyright ">
                        <div >2020 © <a href="https://www.iiitr.ac.in/" > IIITR Raichur </a></div>
                    </div>

                    <div className="col-md-6">
                        <nav id="footer-navigation" className="site-navigation footer-navigation centered-box" role="navigation">
                            <ul id="footer-menu" className="nav-menu styled clearfix inline-inside">
                            <li id="menu-item-26" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-26"><a href="https://www.iiitr.ac.in/">Support</a></li>
                            <li id="menu-item-27" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-27"><a href="https://www.iiitr.ac.in/">Contact Us</a></li>
                            <li id="menu-item-28" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28"><a href="https://www.iiitr.ac.in/">Email Us</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="col-md-3">

                    <div className="footer-socials">

                            <div className="socialIcon "  >
                                <svg height="3vw" width="3vw">
                                    <circle cx="1.5vw" cy="1.5vw" r="1.2vmax" stroke="white" strokeWidth="2" fill="none"></circle>
                                </svg>
                                <i className="fab fa-instagram fa-lg instagram" ></i>
                            </div>

                            <div className="socialIcon "  >
                                <svg height="3vw" width="3vw">
                                    <circle cx="1.5vw" cy="1.5vw" r="1.2vmax" stroke="white" strokeWidth="2" fill="none"></circle>
                                </svg>
                                <i className="fab fa-lg fa-facebook-f facebook" ></i>
                            </div>

                            <div className="socialIcon "  >
                                <svg height="3vw" width="3vw">
                                    <circle cx="1.5vw" cy="1.5vw" r="1.2vmax" stroke="white" strokeWidth="2" fill="none"></circle>
                                </svg>
                                <i className="fab fa-lg fa-twitter twitter" ></i>
                            </div>

                            <div className="socialIcon "  >
                                <svg height="3vw" width="3vw">
                                    <circle cx="1.5vw" cy="1.5vw" r="1.2vmax" stroke="white" strokeWidth="2" fill="none"></circle>
                                </svg>
                                <i className="fab fa-lg fa-youtube youtube" ></i>
                            </div>

                    </div>
                    </div>

                </div>
            </footer>
        </div>
    )
};


export default Footer;

