import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
 
// Main Pages start here
import ContactPage from './routes/ContactPage.jsx'
import VehiclePage from './routes/VehiclePage.jsx'

// car info starts here
import First_page from './routes/FirstPage.jsx'
import Sec_page from './routes/SecPage.jsx'
import Third_page from './routes/Third_page.jsx'
import Forth_page from './routes/Forth_page.jsx'
import Fifth_page from './routes/Fifth_page.jsx'
import Sixth_page from './routes/Sixth_page.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/vehicle' element={<VehiclePage/>} />

      <Route path="/a_class" element={<First_page/>}/>
      <Route path="/sec_car" element={<Sec_page/>}/>
      <Route path="/third_car" element={<Third_page/>}/>
      <Route path="/forth_car" element={<Forth_page/>}/>
      <Route path="/fifth_car" element={<Fifth_page/>}/>
      <Route path="/sixth_car" element={<Sixth_page/>}/>
  
    </Routes>
  </BrowserRouter>,
)
