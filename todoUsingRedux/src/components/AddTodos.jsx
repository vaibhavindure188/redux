import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoslice';
function AddTodos() {
    const [text, setText] = useState()
    const dispatch = useDispatch();
    const handleChnage = (e) =>{
        setText(e.target.value);
    }
    
    const handleAdd = ()=>{
        dispatch(addTodo(text))
        setText('')
    }
  return (
    <div>
      <h1>welcome to todo</h1>
      <input type='text' value={text}  onChange={handleChnage}></input>
      <button onClick={handleAdd}>add</button>
    </div>
  )
}

export default AddTodos
