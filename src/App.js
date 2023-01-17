import React, { useState } from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js'

function App() {
  const [colors, setColors] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      const newColor = new Values(colors).all(10);
      setList(newColor);
    } catch (e) {
      setError(true);
    }
  }
  const inputChangeHandler = (e) => {
    setColors(e.target.value);
  }

  return <>
    <section>
      <form onSubmit={submitHandler}>
        <input type="text" value={colors} onChange={inputChangeHandler} placeholder="#f15025" />
        <button type="submit">Submit</button>
      </form>
      <section>
        {list.map((item, index) => {
          return <SingleColor {...item} key={index} index={index} />
        })}
      </section>
    </section>
  </>
}

export default App
