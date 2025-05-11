import { ROUTES } from '@/configs/routes'
import { RouterProvider, createBrowserRouter } from 'react-router'
import { Layout } from './layout'

const router = createBrowserRouter([
  {
    path: ROUTES.root,
    element: <Layout />,
    children: [
      {
        index: true,
        lazy: () => import('@/pages/home')
      },
      {
        path: ROUTES.tutorial,
        lazy: () => import('@/pages/tutorial')
      }
    ]
  }
])

export const RouterDOMProvider = () => {
  return <RouterProvider router={router} />
}
