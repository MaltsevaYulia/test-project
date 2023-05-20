import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { lazy } from 'react';
import { Helmet } from 'react-helmet';
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const TweetsPage=lazy(()=>import("../pages/TweetsPage/TweetsPage"))

export const App = () => {
  return (
    <div>
      <Helmet>
        <title>Follow us</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="tweets" element={<TweetsPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
};
