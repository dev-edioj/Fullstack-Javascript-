import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlanetsScreen from './screens/planets';
import PlanetScreen from './screens/planet';

 const Rotas = () => (
     <BrowserRouter>
     <Routes>
             <Route exact path='/' element={<PlanetsScreen />} />
             <Route exact path='/planet/:id' element={<PlanetScreen/>} />
     </Routes>
        
     </BrowserRouter>
 )

 export default Rotas;
