import React from 'react';
import Hero from '../compos/Hero';
import Statband from '../compos/Statband';
import TrendApps from '../compos/TrendApps';

const Homepage = () => {
  return (
    <div className='bg-[#d2d2d240]'>
      <Hero/>
      <Statband/>
      <TrendApps/>
    </div>
  );
};

export default Homepage;