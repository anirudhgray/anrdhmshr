import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CustomCursor from './components/CustomCursor';
import Landing from './pages/Landing';
import { useEffect, useState } from 'react';
// Import your other components here

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('theme');
    if (storedDarkMode !== null) {
      setDarkMode(storedDarkMode === 'dark');
    } else {
      // Prefer the color scheme (light/dark) from the system
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('theme', !darkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  return (
    <div className="App">
      <CustomCursor />
      <div className="fixed top-0 right-0 m-4">
        {/* Dark mode toggle */}
        <label className="switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={toggleDarkMode}
            tabIndex={0}
          />
          <span className="slider round pointer-cursor-element"></span>
        </label>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* Add more Route components for each of your routes */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
