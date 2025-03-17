import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import Register from './pages/Register';
import PhotosDemo from './pages/PhotosDemo';
import VideosDemo from './pages/VideosDemo';
import NotFound from './pages/NotFound';
import { AuthProvider } from './context/AuthContext';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { PAYPAL_CLIENT_ID } from './config/paypal-config';

function App() {
  return (
    <PayPalScriptProvider options={{ 'client-id': PAYPAL_CLIENT_ID }}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/photos-demo" element={<PhotosDemo />} />
            <Route path="/videos-demo" element={<VideosDemo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </PayPalScriptProvider>
  );
}

export default App; 