import { Route, Routes } from 'react-router-dom';
import TweetsPage from 'pages/TweetsPage/TweetsPage';
import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';



// import { lazy } from 'react';
// const HomePage = lazy(() => import("./pages/HomePage"));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage/>} />
          <Route path="tweets" element={<TweetsPage />} />
        </Route>
      </Routes>
    </div>
  );
};
