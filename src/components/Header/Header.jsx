import React from "react"
import { Link } from "react-router-dom"
import "./header.css"

import logoSrc from "../../assets/Header/full-logo.webp"

export default function Header(props) {
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

   return (
      <header className="nav-desktop">
         <Link to="/" className="nav-logo" onClick={() => (window.scrollTo(0, 0))}>
            <img src={logoSrc} alt="Melicore logo" />
         </Link>

         <ul>
            <li className="nav-links"><Link to="/honeys">{data.header[1]}</Link></li>
            <li className="nav-links"><Link to="/blog">{data.header[2]}</Link></li>
            <li className="nav-links"><Link to="/" onClick={scrollToAboutUs}>{data.header[3]}</Link></li>
            <li className="nav-links"><Link to="/honeys" onClick={scrollToSearch}>{data.header[4]}</Link></li>
            <select
               name="lang"
               id="lang"
               onChange={onSelect}
               value={language}
               className="language-selector--desktop"
            >
               <option value="en">en</option>
               <option value="hu">hu</option>
            </select>
         </ul>
      </header>
   )
}