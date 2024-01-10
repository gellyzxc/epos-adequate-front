import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";

export const ProtectedLayout = () => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to={'/'}></Navigate>
  }

  return (
    <div>
      ProtectedLayout | {user.first_name}
      <Outlet />
    </div>
  )
};