import React from "react"
import { useParams, useOutletContext } from "react-router-dom"
import "../Honeys/honeys.css"

import Hero from "../../pages/LandingPage/sections/hero/Hero"
import HoneyIDInfo from "./HoneyIDInfo"
import Button from "../../components/Button"

import heroImgSrc from "../../assets/Honeys/Honey/honey1.webp"
import NotFound from "../NotFound/NotFound"

export default function HoneyID() {
   const data = useOutletContext();

   const honeyIDs = Array.from(
      // length: gives back the ID count from database
      { length: Object.keys(data.honeysPage.honeysSection).length - 1 },
      // Generating the array, if length is 6, then array: [1, 2, 3, 4, 5, 6] etc...
      (_, index) => index + 1)
      
   const { id } = useParams()
   const found = honeyIDs.includes(Number(id))
   
   const content = found ? (
      <Hero 
         header={data.honeysPage.honeysSection[id].header}
         desc={<HoneyIDInfo id={id}/>}
         primaryCta={
            <Button
               href="/honeys"
               link={true}
               primary={true}
               text={data.honeysPage.honeysSection.honeyIDInfo.primaryCtaText}
            />
         }
         heroImg={
            <img src={heroImgSrc} alt="Photo of honey" className="honeyid-hero-image"/>}
         coordinate={90}
         className="honeyid"
      />
   ) : <NotFound />

   return (
      <>{content}</>
   )
}