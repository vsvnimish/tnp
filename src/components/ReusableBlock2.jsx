import React from "react"

function ReusableBlock2(props){

    return (
    <div className="reusableBlock2">
        <h3 className="reusableHeading2">{props.heading}</h3>
        <div className="reusableCard2"> 
            {props.content}
        </div>
  </div>
    );
}

export default ReusableBlock2;



