import React from 'react'
import Home from './Pages/Home/Home'
import Nav from './Components/Nav/Nav'
import SocialBanner from './Components/SocialBanner/SocialBanner'
import About from './Pages/About/About'
import Contacts from './Pages/Contacts/Contacts'

const App = () => {
  return (
    <div className='App p-5'>
      <Nav />
      <Home />
      <SocialBanner />
      <About />
      <Contacts />
    </div>
  )
}

export default App