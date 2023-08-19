import React from "react"
import { useOutletContext } from "react-router-dom"

import "./policy.css"
import Hero from "../LandingPage/sections/hero/Hero"
import heroImgSrc from "../../assets/Policies/privacy.webp"

export default function PrivacyPolicy() {
   const data = useOutletContext()
   const language = localStorage.getItem("language") || "hu"

   return (
      <>
         <Hero
            header={data.privacyPolicy.header}
            desc={data.privacyPolicy.desc}
            primaryCta={data.privacyPolicy.primaryCta}
            heroImg={
               <img src={heroImgSrc} alt="Security" className="hero-right--image"/>}
            coordinate={data.landingPage.heroSection.coordinate}
            showScroll={data.landingPage.heroSection.showScroll}
         />

         <section className="policy container">
            {
               language === "hu"
               ? <>
                  <h3>Információgyűjtés:</h3>
                  <p>A Melicore-nál weboldalunkat úgy terveztük, hogy ügyfeleink információkat szerezzenek vállalatunkról és kínált termékeinkről.<br />
                  Látogatásuk során nem gyűjtünk személyes adatokat a látogatóktól weboldalunkon történő interakció során.<br />
                  Látogatása weboldalunkra teljesen névtelen, és semmilyen információt nem gyűjtünk rólad.</p>
      
                  <h3>Sütik:</h3>
                  <p>Weboldalunk alapvető funkcionalitásért, például a munkamenet kezeléséért és a megfelelő weboldal működéséért sütiket használhat.<br />
                  Emellett localStorage-t is használunk, ami egy webes tárolási mechanizmus a modern webböngészők által biztosított, nem személyes felhasználói preferenciák tárolására, amit a felhasználók maguk állítottak be.
                  Ez a választás helyben van tárolva eszközén, és nem kerül átvitelre szervereinkre.
                  Kérjük, vegye figyelembe, hogy a localStorage használata erre a célra kizárólag a böngészési élmény fokozása és a beállítások emlékezésének szolgál.
                  Ez nem jelent személyes adatok gyűjtését vagy információk megosztását harmadik felekkel.<br />
                  Weboldalunk használatával beleegyezik az elengedhetetlen sütik használatába és a localStorage felhasználásába az Ön felhasználói élményének javításához.</p>
      
                  <h3>Harmadik felek hivatkozásai:</h3>
                  <p>Weboldalunk harmadik fél weboldalakra mutató linkeket tartalmazhat kényelme érdekében.
                  Kérjük, vegye figyelembe, hogy nincs kontrollunk ezeknek a külső weboldalaknak az adatvédelmi gyakorlata felett.<br />
                  Javasoljuk, hogy tekintse át a látogatott harmadik felek weboldalainak adatvédelmi irányelveit.</p>
      
                  <h3>Elérhetőségi információk:</h3>
                  <p>Ha bármilyen kérdése vagy aggálya van weboldalunk adatvédelmi szempontjaival kapcsolatban, kérjük, vegye fel velünk a kapcsolatot:<br />
                  Email: info.melicore@gmail.com<br />
                  Telefon: +36 30 123 4567</p>
      
                  <p>Csapatunk itt van az Ön számára, hogy az információkat biztosítsuk az Ön böngészési élményének biztonságos és kellemes kialakításához.</p>
      
                  <h3>Adatvédelmi irányelv frissítései:</h3>
                  <p>Amíg weboldalunk jelenleg nem foglalkozik adatgyűjtéssel, jövőbeni frissítéseket tervezünk az Adatvédelmi Irányelvhez, ahogy weboldalunk fejlődik.<br />
                  Az irányelv bármilyen változását ezen az oldalon közöljük.
                  Arra ösztönözzük, hogy időről időre térjen vissza, hogy tájékozódjon arról, hogyan kezeljük az adatvédelmet.</p>
      
                  <h3>Köszönjük, hogy a Melicore-t választotta!</h3>
                  <p>Az Ön adatvédelmének fenntartására szenteltük magunkat, amint felfedezze weboldalunkat.</p>
               </>
               : <>
                  <h3>Information Collection:</h3>
                  <p>At Melicore, we have designed our website for customers to gather information about our company and the products we offer.<br />
                  We do not collect any personal data from visitors during their interaction with our website.<br />
                  Your visit to our site is entirely anonymous, and no information is gathered from you.</p>
      
                  <h3>Cookies:</h3>
                  <p>Our website may use cookies for essential functionality, such as managing your session and ensuring proper site operation.<br />
                  Additionally, we utilize localStorage, a web storage mechanism provided by modern web browsers, to store non-personal user preferences set by users themselves.
                  This choice is stored locally on your device and is not transmitted to our servers.
                  Please note that our use of localStorage for this purpose is intended solely to enhance your browsing experience and to remember your preferences.
                  It does not involve collecting any personal data or sharing information with third parties.<br />
                  By using our website, you consent to the use of these necessary cookies and the utilization of localStorage for enhancing your user experience.</p>
      
                  <h3>Third-Party Links:</h3>
                  <p>Our website may contain links to third-party websites for your convenience.
                  Please note that we have no control over the privacy practices of these external websites.<br />
                  We recommend that you review the privacy policies of any third-party sites you visit.</p>
      
                  <h3>Contact Information:</h3>
                  <p>If you have any questions or concerns about the privacy aspects of our website, please feel free to reach out to us:<br />
                  Email: info.melicore@gmail.com<br />
                  Phone: +36 30 123 4567</p>
      
                  <p>Our team is here to provide the information you need to make your browsing experience safe and enjoyable.</p>
      
                  <h3>Updates to the Privacy Policy:</h3>
                  <p>While our website currently does not involve data collection, we may update this Privacy Policy in the future as our website evolves.<br />
                  Any changes to this policy will be communicated on this page.
                  We encourage you to check back periodically to stay informed about how we handle data privacy.</p>
      
                  <h3>Thank you for choosing Melicore!</h3>
                  <p>We are dedicated to maintaining your privacy as you explore our website.</p>
               </>
            }
         </section>
      </>
   )
}
