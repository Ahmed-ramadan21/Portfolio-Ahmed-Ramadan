import React from 'react'
import './header.css'
import Buttons from './Buttons'
import Me from'../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h2>AHMED RAMADAN</h2>
            <h5 className="text-light">Fullstack Developer</h5>
            <Buttons />
            <HeaderSocials/>

            <div className="me">
                <img src={Me} alt="" />
            </div>
            <a href="#contact" className="scroll__down">Scroll Down</a>
        </div>
    </header>
  )
}

export default Header