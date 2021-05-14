import React, {useEffect} from 'react'
import Clubs from '../Content/Clubs'
import ReusableCard from '../components/ReusableBlock'

const faculties = React.forwardRef((props, ref)=> {

    useEffect(() => {
        ref.current.setNavState("navColor");
    }, [ref])
    
    return (
        <div className="clubs"  >

            {Clubs.map(
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
});

export default faculties;
