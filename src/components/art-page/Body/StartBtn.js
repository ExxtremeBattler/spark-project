import React from 'react';

function StartBtn({onClick}) {


  function handleClick() {
    onClick(true);
  }

  return (
    <button onClick={handleClick}>Click to start</button>
  );
};

export default StartBtn;