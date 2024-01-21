import React from 'react'
import styles from '../../styles/UserInfo.module.scss'
import { useAuth } from '../../providers/AuthProvider'
import logo from '../../icons/logo.svg'
import { useProject } from '../../providers/ProjectProvider'
import Homepage from '../../screens/Homepage'
import { USER } from '../../constants'

export default function UserInfo({ user }) {
  const { logout } = useAuth()
  const { toggleModal } = useProject()
  return (
    <div className={styles.base}>
      <div className={styles.left_menu}>
        <div className={styles.logo}>
          <img className={styles.logo_in} src={logo}></img>
        </div>
        <div className={styles.banners}></div>
      </div>
      <div className={styles.login_info}>
        <i class="zmdi zmdi-key" onClick={() => { toggleModal(<div></div>) }}></i>
        <p>Вы вошли в систему как {USER[user.role]}</p>
      </div>
      <div className={styles.right_menu}>
        <div className={styles.notifications}>
          <i class="zmdi zmdi-notifications-active"></i>
        </div>
        <div className={styles.messages}>
          <i class="zmdi zmdi-email"></i>
        </div>
        <div className={styles.profile}>
          <div className={styles.avatar_container}>
            <img src="https://i.scdn.co/image/ab6761610000e5eb702db579a4c042626df64c02" alt="" />
          </div>
          <div className={styles.information}>
            <p className={styles.name}>{user.last_name} {user.first_name[0]}. {user.middle_name[0]}.  </p>
            <p className={styles.current_school_info}>МАОУ "Лицей №2 г. Перми"</p>
          </div>
        </div>
        <div className={styles.settings}>
          <i class="zmdi zmdi-settings"></i>
        </div>
        <div className={styles.logout} onClick={() => logout()}>
          <i class="zmdi zmdi-square-right"></i>
        </div>
      </div>
    </div>
  )
}
