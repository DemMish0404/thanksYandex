import React from 'react'
import "./header.css"

function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
         <div className='header__logo'>
            <span className='first'>Кино</span>
            <span className="second">Онлайн</span>
         </div>
         <div className='header__buttons'>
            <button className="header__btn1">войти</button>
            <button className="header__btn2">регистрация</button>
         </div>
      </div>
    </header>
  )
}

export default Header