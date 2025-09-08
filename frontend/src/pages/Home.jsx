import React from 'react'
import MainBanner from '../components/MainBanner';
import Catogaries from '../components/Catogaries';
import BestSeller from '../components/BestSeller';
import BottomBanner from '../components/BottomBanner';


const Home = () => {
  return (
    <div className='mt-10'>
        <MainBanner />
        <Catogaries />
        <BestSeller />
        <BottomBanner />
    </div>
  )
}

export default Home