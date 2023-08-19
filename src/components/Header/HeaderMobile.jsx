import React from "react"
import { Link } from "react-router-dom"
import "./header.css"

import logoSrc from "../../assets/Header/mobile-logo.webp"

export default function HeaderMobile(props) {
   const language = props.language
   const onSelect = props.onSelect
   const data = props.data

   const scrollToAboutUs = async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
      const aboutUsSection = document.getElementById("about-us");

      if (aboutUsSection) {
         aboutUsSection.scrollIntoView({ behavior: "smooth" });
      }
   };

   const scrollToSearch = async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
      const searchSection = document.getElementById("search");

      if (searchSection) {
         searchSection.scrollIntoView({ behavior: "smooth" });
      }
   }

   function closeMenu() {
      const navToggle = document.getElementById("page-nav-toggle")
      navToggle.checked = !navToggle.checked
   }

   return (
      <> 
         <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img 
               src={logoSrc}
               alt="Melicore logo"
               className="nav-logo-mobile"
            />
         </Link>
         
         <header className="nav-mobile">
            <input
               id="page-nav-toggle"
               className="main-navigation-toggle"
               type="checkbox"
            />
            <label htmlFor="page-nav-toggle">
               <svg className="icon--menu-toggle" viewBox="0 0 60 30">
                  <g className="icon-group">
                     <g className="icon--menu">
                        <path d="M 6 0 L 54 0" />
                        <path d="M 6 15 L 54 15" />
                        <path d="M 6 30 L 54 30" />
                     </g>
                     <g className="icon--close">
                        <path d="M 15 0 L 45 30" />
                        <path d="M 15 30 L 45 0" />
                     </g>
                  </g>
               </svg>
            </label>

            <nav className="main-navigation">
               <ul>
                  <li className="nav-links">
                     <Link to="/" onClick={() => {
                        window.scrollTo(0, 0)
                        closeMenu()
                     }}>{data.header[0]}</Link>
                  </li>
                  <li className="nav-links" onClick={closeMenu}>
                     <Link to="/honeys">{data.header[1]}</Link>
                  </li>
                  <li className="nav-links" onClick={closeMenu}>
                     <Link to="/blog">{data.header[2]}</Link>
                  </li>
                  <li className="nav-links" onClick={closeMenu}>
                     <Link to="/" onClick={scrollToAboutUs}>{data.header[3]}</Link>
                  </li>
                  <li className="nav-links" onClick={closeMenu}>
                     <Link to="/honeys" onClick={scrollToSearch}>{data.header[4]}</Link>
                  </li>
               </ul>

               <select
                  name="lang"
                  id="lang"
                  onChange={onSelect}
                  value={language}
                  className="language-selector--mobile"
               >
                  <option value="en">en</option>
                  <option value="hu">hu</option>
               </select>
            </nav>
         </header>
      </>
   )
}