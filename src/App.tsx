import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CustomCursor from './components/CustomCursor';
import Landing from './pages/Landing';
// Import your other components here

function App() {
  return (
    <div className="App">
      <CustomCursor />
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
