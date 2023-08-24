import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import AddHome from './AddHome';

function AppRoutes() {

  return (
    <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/add-home' element={<AddHome/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;