

import './App.css'
import './index.css'


import { Outlet } from 'react-router-dom'
import Header from './layout/Header'


function App() {

  return (
    <div className="App">
      <Header />

      <Outlet />
     
    </div>

  )

}

export default App;
