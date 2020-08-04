import React from "react"
import { Helmet } from "react-helmet"
import NavBar from "../../components/NavBar"
import ContactMe from "../../components/ContactMe"
import AboutMe from "../../components/AboutMe"
import Projects from "../../components/Projects"

import "bootstrap/dist/css/bootstrap.min.css"
import "../style.css"

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Thaddeus Codes</title>
      </Helmet>
      <div id="header">
        <div id="header-text">
          <h1>Let's get started!</h1>
        </div>
      </div>
      <NavBar />
      <AboutMe />
      <Projects />
      <ContactMe />
    </div>
  )
}
