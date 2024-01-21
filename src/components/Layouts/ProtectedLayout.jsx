import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import styles from '../../styles/ProtectedLayout.module.scss'
import UserInfo from "../Header/UserInfo";
import PupilHeader from "../Header/PupilHeader";
import TecherHeader from "../Header/TecherHeader";

export const ProtectedLayout = () => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to={'/'}></Navigate>
  }
  return (
    <div className={styles.base}>
      <div className={styles.header}>
        <UserInfo user={user} />
      </div>
      <div className={styles.personal_header}>
        {user.role == 'pupil' ? <PupilHeader /> : <TecherHeader />}
      </div>
      <Outlet />
    </div>
  )
};