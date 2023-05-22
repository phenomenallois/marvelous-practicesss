import React from 'react';
import HeroSection from './Components/HeroSection';
import CreateButton from './Components/Button';
import LoginSection from './Components/Form';
// import './App.css'

function App() {
return (
  <div className='container'>
    <HeroSection />
    <div className='login-section'>
    <CreateButton />
    <LoginSection />
    </div>
  </div>
);


}
export default App
