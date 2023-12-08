import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setMilliseconds((prevMilliseconds) => {
          if (prevMilliseconds === 99) {
            setSeconds((prevSeconds) => {
              if (prevSeconds === 59) {
                setMinutes((prevMinutes) => prevMinutes + 1);
                return 0;
              } else {
                return prevSeconds + 1;
              }
            });
            return 0;
          } else {
            return prevMilliseconds + 1;
          }
        });
      }, 1); 
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const handleStartStop = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setMinutes(0);
    setSeconds(0);
    setMilliseconds(0);
  };

  return (
    <div style={{
      textAlign: 'center',
      marginTop: '50vh',
      transform: 'translateY(-50%)',
      boxShadow: '0 0 10px ',
      padding: '20px',
      borderRadius: '8px',
      width:'40%',
      height:'30%',
      marginLeft:'25%'
    }}>
      <h2 style={{color:'white',backgroundColor:'blue',marginTop:'0'}} width='100%'>React Stopwatch</h2>
      <h2>
        <span>{String(minutes).padStart(2, '0')}:</span>
        <span>{String(seconds).padStart(2, '0')}:</span>
        <span>{String(milliseconds).padStart(2, '0')}</span>
      </h2>
      <button 
        onClick={handleStartStop} 
        style={{
          background: 'transparent', // Transparent background
          border: '2px solid blue', // Blue border
          color: 'blue', // Blue text color
          width: '70px', // Set width to 70px
          borderRadius: '4px', // Add border radius
          margin: '5px', // Add some margin for better spacing
        }}
      >
        {isActive ? 'Stop' : 'Start'}
      </button>
      <button 
        onClick={handleReset} 
        style={{
          background: 'transparent', // Transparent background
          border: '2px solid blue', // Blue border
          color: 'blue', // Blue text color
          width: '70px', // Set width to 70px
          borderRadius: '4px', // Add border radius
          margin: '5px', // Add some margin for better spacing
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Stopwatch;
