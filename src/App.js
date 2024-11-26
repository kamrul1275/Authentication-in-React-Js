import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Dashboard from './pages/Dashboard';

import PrivateRoute from './routes/PrivateRoute';
import Home from './pages/Home';

const App = () => (
    <Router>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="/" element={<Home></Home>} />
        </Routes>
    </Router>
);

export default App;
