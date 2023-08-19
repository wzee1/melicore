import React, { useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom';

export default function HoneyIDInfo(props) {
   const data = useOutletContext()
   const { id } = useParams()

   const [selectedTab, setSelectedTab] = useState("info")
   
   const handleTabClick = (tab) => {
      setSelectedTab(tab)
   }

   return (
      <div className="hero-left--desc">
         <ul className="hero-left--desc--nav">
            <li
               onClick={() => handleTabClick("info")}
               className={selectedTab === "info" ? "first-tab selected-tab" : "first-tab"}
            >{data.honeysPage.honeysSection.honeyIDInfo[1]}</li>
            <li
               onClick={() => handleTabClick("nutritionFacts")}
               className={selectedTab === "nutritionFacts" ? "selected-tab" : ""}
            >{data.honeysPage.honeysSection.honeyIDInfo[2]}</li>
         </ul>

         <div className="hero-left--desc--content">
            {selectedTab === "nutritionFacts" && data.honeysPage.honeysSection[id].info[2]}
            {selectedTab === "info" ?
               <>
                  <div style={{display: "flex", gap: ".5rem"}}>
                     <h4 style={{marginBottom: ".25rem"}}>
                        <b>{data.honeysPage.honeysSection[id].info[1][1].header}</b>
                     </h4>

                     <button style={{
                        background: "unset",
                        border: "unset",
                        color: "var(--color-primary)"
                     }}
                     onClick={() => {
                        const infoP = document.querySelector(".info-p")
                        if (infoP.style.height === "0px" || infoP.style.height === "") {
                           infoP.style.height = "auto"
                           infoP.style.overflow = "visible"
                        } else {
                           infoP.style.height = "0"
                           infoP.style.overflow = "hidden"
                        }
                     }}>▼</button>
                  </div>
                  
                  <p className="info-p" style={{
                     marginBottom: "1.5rem",
                     height: 0,
                     overflow: "hidden"
                  }}>
                     {data.honeysPage.honeysSection[id].info[1][1].desc}
                  </p>

                  <div style={{
                     display: "flex",
                     gap: "1rem"
                  }}>
                     <h4 style={{marginBottom: ".25rem"}}>
                        <b>{data.honeysPage.honeysSection[id].info[1][2].header}</b>
                     </h4>

                     <button style={{
                        background: "unset",
                        border: "unset",
                        color: "var(--color-primary)"
                     }}
                     onClick={() => {
                        const infoP = document.querySelector(".info-p2")
                        if (infoP.style.height === "0px" || infoP.style.height === "") {
                           infoP.style.height = "auto"
                           infoP.style.overflow = "visible"
                        } else {
                           infoP.style.height = "0"
                           infoP.style.overflow = "hidden"
                        }
                     }}>▼</button>
                  </div>
                  
                  <p className="info-p2" style={{height: 0, overflow: "hidden"}}>
                     {data.honeysPage.honeysSection[id].info[1][2].desc}
                  </p>
               </> : null
            }
         </div>
      </div>
   )
}
