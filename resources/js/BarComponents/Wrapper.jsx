import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

const Wrapper = ({children}) => {
  return (
    <div>
        <NavBar/>
        {children}
        <Footer/>
      
    </div>
  )
}

export default Wrapper
