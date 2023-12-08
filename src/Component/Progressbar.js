import React, { useEffect, useState } from 'react';
import './style1.css';

function Progressbar() {
  const [percent, setPercent] = useState(0);
  const [loadingState, setLoadingState] = useState('Loading...');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPercent((prev) => {
        const newPercent = prev + 1;
        if (newPercent >= 100) {
          clearInterval(intervalId);
          setPercent(100);
          setLoadingState('Complete!');
          return 100;
        }
        return newPercent;
      });
    }, 200);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className='main'>
      <h3>Progress Bar</h3>
      <div className='progressbar-container'>
        <div className='progressbar' style={{ width: `${percent}%` }}>
        </div>
        <div
          className='percent-text'
          style={{ color: percent > 49 ? 'white' : 'black' }}
        >
          {percent}%
        </div>
      </div>
      <h3>{loadingState}</h3>
    </div>
  );
}

export default Progressbar;
