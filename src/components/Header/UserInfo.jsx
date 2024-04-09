import React from 'react'
import styles from '../../styles/UserInfo.module.scss'
import { useAuth } from '../../providers/AuthProvider'
import logo from '../../icons/logo.svg'
import { useProject } from '../../providers/ProjectProvider'
import Homepage from '../../screens/Homepage'
import { SYSTEM_ROLES, USER } from '../../constants'
import Notifications from '../ModalChildren/Notifications'
import { useNavigate } from 'react-router-dom'
import SettingsModal from '../ModalChildren/SettingsModal'
import SchoolCard from './UserInfo/SchoolCard'

export default function UserInfo({ user }) {
  const { logout } = useAuth()
  const { toggleModal } = useProject()
  
  const navigate = useNavigate()
  return (
    <div className={styles.base}>
      <div className={styles.left_menu}>
        <div className={styles.logo} onClick={() => navigate('/' + SYSTEM_ROLES[user.role])}>
          <img className={styles.logo_in} src={logo}></img>
        </div>
        <div className={styles.banners}></div>
      </div>
      <div className={styles.login_info}>
        <i className="zmdi zmdi-key"></i>
        <p>Вы вошли в систему как {USER[user.role]}</p>
      </div>
      <div className={styles.right_menu}>
        <div className={styles.notifications} onClick={() => {toggleModal(<Notifications />) }}>
          <i className="zmdi zmdi-notifications-active"></i>
        </div>
        <div className={styles.messages} onClick={() => {navigate('/messages')}}>
          <i className="zmdi zmdi-email"></i>
        </div>
        <div className={styles.profile}>
          <div className={styles.avatar_container}>
            <img src="https://i.scdn.co/image/ab6761610000e5eb702db579a4c042626df64c02" alt="" />
          </div>
          <div className={styles.information}>
            <p className={styles.name}>{user.last_name} {user.first_name[0]}. {user.middle_name[0]}.  </p>
            <div className={styles.current_school_info}><SchoolCard type={user.role} /></div>
          </div>
        </div>
        <div className={styles.settings} onClick={() => {toggleModal(<SettingsModal />)}}>
          <i className="zmdi zmdi-settings"></i>
        </div>
        <div className={styles.logout} onClick={() => logout()}>
          <i className="zmdi zmdi-square-right"></i>
        </div>
      </div>
    </div>
  )
}
