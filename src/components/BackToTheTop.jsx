import React, { useEffect } from "react"
import imgSrc from "../assets/up-arrow.svg"

export default function BackToTheTop() {
   useEffect(() => {
      const scrollToTop = document.querySelector(".back-to-the-top")

      const handleScroll = async () => {
         const yCoordinate = 300

         if (window.scrollY > yCoordinate) {
            scrollToTop.style.display = "unset"

            setTimeout(() => {
               scrollToTop.style.opacity = 1
             }, 10)
         } else {
            scrollToTop.style.opacity = 0

            scrollToTop.addEventListener("transitionend", () => {
               if (scrollToTop.style.opacity === "0") {
                  scrollToTop.style.display = "none"
                }
            }, { once: true })
         }
      }

      scrollToTop.style.opacity = 0;

      window.addEventListener("scroll", handleScroll)
      return () => {
         window.removeEventListener("scroll", handleScroll)
      }
   }, [])

   return (
      <img
         src={imgSrc}
         alt="Back to the top button"
         className="back-to-the-top"
         onClick={() => window.scrollTo(0, 0)}
      />
   )
}
