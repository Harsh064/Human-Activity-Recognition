import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import UploadviaFile from './components/UploadviaFile';
import UploadviaURL from './components/UploadviaURL';

function App() {
  const [video, setVideo] = useState("");
  const [alert, setAlert] = useState({ visibility: false });
  const [processingStatus, setProcessingStatus] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home video={video} setVideo={setVideo} alert={alert} processingStatus={processingStatus} />}>
            <Route path='/viaVideo' element={<UploadviaFile setVideo={setVideo} setAlert={setAlert} setProcessingStatus={setProcessingStatus} />} />
            <Route path='/viaURL' element={<UploadviaURL setVideo={setVideo} setAlert={setAlert} setProcessingStatus={setProcessingStatus} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
