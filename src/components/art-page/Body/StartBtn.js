import React from 'react';

function StartBtn({onClick}) {


  function handleClick() {
    onClick(true);
  }

  return (
    <button onClick={handleClick} className="startBtn">START</button>
  );
};

export default StartBtn;