import React from 'react'
import Clubs from '../Content/Clubs'
import ReusableCard from '../components/ReusableBlock'

export default function faculties() {
    
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
}
