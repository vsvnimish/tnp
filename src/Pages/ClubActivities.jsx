import React from 'react'
import ReusableCard from '../components/ReusableBlock'

export default function faculties() {
    var clubs = [

        {
            isLeftAlign:true,
            heading:"CodeSoc - The Coding Club",
            content:`IITs are focused mainly on Information
            Technology, and coding emerges as a must
            need for the institute. To develop the best
            coding practices in the institute, the club
            assists individuals to advance in a wide
            range of programming skills`,
            haveLogo:true,
            imgSrc:"https://th.bing.com/th/id/R5da45d43b081913d1c1b1bdc48e352ca?rik=Ql2VUROKtfbw%2bQ&riu=http%3a%2f%2fiitg.ac.in%2fdesign%2fupload%2fimages%2fProjects%2fIITH_logo%2fIIT+Hyderabad+Logo_Final+Design.jpg&ehk=29SS7340p29GEclhKOdyUXErb810RjzloCFFN5GubPo%3d&risl=&pid=ImgRaw",
            altText:"logo"
        },

        {
            isLeftAlign:false,
            heading:`ElectroGeeks - The Electronics and Robotics Club`,
            content:`Apart from programming, this club lets the
            students explore different facets of Engineering in
            Electronics and Robotics.`,
            haveLogo:true,
            imgSrc:"https://th.bing.com/th/id/R5da45d43b081913d1c1b1bdc48e352ca?rik=Ql2VUROKtfbw%2bQ&riu=http%3a%2f%2fiitg.ac.in%2fdesign%2fupload%2fimages%2fProjects%2fIITH_logo%2fIIT+Hyderabad+Logo_Final+Design.jpg&ehk=29SS7340p29GEclhKOdyUXErb810RjzloCFFN5GubPo%3d&risl=&pid=ImgRaw",
            altText:"logo"
        }
    ];
    return (
        <div className="clubs"  >

            {clubs.map(
                club => <ReusableCard 
                    isLeftAlign={club.isLeftAlign}
                    heading={club.heading}
                    content={club.content}
                    haveLogo={club.haveLogo}
                    imgSrc={club.imgSrc}
                    altText={club.altText}
                />
            )}

        </div>
    )
}
