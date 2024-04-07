import React, { useState } from 'react';
import { popupAlert } from '../utils/popupAlert';
import { socket } from '../utils/socket';

export default function UploadviaURL({ activity, setVideo, setAlert, setProcessingStatus }) {
  const [url, setUrl] = useState("");

  function uploadURL() {
    if (url === "") {
      popupAlert({ status: 'normal', message: 'Enter youtube video URL' }, setAlert);
      return ;
    };

    const regex = /^((?:https?:)?\/\/)?(((?:www|m)\.)?(youtube\.com(?:(\/shorts\/|\/watch\/|\/v\/)[\w-]{11}|\/watch\?v=[\w-]{11}((&list=LL)?(&index=[\d]+)?|(&index=[\d]+)?(&list=LL)?)|(\/embed\/[\w-]{11}(\?si=[\w-]{16})?)))|youtu\.be\/[\w-]{11}(\?si=[\w-]{16})?)$/i;
    console.log(regex.test(url))
    if (!regex.test(url)) {
      popupAlert({ status: 'danger', message: 'Invalid youtube URL' }, setAlert);
      return ;
    }

    setProcessingStatus(true);
    socket.emit('viaURL', url, activity)
  }
  
  return (
    <div className='origin-center translate-y-20 grid grid-rows-2 place-items-center'>
      <p className='m-3 text-sm text-gray-500 text-center'>
        Paste below the URL of your Youtube video and hit <br />
        the 'Submit URL' button to upload video
      </p>
      <input onChange={(e) => setUrl(e.target.value)} autoComplete='false' type="url" name="url" id="" placeholder="http://youtube.com/watch?v=<video-id>" className='w-[75%] px-2 py-1 mx-[12.5%] rounded border-[1px] border-gray-400 focus:outline-none' />
      <button onClick={() => uploadURL()} className='px-4 py-2 rounded bg-slate-700 text-white font-semibold hover:bg-slate-600 active:bg-slate-800'>Submit URL</button>
    </div>
  )
}
