import { useRoutes } from 'react-router-dom'
import { Event } from '../pages/Event/Event'
import { Home } from '../pages/Home/Home'

export function Routes() {
  return (
    useRoutes([
      { path: '/', element: <Home /> },
      { path: '/event', element: <Event /> },
      { path: '/event/lesson/:params', element: <Event /> }
    ])
  )
} 