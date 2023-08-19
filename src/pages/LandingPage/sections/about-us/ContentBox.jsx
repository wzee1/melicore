import React from "react"

export default function ContentBox(props) {
   return (
      <div className="about-us--content--box">
         <h3>{props.header}</h3>

         <p>
            {props.desc[1]}<span className="dot-color">{props.desc[2]}</span>{props.desc[3]}
         </p>
      </div>
   )
}
