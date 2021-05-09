
import React from 'react'
import Heading from '../components/headingAnnimation';
import $ from 'jquery';
import {AboutIIITR, Mission} from '../Content/Home'
import ReusableCard from '../components/ReusableBlock';

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
    <div className="homepage">
      <div className="top">
        {/* <Heading
                    cla="concept-one"
                    heading="Welcome To OCS-IIITR"
                /> */}
        <div className="aboutIIITR">
          <h1 className="aboutHead">About Us</h1>

          <p>{AboutIIITR}</p>
        </div>

        <div className="updates">
          <hr className="line" />
          <h1>Updates</h1>
        </div>


                <div className = "scrollNoti" onClick={()=>{document.getElementById('mission').scrollIntoView({ behavior: 'smooth' })}} >
                    <i className="fas fa-2x fa-angle-double-down" style={{cursor:"pointer"}} ></i> 
                </div>
                
            </div>
            <div className="recruitUs">
            <ReusableCard 
                isLeftAlign={true}
                haveLogo={true}
                writer="BS Murty"
                heading="From Director's Desk"
                content=" Being mentored by IITH, IIITR has adopted the innovative
                    fractal academics system, which warrants continuous
                    evaluation. This ensures the students have a deeper
                    understanding of the core subjects. Moreover, the highly
                    flexible curriculum forged by the esteemed faculty of IITH and
                    IIITR exuberates innovation and inventiveness. With core
                    subjects being incorporated from the first semester itself, the
                    students are able to finish their courses quite early and focus
                    on developing projects & industry relevant skills."
                imgSrc="https://images-ext-1.discordapp.net/external/1CnMkqZMSH_K0lNVZPLhboBu-8x6JSb5Hixk0HRsnvw/https/ocs.iith.ac.in/static/media/directorsdesk.bb13dd37.jpg?width=501&height=450"
                altText="Director"
            />
            <ReusableCard 
                isLeftAlign={false}
                haveLogo={true}
                heading="Message From TPO"
                writer="Sadhna Jha"
                content=" Being mentored by IITH, IIITR has adopted the innovative
                    fractal academics system, which warrants continuous
                    evaluation. This ensures the students have a deeper
                    understanding of the core subjects. Moreover, the highly
                    flexible curriculum forged by the esteemed faculty of IITH and
                    IIITR exuberates innovation and inventiveness. With core
                    subjects being incorporated from the first semester itself, the
                    students are able to finish their courses quite early and focus
                    on developing projects & industry relevant skills."
                imgSrc="https://images-ext-1.discordapp.net/external/Eld7F0Wj94n5lzFm6tRzx6gd96ikkZX1a75dfitylIU/https/iiitr.ac.in/assets/images/faculty/cse/sadhana.webp"
                altText="tpo"
            />
        </div>
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

//         <div
//           className="scrollNoti"
//           onClick={() => {
//             document
//               .getElementById("mission")
//               .scrollIntoView({ behavior: "smooth" });
//           }}
//         >
//           <i
//             className="fas fa-2x fa-angle-double-down"
//             style={{ cursor: "pointer" }}
//           ></i>
//         </div>
//       </div>

//       <div className="content">
//         <div>
//           <div className="missionHead" id="mission">
//             <h1 className="heading">Mission and Philosophy</h1>
//           </div>
//           <hr className="line" />

//           <p className="missionContent">{Mission}</p>
//         </div>
//       </div>

    </div>
  );
}
