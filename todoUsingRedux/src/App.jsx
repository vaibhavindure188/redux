import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodos from './components/AddTodos.jsx'
import Todos from './components/Todos.jsx'
import { store } from './app/store.js'
import {Provider} from 'react-redux'

function App() {

  return (
    <Provider store={store}>
      <AddTodos />
      <Todos />
    </Provider>
  )
}

export default App
