import React, { useState } from 'react';

export default function UploadviaURL({ setVideo }) {
  const [url, setUrl] = useState("");

  async function uploadURL() {
    const tempURL = url;
    const tempArray = tempURL.split('/');
    setVideo(`https://youtube.com/embed/${tempArray[tempArray.length - 1]}?autoplay=1&mute=1&controls=0&loop=1`);
    
    const formdata = new FormData();
    formdata.append("url", url);

    const response = await fetch("http://127.0.0.1:5000/upload/url", {
      method: 'POST',
      headers: {
        Accept: "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: formdata
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className='origin-center translate-y-40 grid grid-rows-2 place-items-center'>
      <p className='m-5 text-sm text-gray-400 text-center'>
        Paste below the URL of your Youtube video and hit <br />
        the 'Submit URL' button to upload video
      </p>
      <input onChange={(e) => setUrl(e.target.value)} type="url" name="url" id="" placeholder="http://example.com" className='w-[75%] px-2 py-1 mx-[12.5%] rounded border-[1px] border-gray-400 focus:outline-none' />
      <span onClick={() => uploadURL()} className='px-4 py-2 rounded bg-blue-500 text-white font-semibold active:bg-blue-400'>Submit URL</span>
    </div>
  )
}
