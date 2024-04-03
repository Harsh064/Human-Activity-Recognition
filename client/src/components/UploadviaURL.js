import React, { useState } from 'react';

export default function UploadviaURL({ setVideo, setAlert }) {
  const [url, setUrl] = useState("");

  async function uploadURL() {
    const formdata = new FormData();
    formdata.append("url", url);

    const response = await fetch("http://127.0.0.1:5000/upload/url", {
      method: 'POST',
      headers: {
        Accept: "video/*, application/json",
        "Access-Control-Allow-Credentials": true,
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
    <div className='origin-center translate-y-40 grid grid-rows-2 place-items-center'>
      <p className='m-5 text-sm text-gray-400 text-center'>
        Paste below the URL of your Youtube video and hit <br />
        the 'Submit URL' button to upload video
      </p>
      <input onChange={(e) => setUrl(e.target.value)} autoComplete='false' type="url" name="url" id="" placeholder="http://example.com" className='w-[75%] px-2 py-1 mx-[12.5%] rounded border-[1px] border-gray-400 focus:outline-none' />
      <button onClick={() => uploadURL()} className='px-4 py-2 rounded bg-blue-500 text-white font-semibold active:bg-blue-400'>Submit URL</button>
    </div>
  )
}
