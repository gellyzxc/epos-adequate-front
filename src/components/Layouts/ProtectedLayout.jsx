import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import styles from "../../styles/ProtectedLayout.module.scss";
import UserInfo from "../Header/UserInfo";
import PupilHeader from "../Header/PupilHeader";
import TecherHeader from "../Header/TecherHeader";
import { privateApiInstance } from "../../http-common";
import { useEffect, useState } from "react";
import Loader from "../Loader";

export const ProtectedLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate()
  const { user, userProfile, profile } = useAuth();
  if (!user) {
    return <Navigate to={"/"}></Navigate>;
  }

  useEffect(() => {
    privateApiInstance
      .get("/user/info")
      .then((response) => {
        if (response.data.role == "pupil") {
          if (!response.data.pupil_profile) {
            navigate('/select')
          } else {
            userProfile(response.data.pupil_profile);
          }
        } else if (response.data.role == "teacher") {
          userProfile(response.data.teacher_profile);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {!isLoading && (
        <div className={styles.base}>
          <div className={styles.header}>
            <UserInfo user={user} profile={profile} />
          </div>
          <div className={styles.personal_header}>
            {user.role == "pupil" ? <PupilHeader /> : <TecherHeader />}
          </div>
          <Outlet />
        </div>
      )}
      {isLoading && <Loader />}
    </>
  );
};
