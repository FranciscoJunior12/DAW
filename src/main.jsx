import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import { ThemeProvider } from './context/EstadoGlobal.jsx';

import Login from './components/Login.jsx';
import Admin from './pages/Admin.jsx';
import User from './pages/User.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ThemeProvider>
      <BrowserRouter>

        <Routes>
          <Route element={<App />}>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/services' element={<Services />} />
            <Route path='/user' element={<User />} />
            <Route path='/admin' element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>


    </ThemeProvider>
  </React.StrictMode>,
)
