import React, { useRef, useEffect, useState } from 'react';
import p5 from 'p5';
import './P5Sketch.css';

const P5Sketch = ({ sketch, resettable = false }) => {
  const canvasRef = useRef(null);
  const sketchRef = useRef(null);
  const [sketchInstance, setSketchInstance] = useState(null);

  useEffect(() => {
    const s = (p) => sketch(p, sketchRef); 
    const instance = new p5(s, canvasRef.current);
    setSketchInstance(instance);
    return () => instance.remove();
  }, [sketch]);

  const handleReset = () => {
    if (sketchRef.current?.reset) {
      sketchRef.current.reset();
    }
  };

  return (
    <div className="p5-sketch-card-front">
      <div className="p5-sketch-container" ref={canvasRef}></div>
      {resettable && (
        <button className="sketch-reset-button" onClick={handleReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default P5Sketch;
