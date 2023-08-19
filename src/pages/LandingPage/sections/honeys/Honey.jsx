import React from "react"
import Button from "../../../../components/Button"

export default function Honey(props) {
   const language = localStorage.getItem("language") || "hu"

   return (
      <div className="honeys-landing--right--carousel--box">
         <img src={props.imgSrc} alt="Image of the honey" />
         <div>
            <h4>{props.name}</h4>
            <p className="honeys-landing--right--carousel--box--p">{props.desc}</p>
            <Button
               primary={true}
               link={true}
               href={props.href}
               text={
                  language === "en" ? "learn more" : "bővebben"
               }
            />
         </div>
      </div>
   )
}
