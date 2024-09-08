import React, { useState } from 'react';

const CounterPage = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  const handleBackButtonClick = () => {
    window.location.href = '/'; // Navigates to the index.html page
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={handleBackButtonClick} style={{ fontSize: '24px' }}>
        &#x2190; Back
      </button>
      <h1>Press Counter</h1>
      <p>You've pressed the button {count} times</p>
      <button onClick={handleButtonClick}>Press Me</button>
    </div>
  );
};

export default CounterPage;
