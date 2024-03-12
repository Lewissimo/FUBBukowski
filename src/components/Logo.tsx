import React from 'react'
import logo from '../assets/logo.png'
const Logo = () => {
  return (
    <div className='LogoBox'>
        <div className='Logo'>
            <img width={70} src={logo} alt='logoError'/>
        </div>
        <div className='descriptionLogoBox'>
            <div className='name'>Marian Bukowski</div>
            <div className='description'>Firma usługowo-budowlana</div>
        </div>
    </div>
  )
}

export default Logo