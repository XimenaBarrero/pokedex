import React from 'react'
import "./styles/Header.css"

const Header = () => {
  return (
    <header className='header'>
        <img className='header-img' src="/images/pokedex-img.png" alt="" />
        <div className='header-black'></div>
        <div className='header-circle'>
            <div className='header-circle-int'></div>
        </div>
    </header>
  )
}

export default Header