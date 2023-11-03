import { useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <div className="dark:bg-[#141414] dark:text-white bg-slate-100">
        <Hero />
      </div>
    </div>
  );
}

export default App;
