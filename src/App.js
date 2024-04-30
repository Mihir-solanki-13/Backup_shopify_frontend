// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Detail from './components/Detail';
import List from './components/List';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/list/:objectType" element={<List/>} />
        <Route path="/detail/:objectType/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
