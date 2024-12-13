import React from 'react';
import Login from './Components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './Components/Signin';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Products from './Components/Products';
import Cart from './Components/Cart';
import Support from './Components/Support';
import You from './Components/You';
import Dismob from './Display/Dismob';
import Dislap from './Display/Dislap';
import Disear from './Display/Disear';
import Detailmob from './Details/Detailmob';
import Detaillap from './Details/Detaillap';
import Detailear from './Details/Detailear';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} /> {/* Login route */}
          <Route path='/signin' element={<Signin />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/home' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/support' element={<Support />} />
          <Route path='/you' element={<You />} />
          <Route path='/dismob' element={<Dismob />} />
          <Route path='/dislap' element={<Dislap />} />
          <Route path='/disear' element={<Disear />} />
          <Route path='/detailmob/:id' element={<Detailmob />} />
          <Route path='/detaillap/:id' element={<Detaillap />} />
          <Route path='/detailear/:id' element={<Detailear />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
