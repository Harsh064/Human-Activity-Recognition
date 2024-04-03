import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Alert from './Alert';
import uploadIcon from '../assets/upload.png';
import urlIcon from '../assets/url.png';
import videocamera from '../assets/videocamera.png';

export default function Home({ video, setVideo, alert }) {
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
            <video src={video} autoPlay loop controls className='w-full max-h-[90vh]'></video>
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
          <Alert alert={alert} />

          <Outlet />
        </div>
      </div>
      </div>
  )
}
