import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='header'>
        <h1 className="app-name">لوتوس</h1>
                  <i className="burger">
                      <img 
                      src={'/img/shopping.png'} 
                      alt="basket" />
                  </i>
    </div>
  )
}

export default Header