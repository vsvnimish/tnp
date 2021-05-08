import React from 'react'
import Heading from '../components/headingAnnimation';
import $ from 'jquery';
import {AboutIIITR, Mission} from '../Content/Home'
// import Img from '../images/back.jpg'

export default function HomePage() {

    // var scrollToNew = false

    // function actOnScroll(){
        
    //     if(window.scrollY === 0 ){
    //         $('.top, .content').removeClass('scrolled');
    //         scrollToNew = false;
    //     }else if(window.scrollY > 150){
    //         $('.top, .content').addClass('scrolled');
            
    //         if(!scrollToNew){  
    //             window.scrollTo({
    //                 top: 14,
    //                 behavior: 'smooth'
    //             });
    //             scrollToNew = true;
    //         }
    //     }

        
    // }

    // window.addEventListener("scroll", actOnScroll);

    return (
        <div >
            <div className="top" >
	            <Heading
                    cla="concept-one"
                    heading="Welcome To OCS-IIITR"
                />
                <div className="aboutIIITR">
                    <h1 className="aboutHead" >
                        About IIITR
                    </h1>

                    <p>
                        {AboutIIITR}
                    </p>
                </div>

                <div class="news" >
                    <hr className="line" />
                    <h1>
                        Updates
                    </h1>
                </div>

                <div className = "scrollNoti"  >
                    <i class="fas fa-2x fa-angle-double-down"></i>
                </div>
            </div>

            <div className="content">
	            <div>
                    <div className="missionHead" >
                        <h1 className="heading">
                            Mission and Philosophy
                        </h1>
                    </div>
                    <hr class="line" />

                    <p className="missionContent" >
                        {Mission}
                    </p>
                </div>
            </div>
        </div>

    )
}

