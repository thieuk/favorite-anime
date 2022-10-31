import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home'));
const AnimeInfo = React.lazy(() => import('./pages/AnimeInfo'));

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/info" element={<AnimeInfo />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
