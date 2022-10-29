import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AnimeInfo from './pages/AnimeInfo';
import StudioInfo from './pages/StudioInfo';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/info" element={<AnimeInfo />} />
          <Route path="/studio" element={<StudioInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
