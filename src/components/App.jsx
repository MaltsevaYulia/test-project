import HomePage from '../pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import TweetsPage from 'pages/TweetsPage';
// import { lazy } from 'react';
// const HomePage = lazy(() => import("./pages/HomePage"));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="tweets" element={<TweetsPage />} />
      </Routes>
    </div>
  );
};
