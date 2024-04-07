import React, { useState, useEffect} from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { socket } from '../utils/socket';
import { popupAlert } from '../utils/popupAlert';
import Alert from './Alert';
import ProcessingAnimation from './ProcessingAnimation';
import uploadIcon from '../assets/upload.png';
import urlIcon from '../assets/url.png';
import videocamera from '../assets/videocamera.png';
import gymIcon from '../assets/gym-icon.png';
import musicalIcon from '../assets/musical-icon.png';
import olympicIcon from '../assets/olympic-icon.png';

export default function Main({ video, setVideo, alert, setAlert, processingStatus, setProcessingStatus, activity, setActivity }) {
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }
    
    function onDisconnect() {
      setIsConnected(false);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('message', (data) => {
      popupAlert({ status: 'warning', message: data.message }, setAlert);
      setProcessingStatus(false);
    })
    socket.on('video_frames', (buffer) => setVideo(buffer));
    socket.on('end_process', () => {
      setProcessingStatus(false);
      setVideo("");
    })

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  // eslint-disable-next-line
  }, []);

  return (
    <div className='bg-slate-50 w-screen h-screen'>
      <div className='relative p-4 border-b border-b-gray-400 flex justify-center text-2xl text-slate-600'>
        <NavLink to={'/'} className='grid place-content-center absolute left-3 px-3 py-[6px] text-sm bg-gray-200 hover:bg-gradient-to-r rounded from-violet-200 via-pink-200 to-yellow-200'>&larr; Home</NavLink>
        Human Activity Recognition
        <span className={`absolute top-7 right-4 flex h-3 w-3`}>
          { isConnected ? <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75`}></span> : null }
          <span className={`inline-flex rounded-full h-3 w-3 ${ isConnected ? 'bg-green-500' : 'bg-red-500' }`}></span>
        </span>
      </div>
      
      <div className='flex justify-center my-14'>
        <div className='grid place-items-center w-[45%] h-[65vh] rounded-l-sm border border-slate-500 bg-gradient-to-r from-slate-500 via-slate-400 to-slate-500'>
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
            <img src={`data:image/jpeg;base64,${video}`} alt="" className='max-w-full h-[65vh] object-contain' />
          }
        </div>
        <div className='relative w-[45%] h-[65vh] rounded-r-sm border border-slate-400 bg-slate-100'>
          <div className='grid grid-cols-2 p-2 border-b-[1px] border-gray-400'>
            <NavLink to={"viaVideo"} onClick={() => setProcessingStatus(false)} className={({isActive}) => `pb-2 grid place-items-center rounded ${ isActive ? 'bg-gray-200' : 'hover:bg-gray-100' }`}>
              <img src={uploadIcon} alt="" className='w-14' />
              <p className='text-lg text-slate-400 font-semibold'>Upload a video file</p>
            </NavLink>
            <NavLink to={"viaURL"} onClick={() => setProcessingStatus(false)} className={({isActive}) => `pb-2 grid place-items-center rounded ${ isActive ? 'bg-gray-200' : 'hover:bg-gray-100' }`}>
              <img src={urlIcon} alt="" className='w-14' />
              <p className='text-lg text-slate-400 font-semibold'>Upload via URL</p>
            </NavLink>
          </div>
          <Alert alert={alert} />

          <Outlet />
        </div>
      </div>

      <div className='flex justify-center'>
        <input onClick={(e) => setActivity(e.target.value)} type="radio" name="activity" id="gym" value={0} className='w-0 h-0 hidden' />
        <label htmlFor="gym" className={`flex items-center mx-2 rounded text-white ${activity === '0' ? 'bg-slate-500' : 'bg-slate-400'}`}>
          <img src={gymIcon} alt="" className='w-10' />
          <p className='pr-2 py-2'>Gym</p>
        </label>
        <input onClick={(e) => setActivity(e.target.value)} type="radio" name="activity" id="musical" value={1} className='w-0 h-0 hidden' />
        <label htmlFor="musical" className={`flex items-center mx-2 rounded text-white ${activity === '1' ? 'bg-slate-500' : 'bg-slate-400'}`}>
          <img src={musicalIcon} alt="" className='w-10' />
          <p className='pr-2 py-2'>Musical</p>
        </label>
        <input onClick={(e) => setActivity(e.target.value)} type="radio" name="activity" id="olympic" value={2} className='w-0 h-0 hidden' />
        <label  htmlFor="olympic" className={`flex items-center mx-2 rounded text-white ${activity === '2' ? 'bg-slate-500' : 'bg-slate-400'}`}>
          <img src={olympicIcon} alt="" className='w-10' />
          <p className='pr-2 py-2'>Olympic</p>
        </label>
      </div>
    </div>
  )
}
