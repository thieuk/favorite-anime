import './App.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loading from "./components/Loading";

const Home = lazy(() => import('./pages/Home'));
const AnimeInfo = lazy(() => import('./pages/AnimeInfo'));
const Feedback = lazy(() => import('./pages/Feedback'));

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/info" element={<AnimeInfo />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
