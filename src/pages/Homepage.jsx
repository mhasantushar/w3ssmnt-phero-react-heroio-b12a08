import React from 'react';
import Hero from '../compos/Hero';
import Statband from '../compos/Statband';
import TrendWrap from '../compos/TrendWrap';

const Homepage = () => {
  return (
    <div className='bg-[#d2d2d240]'>
      <Hero/>
      <Statband/>
      <TrendWrap/>
      
    </div>
  );
};

export default Homepage;