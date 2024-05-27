import React from 'react';
import { socket } from '../utils/socket';

export default function UploadviaFile({ activity, setVideo, setAlert, setProcessingStatus }) {
  function uploadVideo(e) {
    if (e.target.files[0] === undefined) return ;
    setProcessingStatus(true);

    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const buffer = e.target.result;
      const fileMetaData = JSON.stringify({
        lastModified: file.lastModified,
        name: file.name,
        size: file.size,
        type: file.type
      })

      const enc = new TextEncoder();
      const buf1 = enc.encode('!');
      const buf2 = enc.encode(activity);
      const buf3 = enc.encode(',');
      const buf4 = enc.encode(fileMetaData);
      const buf5 = enc.encode('\r\n\r\n');
      const buf6 = new Uint8Array(buffer);

      const bufferData = new Uint8Array(buf1.byteLength + buf2.byteLength + buf3.byteLength + buf4.byteLength + buf5.byteLength + buf6.byteLength);
      bufferData.set(buf1, 0);
      bufferData.set(buf2, buf1.byteLength);
      bufferData.set(buf3, buf1.byteLength + buf2.byteLength);
      bufferData.set(buf4, buf1.byteLength + buf2.byteLength + buf3.byteLength);
      bufferData.set(buf5, buf1.byteLength + buf2.byteLength + buf3.byteLength + buf4.byteLength);
      bufferData.set(buf6, buf1.byteLength + buf2.byteLength + buf3.byteLength + buf4.byteLength + buf5.byteLength);
      
      console.log(bufferData.byteLength)

      socket.emit('viaVideo', bufferData);
    }

    reader.readAsArrayBuffer(file);
  }
  
  return (
    <div className='h-[80%]'>
      <div className='origin-center translate-y-20 grid grid-rows-2 place-items-center'>
        <p className='m-5 text-sm text-gray-500 text-center'>
          Please upload one of the following video file types: <br />
          MP4, MPV, MPG, MTS MOV, WMV, AVI, AVCHD, FLV, F4V, SWF, MKV
        </p>
        <label onChange={(e) => uploadVideo(e)}>
          <span className='px-4 py-2 rounded bg-slate-700 text-white font-semibold hover:bg-slate-600 active:bg-slate-800'>Select Video</span>
          <input type="file" name="video" accept='video/*' className='hidden w-0 h-0' />
        </label>            
      </div>
    </div>
  )
}
