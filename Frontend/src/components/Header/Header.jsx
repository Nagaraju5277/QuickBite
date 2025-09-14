import React from 'react'
import './Header.css'
const Header = () => {
    const scrollToMenu = () => {
    const menuSection = document.getElementById('explore-menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return (
        <div className='header'>
            <div className="header-content">
                <h2>Order your favourite food here</h2>
                <p>
                    Welcome to QuickBite, where every dish is crafted with passion and served with care.
                    Enjoy a cozy dining experience filled with flavors that bring people together.
                </p>
                <button onClick={scrollToMenu}>View Menu</button>
            </div>
        </div>
    )
}

export default Header