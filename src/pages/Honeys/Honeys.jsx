import React, { useState } from "react"
import { useOutletContext } from "react-router-dom"

import Hero from "../../pages/LandingPage/sections/hero/Hero"
import Honey from "../LandingPage/sections/honeys/Honey"

import "./honeys.css"
import "../LandingPage/sections/honeys/honeysLanding.css"
import heroImgSrc from "../../assets/Honeys/Honeys/honeys.webp"

export default function Honeys() {
   const data = useOutletContext();
   const language = localStorage.getItem("language") || "en"
   const [searchQuery, setSearchQuery] = useState("")
   let queryFound = true

   const honeyBoxes = []
   for (let i = 1; i < Object.keys(data.honeysPage.honeysSection).length; i++) {
      if (
         !data.honeysPage.honeysSection[i]
         .header.toLowerCase()
         .includes(
            searchQuery.toLowerCase())
      ) continue

      honeyBoxes.push(
         <Honey
            key={i}
            imgSrc={`/honeyImages/rect${i}.webp`}
            name={data.honeysPage.honeysSection[i].header}
            desc={data.honeysPage.honeysSection[i].desc}
            href={data.honeysPage.honeysSection[i].href}
         />
      )
   }

   if (!honeyBoxes.length) queryFound = false
   
   return (
      <>
         <Hero
            header={data.honeysPage.heroSection.header}
            desc={data.honeysPage.heroSection.desc}
            heroImg={
               <img src={heroImgSrc} alt="Photo of honey" className="honeys-hero-image"/>}
            coordinate={data.honeysPage.heroSection.coordinate}
            showScroll={data.honeysPage.heroSection.showScroll}
         />

         <section className="honeys-grid" id="search">
            <div className="honeys-grid--search">
               <h4>{language === "en" ? "Search for honeys!" : "Keress mézeket!"}</h4>
               <input
                  type="text"
                  name="search"
                  id="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
               />
            </div>
            {queryFound ? honeyBoxes : 
               <h3 style={{width: "fit-content"}}>
                  {language === "en"
                     ? "Product with this name cannot be found!"
                     : "Ilyen nevű termék nem található!"}
               </h3>
            }
         </section>
      </>
   )
}