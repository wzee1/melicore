import React from "react"
import { useOutletContext } from "react-router-dom"

// Section imports
import Hero from "./sections/hero/Hero"
import HoneysLanding from "./sections/honeys/HoneysLanding"
import AboutUs from "./sections/about-us/AboutUs"

import heroImgSrc from "../../assets/LandingPage/Hero/hero.webp"

export default function LandingPage() {
   const data = useOutletContext();
   
   return (
      <>
         <Hero
            header={data.landingPage.heroSection.header}
            desc={data.landingPage.heroSection.desc}
            primaryCtaText={data.landingPage.heroSection.primaryCtaText}
            secondaryCtaText={data.landingPage.heroSection.secondaryCtaText}
            heroImg={
               <img src={heroImgSrc} alt="Photo of honey" className="hero-right--image"/>}
            coordinate={data.landingPage.heroSection.coordinate}
            showScroll={data.landingPage.heroSection.showScroll}
            data={data}
         />

         <HoneysLanding data={data}/>
         <AboutUs data={data}/>
      </>
   )
}