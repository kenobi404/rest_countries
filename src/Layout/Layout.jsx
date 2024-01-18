import React, { useContext , useState} from 'react'
import Header from '../components/Header'
import {Outlet} from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'

const Layout = () => {
    const {theme} = useContext(ThemeContext)
   

  return (
    <div className={`parent ${theme}`}>
      
    <Header />
    
    <Outlet />
    
   
    </div>
  )
}

export default Layout