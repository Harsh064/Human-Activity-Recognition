import React from 'react';

export default function UploadviaFile({ setVideo }) {
  async function uploadVideo(e) {
    const formdata = new FormData();
    formdata.append("video", e.target.files[0]);
    
    const response = await fetch("http://127.0.0.1:5000/upload/video", {
      method: 'POST',
      headers: {
        Accept: "video/*",
      },
      body: formdata
    });
    const data = await response.blob();

    const reader = new FileReader();
    reader.readAsDataURL(data);
    reader.onload = (e) => {
      console.log(e.target.result);
      setVideo(e.target.result);
    }
    console.log(data);
  }
  
  return (
    <div className='h-[80%]'>
      <div className='origin-center translate-y-40 grid grid-rows-2 place-items-center'>
        <p className='m-5 text-sm text-gray-400 text-center'>
          Please upload one of the following video file types: <br />
          MP4, MPV, MPG, MTS MOV, WMV, AVI, AVCHD, FLV, F4V, SWF, MKV
        </p>
        <label onChange={(e) => uploadVideo(e)}>
          <span className='px-4 py-2 rounded bg-blue-500 text-white font-semibold active:bg-blue-400'>Select Video</span>
          <input type="file" name="video" accept='video/*' className='hidden w-0 h-0' />
        </label>            
      </div>
    </div>
  )
}
