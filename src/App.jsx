
import React from 'react';

import Home from './pages/Home';
import { Route,
         RouterProvider, 
         createBrowserRouter, 
         createRoutesFromElements }
         from 'react-router-dom';
import Shop from './pages/Shop';
import ProductDeatils from './pages/ProductDeatils';





const App = () => {
  
  const router = createBrowserRouter(
      createRoutesFromElements(
      <Route > 
        
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/product/:id" element={<ProductDeatils />} />
      </Route>
      )
  );
    
  return <RouterProvider router={router} />;
    
};

export default App;
 