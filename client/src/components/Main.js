import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Alert from './Alert';
import uploadIcon from '../assets/upload.png';
import urlIcon from '../assets/url.png';
import videocamera from '../assets/videocamera.png';
import ProcessingAnimation from './ProcessingAnimation';

export default function Main({ video, setVideo, alert, processingStatus }) {
  return (
    <div>
      <div className='p-4 border-b-[1px] border-b-gray-300 flex justify-center text-2xl text-slate-600'>Human Activity Recognition</div>
      <div className='h-[90vh] grid grid-cols-2'>
        <div className='grid place-items-center bg-slate-800'>
          {
            video === "" ? 
            <div className='grid place-items-center'>
              { 
                processingStatus ?
                <ProcessingAnimation /> : 
                <div className='grid place-items-center text-white'>
                  <img src={videocamera} alt="" className='w-16' />
                  Output of uploaded video
                </div>
              }
            </div> 
            :
            <video src={video} autoPlay loop controls className='w-full max-h-[90vh]'></video>
          }
        </div>
        <div>
          <div className='grid grid-cols-2 p-2 border-b-[1px] border-gray-300'>
            <NavLink to={"viaVideo"} onClick={() => setVideo("")} className={({isActive}) => `pb-2 grid place-items-center rounded ${ isActive ? 'bg-gray-200' : 'hover:bg-gray-100' }`}>
              <img src={uploadIcon} alt="" className='w-14' />
              <p className='text-lg text-slate-400 font-semibold'>Upload a video file</p>
            </NavLink>
            <NavLink to={"viaURL"} onClick={() => setVideo("")} className={({isActive}) => `pb-2 grid place-items-center rounded ${ isActive ? 'bg-gray-200' : 'hover:bg-gray-100' }`}>
              <img src={urlIcon} alt="" className='w-14' />
              <p className='text-lg text-slate-400 font-semibold'>Upload via URL</p>
            </NavLink>
          </div>
          <Alert alert={alert} />

          <Outlet />
        </div>
      </div>
      </div>
  )
}
