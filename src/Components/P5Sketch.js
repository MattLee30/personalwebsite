import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const P5Sketch = ({ sketch }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const sketchInstance = new p5(sketch, canvasRef.current);
    return () => sketchInstance.remove(); 
  }, [sketch]);

  return <div ref={canvasRef}></div>;
};

export default P5Sketch;
