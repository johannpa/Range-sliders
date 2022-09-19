import React, { useState } from 'react';


function RangeSliders() {
    // the width of the box
    const [width, setWidth] = useState(100);

    // the height of the box
    const [height, setHeight] = useState(100);

    // This function is called when the first range slider changes
    const changeWidth = (e) => {
        setWidth(e.target.value);
    };

    // This function is called when the second range slider changes
    const changeHeight = (e) => {
        setHeight(e.target.value);
    };
    
    

  return (
    <div className='container'>
        <h2>Welcome to my Site</h2>

        {/* A range slider with default appearance */}
        <h4>Box Width: {width}px</h4>
        <input 
            type="range"
            onChange={changeWidth}
            min={1}
            max={800}
            step={1}
            value={width}
        />  

        {/* Custom range slider */}
        <h4>Box Height: {height}px</h4>
        <input 
            type="range" 
            onChange={changeHeight}
            min={1}
            max={400}
            step={1}
            value={height}
            className='custom-slider'
        />

        {/* Render the box */}
        <div
            style={{ width: `${width}px`, height: `${height}px` }}
            className='box'
        ></div>
    </div>
  );
}

export default RangeSliders;
