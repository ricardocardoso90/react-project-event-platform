import { useRoutes } from 'react-router-dom';

import { Home } from '../pages/Home/Home';
import { Event } from '../pages/Event/Event';

export function Routes() {
  return (
    useRoutes([
      { path: '/', element: <Home /> },
      { path: '/event', element: <Event /> },
      { path: '/event/lesson/:params', element: <Event /> }
    ])
  );
}