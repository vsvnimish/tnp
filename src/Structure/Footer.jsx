import React from 'react';
import './_footer.scss';
import Logo from '../images/logo/logo.png';
import Social from '../components/socialMedia/Social';


const Footer = (props) => {

    return (
        <div className="main">
            <footer>
                <div className="footer">
                    <img src={Logo} alt="Logo"  className="logoF" />
                    <div className="quickLinks"  > <h1>QUICK LINKS</h1></div>
                    <div className="contact"  > <h1>CONTACT US</h1></div>
                    <div className="connect"  >
                        <h1>LETS CONNECT</h1>
                        <Social/>
                    </div>
                </div>
            </footer>
        </div>
    )
}


export default Footer
