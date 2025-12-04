import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';


import AdminServicios from './pages/AdminServicios';
import AdminCrearServicio from './pages/AdminDetalleServicio';
import AdminDetalleServicio from './pages/AdminDetalleServicio';

import AdminPlanes from './pages/AdminPlanes';

import AdminDetallePlan from './pages/AdminDetallePlan';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/admin/servicios/detalle/:id' element={<AdminDetalleServicio />} />
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<AdminServicios />} />
        <Route path='/admin/servicios' element={<AdminServicios />} />
        <Route path='/admin/servicios/crear' element={<AdminCrearServicio />} />
        <Route path='/admin/planes' element={<AdminPlanes />} />
        <Route path='/admin/planes/detalle/:id' element={<AdminDetallePlan />} />
      </Routes>
    </Router>    
  );
}

export default App;