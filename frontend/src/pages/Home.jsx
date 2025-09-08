import React from 'react'
import MainBanner from '../components/MainBanner';
import Catogaries from '../components/Catogaries';
import BestSeller from '../components/BestSeller';
import BottomBanner from '../components/BottomBanner';
import NewsLetter from '../components/NewsLetter';

const Home = () => {
  return (
    <div className='mt-10'>
        <MainBanner />
        <Catogaries />
        <BestSeller />
        <BottomBanner />
        <NewsLetter />
    </div>
  )
}

export default Home