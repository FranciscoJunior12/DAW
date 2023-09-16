import { useState } from 'react'

import './App.css'
import HelloWorld from './components/HelloWorld'
import Contador from './components/Contador'

import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {

  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>

  )

}

export default App;
