import React, { useState, useEffect } from 'react';

const AutoTypeText = () => {
  const [text, setText] = useState('');
  const originalText = 'Explore the world';

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      setText(originalText.slice(0, index));
      index++;

      if (index > originalText.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setText(''); // Reset text after a delay (adjust as needed)
          index = 0;
          setTimeout(() => {
            clearInterval(typingInterval);
          }, 2000); // Change the delay after typing the full text
        }, 2000); // Change the delay after typing the full text
      }
    }, 100);

    return () => clearInterval(typingInterval); // Cleanup on component unmount
  }, [originalText]);

  return (
    <div className='text-richblack-700 font-extrabold text-7xl absolute uppercase top-[19%] left-20'>
      <p>{text}</p>
    </div>
  );
};

export default AutoTypeText;
