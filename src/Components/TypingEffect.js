import React, { useState, useEffect } from 'react';

const TypingEffect = (props) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= props.text.length) {
        setDisplayText(props.text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, props.speed);

    return () => clearInterval(interval);
  }, [props.text, props.speed]);

  return (
    <div>
      <p>{displayText}</p>
    </div>
  );
};

export default TypingEffect;