import React, { useReducer } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoslice'
function Todos() {
    const todos =  useSelector((state) =>state.todoslice.todos)
    const username = useSelector((state) =>state.todoslice.username)
    const val = useSelector((state) => state.todoslice.obj.innerObj.key1)

    const projects = useSelector((state) => state.projectSlice.projects)
    const dispatch = useDispatch()
  return (
    <div>
       username : {username} <br></br>
       value : {val}
      <ul>
        {
            todos.map((todo) =>(
                <li key={todo.id} >{todo.text}  <button onClick={()=> dispatch(removeTodo(todo.id)) }>delete</button></li>
            ))
        }
      </ul>
      <br></br><br></br>

      <ul>
        list of Projects:
        {
            projects.map((project) => (
                <li key={project.id}>project Name: {project.name} ,  manager: {project.manager}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default Todos
