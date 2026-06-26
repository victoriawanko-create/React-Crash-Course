import './App.css'
import Todo from './components/Todo.jsx'
import Title from './components/Title.jsx'
import Modal from './components/Modal.jsx'
import Counter from './components/Counter.jsx'
import React, { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false)

function onTodoDelete() {
  setShowModal(true)
  console.log('onTodoDelete')
}

  return (
      <div>
         <Title />
         <div>
          <input type="text" onChange={(event) => {
            console.log(event.target.value)
          }}/>
          <button onClick={() => setShowModal(true)}>Add todo</button>
         </div>
          <div className ="todo__wrapper">
            <Todo  onToDoDelete={onTodoDelete} title="Finish Frontend Simplified" />
            <Todo  onToDoDelete={onTodoDelete} title="Finished Interview Section" />
            <Todo  onToDoDelete={onTodoDelete} title="Land a $100k Job" />
         </div> 
    {showModal && <Modal title="Confirm Delete?"  />}
      </div>
  );
}

export default App
