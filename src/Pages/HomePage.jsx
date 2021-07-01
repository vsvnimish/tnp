import React, {useEffect} from 'react'
import {AboutIIITR, Thoughts} from '../Content/Home.js'
import {ReactComponent as Logo} from "../images/logo.svg"
import ReusableCard from '../components/ReusableBlock';
import BackImg from '../images/image1.jpeg'
import WhyRecruitUs from "./WhyRecruitUs";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

AOS.init({
    easing: 'ease-in-out', // default easing for AOS animations
    duration: 1000,
    delay: 20,
});


const HomePage = React.forwardRef((props, ref)=> {

    useEffect(() => {
        ref.current.setNavState(" ", "1");
    }, [ref])

  return (
    <div className="homepage" id="home" onClick={() => { ref.current.setMenu(false); }}>
      <div className="top">

            <img src={BackImg} alt="website logo" className="backImage" />

            <div className="topComponents" >

                <div className="HomepageCenter" data-aos="zoom-in" >
                    <Logo className="logo" />

                    <div className="HomepageLogoText" data-aos="fade-right"  >
                        <h1>Training and <br/>Placement Cell</h1>
                        <h6>Indian Institute Of Information Technology, Raichur</h6>
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

            {Thoughts.map((item, id)=>{
                return(
                    <ReusableCard
                        key={id}
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

            <div>
            <div id="recruit" style={{height:"2vh"}} ></div>

            <h1 className="recruitHead" data-aos="fade-up"  href='/somefile.txt' download >Why Recruit Us</h1>

            <WhyRecruitUs/>

            </div>
 
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
});

export default HomePage;


