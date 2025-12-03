import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Web Pública
import Home from './pages/home';

// Web Admin
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
        {/* 1. Cuando ingreses a localhost:3000 -> HelioAndes */}
        <Route path='/' element={<Home />} />

        {/* 2. Cuando ingreses a localhost:3000/admin -> Dashboard (Servicios) */}
        <Route path='/admin' element={<AdminServicios />} />

        {/* 3. Ruta específica para listar servicios en admin */}
        <Route path='/admin/servicios' element={<AdminServicios />} />

        {/* 4. Ruta para crear (necesaria para el formulario que hicimos antes) */}
        <Route path='/admin/servicios/crear' element={<AdminCrearServicio />} />

        <Route path='/admin/planes' element={<AdminPlanes />} />

        <Route path='/admin/planes/detalle/:id' element={<AdminDetallePlan />} />
      </Routes>
    </Router>    
  );
}

export default App;