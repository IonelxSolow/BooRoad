import React from 'react'
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Details from './pages/Details';
import Contact from './pages/Contact';
import DefaultLayout from './layouts/DefaultLayout'
import { GlobalProvider } from './contexts/GlobalContext';
import About from './pages/About';
import ScrollToTop from "./components/ScrollToTop";
import Dashboard from './pages/Dashboard';



function App() {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <ScrollToTop />

          <Routes>

            <Route element={<DefaultLayout />} >

              <Route path='/' element={<Homepage />} />
              <Route path='/details/:id' element={<Details />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />
              <Route path='/dashboard' element={<Dashboard />} />

            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
