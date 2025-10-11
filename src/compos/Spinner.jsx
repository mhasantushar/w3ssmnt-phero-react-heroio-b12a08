import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center mx-auto w-11/12 min-h-dvh">
      <p className='text-amber-900 text-8xl animate-spin'>🛞</p>
    </div>
  );
};

export default Spinner;