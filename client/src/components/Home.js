import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import uploadIcon from '../img/upload.png';
import urlIcon from '../img/url.png';
import videocamera from '../img/videocamera.png';

export default function Home({ video, setVideo }) {
  // https://youtu.be/5oH9Nr3bKfw?si=wfJkS8DspqUleUlT
  // https://youtube.com/embed/5oH9Nr3bKfw?si=wfJkS8DspqUleUlT?autoplay=1&mute=1&controls=0&loop=1

  return (
    
    <div>
      <div className='p-4 border-b-[1px] border-b-gray-300 flex justify-center text-2xl text-slate-600'>Human Activity Recognition</div>
      <div className='h-[90vh] grid grid-cols-2'>
        <div className='grid place-items-center bg-slate-800'>
        {
            video === "" ? 
            <div className='grid place-items-center text-white'>
              <img src={videocamera} alt="" className='w-16' />
              Output of uploaded video
            </div> 
            :
            <video src={video} loop controls className='h-full'></video>
          }
        </div>
        <div>
          <div className='grid grid-cols-2 p-2 border-b-[1px] border-gray-300'>
            <Link to={"viaVideo"} onClick={() => setVideo("")} className='pb-2 grid place-items-center rounded hover:bg-gray-100'>
              <img src={uploadIcon} alt="" className='w-14' />
              <p className='text-lg text-slate-400 font-semibold'>Upload a video file</p>
            </Link>
            <Link to={"viaURL"} onClick={() => setVideo("")} className='pb-2 grid place-items-center rounded hover:bg-gray-100'>
              <img src={urlIcon} alt="" className='w-14' />
              <p className='text-lg text-slate-400 font-semibold'>Upload via URL</p>
            </Link>
          </div>

          <Outlet />
        </div>
      </div>
      </div>
  )
}
