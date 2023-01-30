import React, { useState , useRef} from 'react';
import './App.css';
import Card from './Card';
function App() {
  const [list, setlist] = useState([])
  let inputref = useRef()
  function add() {
    (inputref.current.value != '') ? setlist([...list, inputref.current.value]) : alert('ya lbger , Write a task first then click the button <3')
    inputref.current.value = ''
  }
  return (
    <>
      <section>
        <div className='Search-part'>
          <h1> My To Do List : </h1>
          <input type="text" id="todoinput" ref={inputref} placeholder='What should i do ....?' />
          <button onClick={add}>Add</button>
        </div>
        <div className='display-part'>
          {
            list.map((e) => {
              return <Card task={e} />
            })
          }
        </div>
      </section>
    </>
  );
}
export default App;
