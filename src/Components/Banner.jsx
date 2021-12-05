import React from 'react';
import logo from '../Assets/logo.png'
import '../Styles/banner.css'

function Banner() {
    const title = "Jungle house"
    return (
        <div className = 'lmj-banner'>        
          <img src={logo} alt="house jungle logo" className='lmj-log' />
          <h1 className = 'lmj-title'>{title}</h1>
        </div>
    );
}

export default Banner