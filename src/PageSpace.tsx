import React from 'react'
import MainNav from './components/Nav'
import { Home } from '@mui/icons-material'
import Galery from './pages/Galery'
import Offer from './pages/Offer'
import Contact from './pages/Contact'

const PageSpace = () => {
  return (
    <div className='page-space'>
        <MainNav />
        <Home />
        <Galery />
        <Offer />
        <Contact />
    </div> 
  )
}

export default PageSpace