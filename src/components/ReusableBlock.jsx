import React from "react"

function ReusableCard(props){

    return (
      props.isLeftAlign ? <div className="reusableBlock">
      <div className="reusableHeadingBlock">
        {props.haveLogo ? <img className="reusableHeadingImage" src={props.imgSrc} alt={props.altText} /> : null } 
         <h3 className="reusableHeading"> {props.heading} </h3>
      </div>
      <div className="reusableCard"> 
      <blockquote><p class="quotation"> {props.content}</p>
      <footer> {props.writer}</footer>
      </blockquote>
      </div>
  </div>
      :   <div className="reusableBlock">
      <div className="reusableCard"> 
      <blockquote><p class="quotation"> {props.content}</p>
      <footer> {props.writer}</footer>
      </blockquote>
      </div>
      <div className="reusableHeadingBlock">
        {props.haveLogo ? <img className="reusableHeadingImage" src={props.imgSrc} alt={props.altText} /> : null } 
         <h3 className="reusableHeading"> {props.heading} </h3>
      </div>
  </div>
    );
}

export default ReusableCard;