import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Upload from "./components/Upload";
import UploadviaFile from './components/UploadviaFile';
import UploadviaURL from './components/UploadviaURL';

function App() {
  const [video, setVideo] = useState("");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Upload video={video} setVideo={setVideo} />}>
            <Route path='viaVideo' element={<UploadviaFile setVideo={setVideo} />} />
            <Route path='viaURL' element={<UploadviaURL setVideo={setVideo} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
