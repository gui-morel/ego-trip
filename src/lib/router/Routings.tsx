import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Page404 from '@/lib/pages/404';

import { routes } from './routes';

const Routings = () => {
  return (
    <Suspense>
      <Routes>
        {routes.map((routeProps) => (
          <Route {...routeProps} key={routeProps.path as string} />
        ))}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Suspense>
  );
};

export default Routings;
