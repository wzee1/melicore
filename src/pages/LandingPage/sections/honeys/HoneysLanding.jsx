import React from "react"

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Honey from "./Honey"
import Button from "../../../../components/Button"
import arrowSrc from "../../../../assets/LandingPage/Honeys/arrow.webp"
import "./honeysLanding.css"

export default function HoneysLanding(props) {
   const data = props.data

   const honeyBoxes = []
   for (let i = 1; i < 3; i++) {
      honeyBoxes.push(
         <Honey
            key={i}
            imgSrc={`/honeyImages/rect${i}.webp`}
            name={data.landingPage.honeysSection.carousel[i].name}
            desc={data.landingPage.honeysSection.carousel[i].desc}
            href={data.landingPage.honeysSection.carousel[i].href}
         />
      )
   }

   return (
      <section className="honeys-landing container">
         <div className="honeys-landing--left">
            <h2 className="honeys-landing--left--header">
               {data.landingPage.honeysSection.header}<span className="dot-color">.</span>
            </h2>

            <p className="honeys-landing--left--desc">
               {data.landingPage.honeysSection.desc[1]}<br />{data.landingPage.honeysSection.desc[2]}
            </p>

            <Button
               primary={true}
               link={true}
               href="/honeys"
               text={data.landingPage.honeysSection.primaryCtaText}
            />
         </div>

         <img
            src={arrowSrc}
            alt="Arrow pointing to the honeys"
            className="honeys-landing--arrow"
         />

         <div className="honeys-landing--right">
            <Carousel
               showThumbs={false}
               width="30rem"
               className="honeys-landing--right--carousel"
            >  
               {honeyBoxes}
            </Carousel>
         </div>
      </section>
  )
}
