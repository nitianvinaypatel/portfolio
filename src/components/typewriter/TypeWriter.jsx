import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypeWriter = () => {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>Software</i> Developer', 'Android Developer','Web Developer','Full Stack Developer'],
      typeSpeed: 10,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} />
    </div>
  );
}

export default TypeWriter;
