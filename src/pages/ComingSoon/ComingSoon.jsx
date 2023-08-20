import React from "react"
import { useOutletContext } from "react-router-dom"

import Hero from "../LandingPage/sections/hero/Hero"
import heroImgSrc from "../../assets/ComingSoon/comingsoon.webp"

export default function ComingSoon() {
   const data = useOutletContext()
   const image = 
      <img
         src={heroImgSrc}
         alt="Coming Soon"
         className="hero-right--image"
         title="Image by pngtree.com"
         style={{cursor: "pointer", zoom: ".75"}}
         onClick={() => {
            window.location.href = "https://pngtree.com/freepng/coming-soon-banner-design-with-speaker_6869715.html"
         }}
      />

   return (
      <Hero
         header={data.comingSoon.header}
         desc={data.comingSoon.desc}
         heroImg={image}
         coordinate={100}
         showScroll={false}
      />
   )
}