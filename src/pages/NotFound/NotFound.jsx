import React from "react"
import { useOutletContext } from "react-router-dom"

import Hero from "../../pages/LandingPage/sections/hero/Hero"
import heroImgSrc from "../../assets/NotFound/404.webp"
import "./notfound.css"

export default function NotFound() {
   const data = useOutletContext()

   return (
      <Hero
         header={data.notFoundPage.header}
         desc={data.notFoundPage.desc}
         primaryCta={data.notFoundPage.primaryCta}
         heroImg={
            <img src={heroImgSrc} alt="Photo of honey" className="notfound-hero-image"/>}
         coordinate={data.notFoundPage.coordinate}
         showScroll={data.notFoundPage.showScroll}
      />
   )
}