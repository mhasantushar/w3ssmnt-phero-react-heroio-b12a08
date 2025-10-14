import React from 'react';
import logo from '../assets/logo.png'

const Spinner = () => {
  return (
    <div className="flex justify-center mx-auto mt-24">
      {/* <p className='text-amber-900 text-8xl animate-spin'>🛞</p> */}
      <figure className='w-12 h-12'>
        <img src={logo} className='text-amber-900 text-8xl animate-spin' />
      </figure>
    </div>
  );
};

export default Spinner;