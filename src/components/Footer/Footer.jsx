import React from "react"
import { Link } from "react-router-dom"
import "../../components/Footer/footer.css"

import logoSrc from "../../assets/Header/full-logo.webp"
import facebookSrc from "../../assets/Footer/facebook.svg"
import instagramSrc from "../../assets/Footer/instagram.svg"

export default function Footer(props) {
   const data = props.data

   const scrollToAboutUs = async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
      const aboutUsSection = document.getElementById("about-us");

      if (aboutUsSection) {
         aboutUsSection.scrollIntoView({ behavior: "smooth" });
      }
   };

   return (
      <footer>
         <img
            src={logoSrc} 
            alt="Melicore logo" 
            className="footer-logo"
         />

         <div className="link-container">
            <div className="footer-essential">
               <h3>
                  {data.footer.col1.header}<span className="dot-color">.</span>
               </h3>
   
               <ul>
                  <li><Link to="/honeys">{data.footer.col1.links[1]}</Link></li>
                  <li><Link to="/blog">{data.footer.col1.links[2]}</Link></li>
                  <li><Link to="/" onClick={scrollToAboutUs}>{data.footer.col1.links[3]}</Link></li>
               </ul>              
            </div>

            <div className="footer-socials">
               <h3>
                  {data.footer.col2.header}<span className="dot-color">.</span>
               </h3>

               <ul>
                  <li>
                     <a href="https://www.facebook.com/melicoreofficial" 
                        target="_blank"
                        style={{
                           display: "flex",
                           alignItems: "center",
                           gap: ".5rem"
                        }}
                     >
                        <img src={facebookSrc} alt="Facebook logo"/>
                        <span> /melicore</span>
                     </a>
                  </li>

                  <li>
                     <a href="https://www.instagram.com/melicoreofficial"
                        target="_blank"
                        style={{
                           display: "flex",
                           alignItems: "center",
                           gap: ".5rem"
                        }}
                     >
                        <img
                           src={instagramSrc}
                           style={{width: "32px", height: "auto"}}
                           alt="Facebook logo"
                        />
                        <span> /melicore</span>
                     </a>
                  </li>
               </ul>
            </div>

            <div className="footer-contact">
               <h3>
                  {data.footer.col3.header}<span className="dot-color">.</span>
               </h3>

               <ul>
                  <li>
                     <p className="footer-contact--first">
                        <b>{data.footer.col3.links[1]}</b><br />
                        info.melicore@gmail.com
                     </p>

                     <b>{data.footer.col3.links[2]}</b><br />
                     +36 30 123 4567
                  </li>

                  <li>
                     <b>{data.footer.col3.links[3][1]}</b><br />
                     {data.footer.col3.links[3][2]}<br />
                     4100 Berettyóújfalu,<br />
                     {data.footer.col3.links[3][3]}
                  </li>
               </ul>
            </div>

            <div className="footer-policies">
               <h3>
                  {data.footer.col4.header}<span className="dot-color">.</span>
               </h3>

               <ul>
                  <li>
                     <Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)}>
                        {data.footer.col4.links[1]}
                     </Link>
                  </li>

                  <li>
                     <Link to="/terms-of-service" onClick={() => window.scrollTo(0, 0)}>
                        {data.footer.col4.links[2]}
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </footer>
   )
}