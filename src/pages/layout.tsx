import { Outlet } from 'react-router'

export const Layout = () => {
  return (
    <div>
      Header
      <Outlet />
    </div>
  )
}
