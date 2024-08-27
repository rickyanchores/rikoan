import React from 'react'
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"

import Home from './Pages/Home/Home'
import Nav from './Components/Nav/Nav'
import SocialBanner from './Components/SocialBanner/SocialBanner'
import About from './Pages/About/About'
import Contacts from './Pages/Contacts/Contacts'
import Gallery from './Pages/Gallery/Gallery'
import Projects from './Pages/Projects/Projects'
import Skills from './Components/Skills/Skills'

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Footer from './Pages/Footer/Footer'
import TestForm from './Pages/TestForm/TestForm'
import LocationBanner from './Components/LocationBanner/LocationBanner'

// ..
AOS.init();

const App = () => {
  return (
    <div className='App p-5 md:w-5/6 md:m-auto'>
      <Router>
      <Nav />
        <Routes>
        <Route Component={Home} />
        </Routes>
        <Home />
        <SocialBanner />
        <About />
        <LocationBanner />
        <Skills />
        <Projects />
        <Gallery />
        <Contacts />
        <TestForm />
        <Footer />
      </Router>
    </div>
  )
}

export default App;