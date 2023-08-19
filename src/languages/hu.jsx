import Button from "../components/Button"

export default {
   header: {
      home: "főoldal",
      honeys: "mézeink",
      blog: "blog",
      aboutUs: "cégünkről",
      search: "keresés 🔎"
   },

   footer: {
      col1: {
         header:
            <h3>
               Alapvető Linkek<span className="dot-color">.</span>
            </h3>,
         links: {
            1: "Mézkollekciónk",
            2: "Blogunk",
            3: "A Melicore-ról"
         }
      },
      col2: {
         header:
            <h3>
               Kövesd a Melicore-t<span className="dot-color">.</span>
            </h3>
      },
      col3: {
         header:
            <h3>
               Elérhetőségeink
               <span className="dot-color">.</span>
            </h3>,
         links: {
            1:
               <>
                  <b>Email címünk:</b><br />info.melicore@gmail.com
               </>,
            2:
               <>
                  <b>Telefonszámunk:</b><br />+36 30 123 4567
               </>,
            3: 
               <>
                  <b>Címünk:</b><br />
                  EU, Magyarország<br />
                  4100 Berettyóújfalu,<br />
                  Kispista utca 5.
               </>
         }
      },
      col4: {
         header:
            <h3>
               Irányelveink<span className="dot-color">.</span>
            </h3>,
         links: {
            1: "Adatvédelmi irányelvek",
            2: "Szolgáltatási feltételek"
         }
      },
   },

   landingPage: {
      heroSection: {
         header:
            <h1 className="hero-left--header">
               Fedezd fel a Természet<br /> Kiváló Mézeit
            </h1>,
         desc:
            <p className="hero-left--desc">
               Prémium méztermékek szeretettel Magyarországról.
            </p>,
         primaryCta:
            <Button
               href="/honeys"
               link={true}
               primary={true}
               text="termékek felfedezése"
            />,
         secondaryCta:
            <Button
               href="#about-us"
               link={false}
               primary={false}
               text="küldetésünk"
            />,
         coordinate: 100,
         showScroll: true
      },
      honeysSection: {
         header:
            <h2 className="honeys-landing--left--header">
               Melicore Kedvencei<span className="dot-color">.</span>
            </h2>,
         desc:
            <p className="honeys-landing--left--desc">
               Fedezze fel a Melicore által<br />Kiválasztott Mézeket.
            </p>,
         primaryCta:
            <Button
               primary={true}
               link={true}
               href="/honeys"
               text="mézkollekciónk"
            />,
         carousel: {
            1: {
               name: "Méz #1",
               desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
               href: "/honeys/1"
            },
            2: {
               name: "Méz #2",
               desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
               href: "/honeys/2"
            },
            3: {
               name: "Méz #3",
               desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
               href: "/honeys/3"
            }
         }
      },
      aboutUsSection: {
         header:
            <h2 className="about-us--header">
               Rólunk<span className="dot-color">.</span>
            </h2>,
         cards: {
            1: {
               header: "Az Édesség Formálása",
               desc:
                  <p>
                     A <span className="dot-color">Melicore-nál</span> történetünk szenvedélyről, kapcsolatról és a méz természetes csodáinak mély elismerésről szól.
                  </p>
            },
            2: {
               header: "A Természet Öröme",
               desc:
                  <p>
                     A <span className="dot-color">,mézeink</span> a méhek és a virágok varázsának tanúbizonysága, ezzel megőrizve a természet egyedi ízeit.
                  </p>
            },
            3: {
               header: "Kiválóság Megalkotása",
               desc:
                  <p>
                     Az <span className="dot-color">erkölcsi gyakorlatok</span> és a méhészet szakértelme vezérel minket abban, hogy megfogjuk vásárlóinkat.
                  </p>
            },
            4: {
               header: "A Kezdeteink",
               desc:
                  <p>
                     Ami ház körüli méhészkedésként indult, az kibontakozott a <span className="dot-color">Melicore-ban</span> - egy márka, amely arra törekszik, hogy biztosítsa a legtisztább, legkifinomultabb mézfajtákat.
                  </p>
            }
         }
      }
   },

   honeysPage: {
      heroSection: {
         header:
            <h1 className="hero-left--header">
               Fedezze Fel a Melicore<br />Legfinomabb Mézeit<span className="dot-color">.</span>
            </h1>,
         desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
         coordinate: 100,
         showScroll: true
      },
      honeysSection: {
         honeyIDInfo: {
            1: "info",
            2: "tápanyagtáblázat",
            primaryCtaText: "vissza a mézekhez"
         },
         1: {
            header: "Méz #1",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
            info: {
               1:
                  <>
                  <div style={{display: "flex", gap: ".5rem"}}>
                     <h4 style={{marginBottom: ".25rem"}}>
                        <b>Ízvilág</b>
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
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, soluta. Suscipit sequi nulla cupiditate?
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, soluta. Suscipit sequi nulla cupiditate?
                     Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>

                  <div style={{
                     display: "flex",
                     gap: "1rem"
                  }}>
                     <h4 style={{marginBottom: ".25rem"}}>
                        <b>Egészségügyi előnyök</b>
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
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, soluta. Suscipit sequi nulla cupiditate?
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, soluta. Suscipit sequi nulla cupiditate?
                     Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                  </>,
               2: "BLOG 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, soluta. Suscipit sequi nulla cupiditate?"
            },
            href: "/honeys/1",
            imgSrc: "../../assets/Honeys/Honeys/honey1.png"
         },
         2: {
            header: "Méz #2",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
            info: {
               1:
                  <>
                  <div style={{display: "flex", gap: ".5rem"}}>
                     <h4 style={{marginBottom: ".25rem"}}>
                        <b>Ízvilág</b>
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
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, soluta. Suscipit sequi nulla cupiditate?
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, soluta. Suscipit sequi nulla cupiditate?
                     Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>

                  <div style={{
                     display: "flex",
                     gap: "1rem"
                  }}>
                     <h4 style={{marginBottom: ".25rem"}}>
                        <b>Egészségügyi előnyök</b>
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
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, soluta. Suscipit sequi nulla cupiditate?
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, soluta. Suscipit sequi nulla cupiditate?
                     Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                  </>,
               2: "BLOG 2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, soluta. Suscipit sequi nulla cupiditate?"
            },
            href: "/honeys/2",
            imgSrc: "../../assets/Honeys/Honeys/honey2.png"
         },
         3: {
            header: "Méz #3",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
            info: {
               1:
                  <>
                     <div style={{display: "flex", gap: ".5rem"}}>
                        <h4 style={{marginBottom: ".25rem"}}>
                           <b>Ízvilág</b>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, soluta. Suscipit sequi nulla cupiditate?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, soluta. Suscipit sequi nulla cupiditate?
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                     </p>

                     <div style={{
                        display: "flex",
                        gap: "1rem"
                     }}>
                        <h4 style={{marginBottom: ".25rem"}}>
                           <b>Egészségügyi előnyök</b>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, soluta. Suscipit sequi nulla cupiditate?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, soluta. Suscipit sequi nulla cupiditate?
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                     </p>
                  </>,
               2: "BLOG 3: Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, soluta. Suscipit sequi nulla cupiditate?"
            },
            href: "/honeys/3",
            imgSrc: "../../assets/Honeys/Honeys/honey3.png"
         },
         4: {
            header: "Méz #4",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
            info: {
               1:
                  <>
                     <div style={{display: "flex", gap: ".5rem"}}>
                        <h4 style={{marginBottom: ".25rem"}}>
                           <b>Ízvilág</b>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, soluta. Suscipit sequi nulla cupiditate?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, soluta. Suscipit sequi nulla cupiditate?
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                     </p>

                     <div style={{
                        display: "flex",
                        gap: "1rem"
                     }}>
                        <h4 style={{marginBottom: ".25rem"}}>
                           <b>Egészségügyi előnyök</b>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, soluta. Suscipit sequi nulla cupiditate?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, soluta. Suscipit sequi nulla cupiditate?
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                     </p>
                  </>,
               2: "BLOG 4: Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, soluta. Suscipit sequi nulla cupiditate?"
            },
            href: "/honeys/4",
            imgSrc: "../../assets/Honeys/Honeys/honey4.png"
         },
         5: {
            header: "Méz #5",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
            info: {
               1:
                  <>
                     <div style={{display: "flex", gap: ".5rem"}}>
                        <h4 style={{marginBottom: ".25rem"}}>
                           <b>Ízvilág</b>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, soluta. Suscipit sequi nulla cupiditate?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, soluta. Suscipit sequi nulla cupiditate?
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                     </p>

                     <div style={{
                        display: "flex",
                        gap: "1rem"
                     }}>
                        <h4 style={{marginBottom: ".25rem"}}>
                           <b>Egészségügyi előnyök</b>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, soluta. Suscipit sequi nulla cupiditate?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, soluta. Suscipit sequi nulla cupiditate?
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                     </p>
                  </>,
               2: "BLOG 5: Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, soluta. Suscipit sequi nulla cupiditate?"
            },
            href: "/honeys/5",
            imgSrc: "../../assets/Honeys/Honeys/honey5.png"
         },
         6: {
            header: "Méz #6",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
            info: {
               1: 
                  <>
               <div style={{display: "flex", gap: ".5rem"}}>
                  <h4 style={{marginBottom: ".25rem"}}>
                     <b>Ízvilág</b>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, soluta. Suscipit sequi nulla cupiditate?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, soluta. Suscipit sequi nulla cupiditate?
                  Lorem ipsum dolor sit amet consectetur adipisicing.
               </p>

               <div style={{
                  display: "flex",
                  gap: "1rem"
               }}>
                  <h4 style={{marginBottom: ".25rem"}}>
                     <b>Egészségügyi előnyök</b>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, soluta. Suscipit sequi nulla cupiditate?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, soluta. Suscipit sequi nulla cupiditate?
                  Lorem ipsum dolor sit amet consectetur adipisicing.
               </p>
                  </>,
               2: "BLOG 6: Lorem ipsum dolor sit amet consectetur adipisiing elit. Harum, soluta. Suscipit sequi nulla cupiditate?"
            },
            href: "/honeys/6",
            imgSrc: "../../assets/Honeys/Honeys/honey6.png"
         },
      }
   },

   notFoundPage: {
      header:
         <h1 className="hero-left--header">
            <span className="dot-color">Hoppá!</span> Az Oldal<br />Nem Található.
         </h1>,
      desc:
         <p className="hero-left--desc">
            Úgy tűnik, a méz, amit keresel, elrepült!
         </p>,
      primaryCta:
         <Button
            href="/"
            link={true}
            primary={true}
            text="vissza a főoldalra"
         />,
      coordinate: 130,
      showScroll: false
   },

   privacyPolicy: {
      header:
         <>
            <h1 style={{marginBottom: "1rem"}}>Adatvédelmi Irányelvek</h1>

            <p className="hero-left--desc" style={{marginBottom: "2rem"}}>Kötelezettséget vállalunk az Ön információinak védelme és biztonsága iránt, amint felfedezze weboldalunkat vállalatunkról és termékeinkről további információkért.<br /><br />
            Ez a Adatvédelmi Irányelv ismerteti, hogy hogyan kezeljük az adatokat, és megmagyarázza megközelítésünket az Ön adatvédelmének védelmében.</p>
         </>,
      primaryCta: 
         <Button
            href="/"
            onClick={() => window.scrollTo(0, 0)}
            link={true}
            primary={true}
            text="főoldal"
         />,
      content:
         <>
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
   },

   termsOfService: null
}