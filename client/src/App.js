import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Main from "./components/Main";
import UploadviaFile from './components/UploadviaFile';
import UploadviaURL from './components/UploadviaURL';

function App() {
  const [video, setVideo] = useState("");
  const [alert, setAlert] = useState({ visibility: false });
  const [processingStatus, setProcessingStatus] = useState(false);
  const [activity, setActivity] = useState('0');

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<Main video={video} setVideo={setVideo} setAlert={setAlert} alert={alert} processingStatus={processingStatus} setProcessingStatus={setProcessingStatus} activity={activity} setActivity={setActivity} />}>
            <Route path='/viaVideo' element={<UploadviaFile setVideo={setVideo} setAlert={setAlert} setProcessingStatus={setProcessingStatus} activity={activity} />} />
            <Route path='/viaURL' element={<UploadviaURL setVideo={setVideo} setAlert={setAlert} setProcessingStatus={setProcessingStatus} activity={activity} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
