import React, { useState } from 'react';
import SingleColor from './SingleColor';
import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [colorCount, setColorCount] = useState(10); // State for the number of colors
  const [list, setList] = useState(new Values('#f15025').all(colorCount));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(colorCount); // Use the dynamic colorCount value
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className='container'>
        <h3>PalettePro</h3>
        <form onSubmit={handleSubmit} className='form-container'>
          <div className='input-container'>
            <input
              type='text'
              value={color}
              onChange={(e) => setColor(e.target.value)}
              placeholder='#f15025'
              className={`${error ? 'error' : null}`}
              />
          </div>
          <div className='input-container'>

            <input
              type='number'
              value={colorCount}
              onChange={(e) => setColorCount(parseInt(e.target.value))}
              min='1'
              max='50'
            />
          </div>
          <button className='btn'>Enter</button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => (
          <SingleColor key={index} {...color} index={index} hex={color.hex} />
        ))}
      </section>
    </>
  );
}

export default App;
