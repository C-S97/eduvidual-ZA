import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Register from './components/pages/register/Register';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/register" component={Register} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
