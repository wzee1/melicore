import React from "react"
import { Link } from "react-router-dom"

export default function Button(props) {
   const hierarchy = props.primary ? "primary" : "secondary"

   return (
      <>
         {props.link &&
            <Link
               to={props.href}
               onClick={() => window.scrollTo(0, 0)}
               className={`button ${hierarchy}-button`}
            >
               {props.text}
            </Link>
         }

         {!props.link &&
            <a
               href={props.href}
               onClick={() => window.scrollTo(0, 0)}
               className={`button ${hierarchy}-button`}
               target={props.target}
            >
               {props.text}
            </a>
         }
      </>
   )
}