import { useState } from 'react';
import Messagemodal from './components\'/messagemodal';
import './App.css'

function App() {

  const [showmessage, setShowMessage] = useState({
    type: 'wait',
    message: 'loading the first page',
    show: false
  });


  const successHandler = (value) => {
    setShowMessage({
      ...showmessage, type: value, message: "Loaded page successfully", show: !showmessage.show
    });
  }
  const errorHandler = (value) => {
    setShowMessage({
      type: value,
      message: 'Error loading the page',
      show: !showmessage.show,
    });
  }
  const waitHandler = (value) => {
    setShowMessage({
      type: value,
      message: 'loading the first page',
      show: !showmessage.show,
    });
  }

  return (
    <>
      <div className='message'><Messagemodal showmessage={showmessage} /></div>
      <div className="btn-container">
        <button className='btn success' onClick={() => successHandler("success")}>Success</button>
        <button className='btn error' onClick={() => errorHandler("error")}>Error</button>
        <button className='btn wait' onClick={() => waitHandler("wait")}>Wait</button>
      </div>
    </>
  )
}

export default App
