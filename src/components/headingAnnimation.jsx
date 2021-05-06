import React from 'react'

export default function headingAnnimation(props) {
    return (
        <div>
            <div className={`concept ${props.cla}`}>
                <div className="hover hover-1"></div>
                <div className="hover hover-2"></div>
                <div className="hover hover-3"></div>
                <div className="hover hover-4"></div>
                <div className="hover hover-5"></div>
                <div className="hover hover-6"></div>
                <div className="hover hover-7"></div>
                <div className="hover hover-8"></div>
                <div className="hover hover-9"></div>
                <h1 className="word">{props.heading}</h1>
            </div>
        </div>
    )
}
