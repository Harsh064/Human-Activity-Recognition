import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import UploadviaFile from './components/UploadviaFile';
import UploadviaURL from './components/UploadviaURL';

function App() {
  const [video, setVideo] = useState("");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home video={video} setVideo={setVideo} />}>
            <Route path='viaVideo' element={<UploadviaFile setVideo={setVideo} />} />
            <Route path='viaURL' element={<UploadviaURL setVideo={setVideo} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
