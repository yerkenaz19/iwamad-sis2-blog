import { Navigate, Outlet } from 'react-router'

type ProtectedLayoutProps = {
  signedIn: boolean
}

function ProtectedLayout({ signedIn }: ProtectedLayoutProps) {
  if (!signedIn) {
    return <Navigate to="/signin" replace />
  }

  return <Outlet />
}

export default ProtectedLayout