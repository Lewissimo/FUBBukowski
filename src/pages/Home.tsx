import React from 'react'
import Introducing from './Home/Introducing';
import './Home/Home.scss'
import FirstTitleSection from './Home/FirstTitleSection';
const Home = () => {
    const text = 'Z pasją tworzymy przestrzenie, w których chcesz żyć. Profesjonalizm, doświadczenie i kreatywność to nasze narzędzia';
  return (
    <div className='about'>
        <div className='FirstTitleSectionBox'>
          <FirstTitleSection />
        </div>
        <div className='IntroducingBox' id='about'>
            <Introducing/>
        </div>
    </div>
  )
}

export default Home