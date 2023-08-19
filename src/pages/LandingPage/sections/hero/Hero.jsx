import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Button from "../../../../components/Button"
import "../../sections/hero/hero.css"

// Images
import scrollDownSrc from "../../../../assets/LandingPage/Hero/Scroll Down.svg"
import rectangleSrc from "../../../../assets/LandingPage/Hero/Rectangle.png"
import qouteSrc from "../../../../assets/Honeys/Honeys/qoute.webp"
import HoneyIDInfo from "../../../Honeys/HoneyIDInfo"

export default function Hero(props) {
   useEffect(() => {
      const nav = document.querySelector(".nav-desktop")
      const navUl = nav.querySelector("ul")
      let navUlMargin =
         window.innerWidth >= 1400
         ? '7rem'
         : (window.innerWidth >= 1100 ? '2rem' : '0')

      const handleScroll = async () => {
         const yCoordinate = props.coordinate

         if (window.scrollY > yCoordinate) {
            nav.classList.add("transition")
            nav.classList.add("scrolled")
            navUl.style.marginRight = "0"
         } else {
            nav.classList.remove("scrolled")
            navUl.style.marginRight = navUlMargin
            
            // Wait for the transition to complete
            await new Promise(resolve => {
               nav.addEventListener("transitionend", resolve, { once: true })
            });
            
            nav.classList.remove("transition")
         }
      }

      const handleResize = () => {
         navUlMargin =
            window.innerWidth >= 1400
            ? '7rem'
            : (window.innerWidth >= 1100 ? '2rem' : '0')
         handleScroll()
      }

      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);
      return () => {
         window.removeEventListener('scroll', handleScroll);
         window.removeEventListener('resize', handleResize);
      };
   }, [])

   // In honeysPage and honeyIDInfo the desc is not just a text,
   // so I will use this boolean to conditionally render.
   const isHoneysPage = useLocation().pathname === "/honeys" ? true : false

   const honeyIDs = [1, 2, 3, 4, 5, 6]
   const honeyIDInfoPaths = honeyIDs.map(id => `/honeys/${id}`)
   const isHoneyIDInfo = honeyIDInfoPaths.includes(useLocation().pathname)
   
   return (
      <section className="hero container">
         <div className="hero-left">
            <h1 className="hero-left--header">
               {typeof props.header === "object"
                  ? <>
                     {props.header[0] !== undefined
                        ? <span className="dot-color">
                           {props.header[0]}
                        </span>
                        : null
                     }
                        
                     {props.header[1]}<br />
                     {props.header[2]}
                  </> : <>
                     {props.header}
                  </>
               }
               
            </h1>
            
            {!isHoneyIDInfo
               ? <div className="hero-left--desc">
                  {/* If .desc is an object with 2 values (there cannot be more)
                     then I check if their first element's length is equal to 1.
                     If not: It's an object, so I have to display them diff.
                     If yes: It's a string, so I have to display the whole .desc
                  */}
                  {(props.desc[1]?.length !== 1 && props.desc[2]?.length !== 1)
                     ? <>
                        {props.desc[1]}<br /><br />
                        {props.desc[2]}
                     </>

                     : (isHoneysPage
                        ? <div style={{marginTop: "4rem", marginLeft: "3rem"}}>
                              <img src={qouteSrc} alt="Qoute Mark"
                                 className="honeys-qoute"
                              />
                              {props.desc}
                           </div>
                        : <>{props.desc}</>
                     ) 
                  }
               </div>
               : <HoneyIDInfo />
            }
               
            {/* If there is no CTA in any hero sections then don't render the buttons*/}
            {(props.primaryCtaText !== undefined
               && props.secondaryCtaText !== undefined)
               ? <div className="hero-left--cta">
                  <Button
                     href="/honeys"
                     link={true}
                     primary={true}
                     text={props.primaryCtaText}
                  />

                  <Button
                     href="#about-us"
                     link={false}
                     primary={false}
                     text={props.secondaryCtaText}
                  />
               </div>
               : null
            }

            {props.showScroll && <img src={scrollDownSrc} alt="Scroll Down for more" className="hero-left--scroll"/>}
         </div>

         <div className="hero-right">
            <img src={rectangleSrc} alt="Border of image" className="hero-right--rectangle"/>
            {props.heroImg}
         </div>
      </section>
   )
}