import React from 'react'
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Details from './pages/Details';
import Contact from './pages/Contact';
import DefaultLayout from './layouts/DefaultLayout'
import { GlobalProvider } from './contexts/GlobalContext';
import About from './pages/About';


function App() {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>

            <Route element={<DefaultLayout />} >

              <Route path='/' element={<Homepage />} />
              <Route path='/details/:id' element={<Details />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />

            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
