import React from 'react'
import {AboutIIITR, Thoughts, WhyUs} from '../Content/Home.js'
import {ReactComponent as Logo} from "../images/ocs_logo.svg"
import ReusableCard from '../components/ReusableBlock';
import ReusableBlock2 from '../components/ReusableBlock2';
import BackImg from '../images/cover.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

AOS.init({
    easing: 'ease-in-out', // default easing for AOS animations
    duration: 1000,
    delay: 20,
});


export default function HomePage() {

  return (
    <div className="homepage">
      <div className="top">

            <img src={BackImg} alt="website logo" className="backImage" />

            <div className="topComponents" >

                <div className="HomepageCenter" data-aos="zoom-in" >
                    <Logo className="logo" />

                    <div className="HomepageLogoText" data-aos="fade-right"  >
                        <h1>OCS</h1>
                    </div>

                </div>

                <div className = "scrollNoti" onClick={()=>{document.getElementById('scrollTO').scrollIntoView({ behavior: 'smooth' })}} >
                    <i className="fas fa-2x fa-angle-double-down" style={{cursor:"pointer"}} ></i> 
                </div>

                </div>
            
            {/* <div className="aboutIIITR">
                <h1 className="aboutHead">About Us</h1>

                <p>{AboutIIITR}</p>
            </div>

            <div className="updates">
                <hr className="line" />
                <h1>Updates</h1>
            </div> */}
                
        </div>
        <div className="recruitUs" id="scrollTO" >
            
            <div className="aboutUs" data-aos="fade-up" >
                <h1>About Us</h1>
                <p>{AboutIIITR}</p>
            </div>

            {Thoughts.map((item)=>{
                return(
                    <ReusableCard
                        isLeftAlign={item.isLeftAlign}
                        haveLogo={item.haveLogo}
                        heading={item.heading}
                        writer={item.writer}
                        content={item.content}
                        imgSrc={item.imgSrc}
                        altText={item.altText}
                    />
                )
            })}
 
        </div>
        {/* <div className="whyUsHeading">
            <h3 > Why us ??</h3>
        </div> */}

        {/* <div className="whyUsContent">
            {WhyUs.map((item)=>{
                return(
                    <ReusableBlock2
                        heading={item.heading}
                        content={item.content}
                    />
                )
            })}
        </div> */}
            {/* <div className="content">
	            <div>
                    <div className="missionHead" id="mission" >
                        <h1 className="heading">
                            Mission and Philosophy
                        </h1>
                    </div>
                    <hr className="line" />

                    <p className="missionContent" >
                        {Mission}
                    </p>
                </div>
            </div> */}
    </div>
  );
}


