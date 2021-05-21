import React,{useEffect} from 'react'
import ReusableCard from '../components/ReusableBlock'

const whyRecruitUs = React.forwardRef((props, ref)=>{

    // useEffect(() => {
    //     ref.current.setNavState("navColor", "2");
    // }, [ref])

    return (
        <div >
            <ReusableCard 
                isLeftAlign={true}
                haveLogo={false}
                heading="The Prodigious Curriculum and Academic System"
                content=" Being mentored by IITH, IIITR has adopted the innovative
                    fractal academics system, which warrants continuous
                    evaluation. This ensures the students have a deeper
                    understanding of the core subjects. Moreover, the highly
                    flexible curriculum forged by the esteemed faculty of IITH and
                    IIITR exuberates innovation and inventiveness. With core
                    subjects being incorporated from the first semester itself, the
                    students are able to finish their courses quite early and focus
                    on developing projects & industry relevant skills."
            />
            <ReusableCard 
                isLeftAlign={false}
                heading="The coders, thinkers and tinkerers"
                haveLogo={false}
                content=" The student family of IIITR consists of competitive coders, web development enthusiasts, eager learners and diligent scholars.
                    The students represent the creamy layer of talent in the country.
                    They have been actively involved in various technical and cultural
                    club activities of IIT Hyderabad. At the same time, the students
                    have founded and set up numerous clubs of their own to further
                    facilitate collaborative learning and introspective growth. (The
                    students have been exploring various industry relevant skills &
                    technologies like Python, C++, Java, Javascript, flutter, Go, flask,
                    NoSQL, SQL, Django, Node, Vue, React, Docker etc.)"
            />
        </div>
    )
});


export default whyRecruitUs;