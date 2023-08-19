import Button from "../components/Button"

export default {
   header: {
      home: "home",
      honeys: "honeys",
      blog: "blog",
      aboutUs: "about us",
      search: "search 🔎"
   },

   footer: {
      col1: {
         header:
            <h3>
               Essential Links<span className="dot-color">.</span>
            </h3>,
         links: {
            1: "Our Honey Collection",
            2: "Our Blog",
            3: "About Melicore"
         }
      },
      col2: {
         header:
            <h3>
               Follow Us On Socials<span className="dot-color">.</span>
            </h3>
      },
      col3: {
         header:
            <h3>
               Contact Info<span className="dot-color">.</span>
            </h3>,
         links: {
            1:
               <>
                  <b>Email address:</b><br />info.melicore@gmail.com
               </>,
            2:
               <>
                  <b>Phone number:</b><br />+36 30 123 4567
               </>,
            3: 
               <>
                  <b>Address:</b><br />
                  EU, Hungary<br />
                  4100 Berettyóújfalu,<br />
                  Kispista street 5.
               </>
         }
      },
      col4: {
         header:
            <h3>
               Policies<span className="dot-color">.</span>
            </h3>,
         links: {
            1: "Privacy Policy",
            2: "Terms of Service"
         }
      },
   },

   landingPage: {
      heroSection: {
         header:
            <h1 className="hero-left--header">
               Experience Nature's<br /> Exquisite Honeys
            </h1>,
         desc:
            <p className="hero-left--desc">
               Premium Honey Products Delivered with Love From Hungary.
            </p>,
         primaryCta:
            <Button
               href="/honeys"
               link={true}
               primary={true}
               text="explore products"
            />,
         secondaryCta:
            <Button
               href="#about-us"
               link={false}
               primary={false}
               text="our mission"
            />,
         coordinate: 100,
         showScroll: true
      },
      honeysSection: {
         header:
            <h2 className="honeys-landing--left--header">
               Melicore's Finest<span className="dot-color">.</span>
            </h2>,
         desc:
            <p className="honeys-landing--left--desc">
               Discover the Following Honeys<br /> Selected by Melicore.
            </p>,
         primaryCta:
            <Button
               primary={true}
               link={true}
               href="/honeys"
               text="browse all"
            />,
         carousel: {
            1: {
               name: "Honey No. 1",
               desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
               href: "/honeys/1"
            },
            2: {
               name: "Honey No. 2",
               desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
               href: "/honeys/2"
            },
            3: {
               name: "Honey No. 3",
               desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
               href: "/honeys/3"
            }
         }
      },
      aboutUsSection: {
         header:
            <h2 className="about-us--header">
               About Us<span className="dot-color">.</span>
            </h2>,
         cards: {
            1: {
               header: "Shaping Sweetness",
               desc:
                  <p>
                     At <span className="dot-color">Melicore</span>, our story is one of passion, connection, and a deep appreciation for honey's natural wonders.
                  </p>
            },
            2: {
               header: "Nature's Delight",
               desc:
                  <p>
                     Our <span className="dot-color">honeys</span> are a testament to the magic of bees and blooms, preserving nature's unique flavors in every jar.
                  </p>
            },
            3: {
               header: "Crafting Excellence",
               desc:
                  <p>
                     Guided by <span className="dot-color">ethical practices</span> and beekeeping expertise, we curate a range of honeys that capture the essence of blossoms and the dedication of artisans.
                  </p>
            },
            4: {
               header: "Our Beginnings",
               desc:
                  <p>
                     What started as a backyard beekeeping venture blossomed into <span className="dot-color">Melicore</span> - a brand devoted to sharing the purest, most exquisite honey varieties.
                  </p>
            }
         }
      }
   },

   honeysPage: {
      heroSection: {
         header:
            <h1 className="hero-left--header">
               Explore Melicore's<br />Finest Honeys<span className="dot-color">.</span>
            </h1>,
         desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
         coordinate: 100,
         showScroll: true
      },
      honeysSection: {
         honeyIDInfo: {
            1: "info",
            2: "nutrition facts",
            primaryCtaText: "go back to honeys"
         },
         1: {
            header: "Honey No. 1",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
            info: {
               1:
                  <>
                     <div style={{display: "flex", gap: ".5rem"}}>
                        <h4 style={{marginBottom: ".25rem"}}>
                           <b>Flavor Profile</b>
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
                           <b>Health Benefits</b>
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
            header: "Honey No. 2",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
            info: {
               1:
                  <>
                     <div style={{display: "flex", gap: ".5rem"}}>
                        <h4 style={{marginBottom: ".25rem"}}>
                           <b>Flavor Profile</b>
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
                           <b>Health Benefits</b>
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
            header: "Honey No. 3",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
            info: {
               1:
                  <>
                     <div style={{display: "flex", gap: ".5rem"}}>
                        <h4 style={{marginBottom: ".25rem"}}>
                           <b>Flavor Profile</b>
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
                           <b>Health Benefits</b>
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
            header: "Honey No. 4",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
            info: {
               1:
                  <>
                     <div style={{display: "flex", gap: ".5rem"}}>
                        <h4 style={{marginBottom: ".25rem"}}>
                           <b>Flavor Profile</b>
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
                           <b>Health Benefits</b>
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
            header: "Honey No. 5",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
            info: {
               1:
                  <>
                     <div style={{display: "flex", gap: ".5rem"}}>
                        <h4 style={{marginBottom: ".25rem"}}>
                           <b>Flavor Profile</b>
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
                           <b>Health Benefits</b>
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
            header: "Honey No. 6",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
            info: {
               1:
                  <>
                     <div style={{display: "flex", gap: ".5rem"}}>
                        <h4 style={{marginBottom: ".25rem"}}>
                           <b>Flavor Profile</b>
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
                           <b>Health Benefits</b>
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
               2: "BLOG 6: Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, soluta. Suscipit sequi nulla cupiditate?"
            },
            href: "/honeys/6",
            imgSrc: "../../assets/Honeys/Honeys/honey6.png"
         },
      }
   },
   
   notFoundPage: {
      header:
         <h1 className="hero-left--header">
            <span className="dot-color">Oops!</span> The Page<br />is Not Found.
         </h1>,
      desc:
         <p className="hero-left--desc">
            The honey you seek seems to have flown away!
         </p>,
      primaryCta:
         <Button
            href="/"
            link={true}
            primary={true}
            text="go to home"
         />,
      coordinate: 130,
      showScroll: false
   },

   privacyPolicy: {
      header:
         <>
            <h1 style={{marginBottom: "1rem"}}>Melicore's Privacy Policy</h1>

            <p className="hero-left--desc" style={{marginBottom: "2rem"}}>We are committed to ensuring the privacy and security of your information as you explore our website to learn more about our company and products.<br /><br />
            This Privacy Policy outlines how we handle data and explains our approach to safeguarding your privacy.</p>
         </>,
      primaryCta: 
         <Button
            href="/"
            onClick={() => window.scrollTo(0, 0)}
            link={true}
            primary={true}
            text="go back to home"
         />,
      content:
         <>
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
   },
   
   termsOfService: null
}