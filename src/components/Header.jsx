import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'


const Header = () => {
    const {theme,toggleTheme} = useContext(ThemeContext); 
    const style = {
      color : theme==='dark' ? 'white':''
    }
  return (
    <header>
        <Link to='/'><h3>Where in the World?</h3></Link>
        <div className="theme" onClick={toggleTheme}>
        <ion-icon name={theme==='dark' ? 'moon' : 'moon-outline'} style={style}></ion-icon>
            <p>Dark Mode</p>
        </div>

    </header>
  )
}

export default Header