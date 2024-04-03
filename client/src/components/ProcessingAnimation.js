import React from 'react';
import gearWheel from '../assets/setting-gear.png';

export default function ProcessingAnimation() {
  return (
    <>
      <div className='relative w-[10rem] h-[10rem]'>
        <img src={gearWheel} alt="" id='animate-spin-reverse' className='w-16 h-16 absolute top-4 left-7' />
        <img src={gearWheel} alt="" id='animate-spin' className='w-11 h-11 absolute top-[74px] left-7' />
        <img src={gearWheel} alt="" id='animate-spin-reverse' className='w-16 h-16 absolute top-[72px] right-7' />
      </div>
      <p className='text-white'>Processing Video...</p>
    </>
  )
}
