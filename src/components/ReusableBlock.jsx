import React from "react"

function ReusableCard(props){

    return (
      props.isLeftAlign ? <div className="reusableMain" data-aos="fade-up" >

      <div className="head" >
        <h3 className="reusableHeading"> {props.heading}  </h3>
        <hr className="lineBreak" />
      </div>
      <div className="reusableBlock" >

      <div className="reusableHeadingBlock">
        {props.haveLogo ? <img className="reusableHeadingImage" src={props.imgSrc} alt={props.altText} /> : null } 
      </div>
      <div className="reusableCard"> 
        <blockquote><p className="quotation" > {props.content}</p>
          <footer> {props.writer}</footer>
        </blockquote>
      </div>

      </div>
      
      </div>

      :   <div className="reusableMain" data-aos="fade-up" >

        <div className="head rightHead" >
        <h3 className="reusableHeading"> {props.heading}  </h3>
        <hr className="lineBreak" />
      </div>

        <div className="reusableBlock" >
      <div className="reusableCard"> 
        <blockquote className="leftBlock" ><p className="quotation"> {props.content}</p>
          <footer> {props.writer}</footer>
        </blockquote>
      </div>
      <div className="reusableHeadingBlock">
        {props.haveLogo ? <img className="reusableHeadingImage" src={props.imgSrc} alt={props.altText} /> : null } 
      </div>

      </div>
  </div>
    );
}

export default ReusableCard;