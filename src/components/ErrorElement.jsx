import React from "react"

export default function ErrorElement() {
   const language = localStorage.getItem("language") || "hu"

   return (
      <section style={{display: "grid", placeItems: "center", height: "100vh"}}>
         {language === "en" && 
            <div style={{display: "grid", gap: "2rem", textAlign: "center"}}>
               <h1>
                  <span className="dot-color">Oops! </span>
                  An Error Occurred.
               </h1>

               <p>
                  We apologize, but something went wrong while loading this page.
                  Please try again later.
               </p>
            </div>
         }

         {language === "hu" && 
            <div style={{display: "grid", gap: "2rem", textAlign: "center"}}>
            <h1>
               <span className="dot-color">Hoppá! </span>
               Egy hiba történt.
            </h1>
            
            <p>
               Elnézést kérünk, de valami hiba történt az oldal betöltése során.
               Kérjük, próbálkozzon újra később.
            </p>
            </div>
         }
      </section>
   )
}
