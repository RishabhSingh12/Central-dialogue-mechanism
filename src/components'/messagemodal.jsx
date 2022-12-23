import React from 'react';
import "./messagemodal.css"

const Messagemodal = ({ showmessage }) => {
  const { type, message, show } = showmessage;
  return (
    <>
      {
        <div className="dialogue-container" >
          <div className={'fetch-' + type} style={(show) ? { transform: `translateX(1rem)` } : { transform: "translateX(-15rem)" }}>{message}</div>
        </div>
      }
    </>
  );
}

export default Messagemodal;