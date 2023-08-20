import React from "react"
import ContentBox from "./ContentBox"
import imgSrc from "../../../../assets/LandingPage/About us/beehive.webp"
import "./about-us.css"

export default function AboutUs(props) {
   const data = props.data

   const contentBoxes = []
   for (let i = 1; i < 5; i++) {
      contentBoxes.push(
         <ContentBox
            key={i}
            header={data.landingPage.aboutUsSection.cards[i].header}
            desc={data.landingPage.aboutUsSection.cards[i].desc}
         />
      )
   }

   return (
      <section className="about-us container reveal" id="about-us">
         <h2 className="about-us--header">
            {data.landingPage.aboutUsSection.header}
            <span className="dot-color">.</span>
         </h2>
         
         <div className="about-us--wrapper">
            <div className="about-us--content">
               {contentBoxes}
            </div>

            <img src={imgSrc} alt="Photo of a beehive" className="about-us--image" />
         </div>
      </section>
   )
}