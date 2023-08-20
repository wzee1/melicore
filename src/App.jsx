import React, { useState, useEffect } from "react"
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom"

// Page imports
import Layout from "./components/Layout"
import LandingPage from "./pages/LandingPage/LandingPage"
import Honeys from "./pages/Honeys/Honeys"
import HoneyID from "./pages/Honeys/HoneyID"
import NotFound from "./pages/NotFound/NotFound"
import ErrorElement from "./components/ErrorElement"
import LoadingScreen from "./components/LoadingScreen"
import PrivacyPolicy from "./pages/Policies/PrivacyPolicy"
import Blog from "./pages/Blog/Blog"


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />} errorElement={<ErrorElement />}>
    <Route index element={<LandingPage />} />
    <Route path="honeys" element={<Honeys />} />
    <Route path="honeys/:id" element={<HoneyID />} />
    <Route path="blog" element={<Blog />} />

    <Route path="privacy-policy" element={<PrivacyPolicy />} />
    <Route path="terms-of-service" element={<PrivacyPolicy />} />

    <Route path="*" element={<NotFound />} />
  </Route>
))

export default function App() {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1700)
  }, [])

  useEffect(() => {
    const content = document.getElementById("content")
    content.style.opacity = loading ? 0 : 1
    document.body.style.overflow = loading ? "hidden" : "auto"
  }, [loading])
  
  // Scroll Reveal for sections
  window.addEventListener("scroll", () => {
    var reveals = document.querySelectorAll(".reveal")  

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight
        var revealTop = reveals[i].getBoundingClientRect().top
        var revealPoint = 150

        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add("active")
        }
    }
  })

  return (
    <>
      {loading ? <LoadingScreen /> : null}
      <div id="content" style={{ opacity: 0, transition: "opacity 500ms" }}>
        <RouterProvider router={router} />
      </div>
    </>
  )
}