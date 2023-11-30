import React from 'react';
import type { PathRouteProps } from 'react-router-dom';

import Project from '@/lib/pages/projet/components/Project';

const Home = React.lazy(() => import('@/lib/pages/home'));

export const routes: Array<PathRouteProps> = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/project',
    element: <Project />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [];
