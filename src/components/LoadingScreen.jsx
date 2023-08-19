import React from "react"
import loadingGifSrc from "../assets/loading.gif"

export default function LoadingScreen() {
   const language = localStorage.getItem("language") || "en"

   return (
      <div id="loader" style={{
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
         flexDirection: "column",
         gap: "2rem",
         height: "100vh !important",
         opacity: "1"
      }}>
          <video
            poster={loadingGifSrc}
            style={{
               width: "10rem",
               height: "auto",
            }}
         />
   
          <h4>{language === "en" ? "Loading..." : "Töltődik..."}</h4>
      </div>
   )
}
