import React, { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"

// Database
import { getHuData, getEnData } from "../api"

import HeaderMobile from "./Header/HeaderMobile"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import LoadingScreen from "./LoadingScreen"
import BackToTheTop from "./BackToTheTop"


export default function Layout() {
   const initialLanguage = localStorage.getItem("language") || "hu"
   const [language, setLanguage] = useState(initialLanguage)

   const onSelect = (e) => {
      const selectedLanguage = e.target.value
      setLanguage(selectedLanguage)
      localStorage.setItem("language", selectedLanguage)
   }

   const [isLoading, setIsLoading] = useState(true)
   const [huData, setHuData] = useState({})
   const [enData, setEnData] = useState({})
   useEffect(() => {
      const fetchData = async (getData, setState) => {
         try {
            const data = await getData();
            setState(data);
         } catch (error) {
            console.error("Error fetching data:", error);
         }
      };

      fetchData(getHuData, setHuData)
      fetchData(getEnData, setEnData)
   }, [])
   
   const [data, setData] = useState(enData)
   useEffect(() => {
      // Checks if the enData and huData finished fetching or not
      if (Object.keys(enData).length > 0 && Object.keys(huData).length > 0) {
         setIsLoading(false)
      }

      if (language === "en") setData(enData)
      if (language === "hu") setData(huData)
   }, [language, huData, enData])

   return (
      <>{!isLoading ? 
         <>       
            <HeaderMobile data={data} language={language} onSelect={onSelect} />
            <Header data={data} language={language} onSelect={onSelect} />
            <div style={{marginTop: "10rem"}}></div>
            <main>
               <Outlet context={data} />
            </main>
            
            <BackToTheTop />

            <Footer data={data}/>
         </>
         : <LoadingScreen />
      }</>
   )
}