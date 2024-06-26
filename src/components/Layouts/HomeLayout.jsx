import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import styles from '../../styles/HomeLayout.module.scss'
import logo from '../../icons/logo.svg'
import { useAuth } from '../../providers/AuthProvider'
import { SYSTEM_ROLES } from '../../constants'

export default function HomeLayout() {
  const { user } = useAuth()
  const navigate = useNavigate()

  if (user) { 
    return <Navigate to={'/' + SYSTEM_ROLES[user.role]}></Navigate>
  }

  return (
    <div className={styles.base}>
        <div className={styles.header}>
          <div className={styles.logo} onClick={() => navigate('/')}>
            <img src={logo} className={styles.logo_image}></img>
            <p className={styles.logo_text}>Электронный дневник</p>
          </div>
          <div className={styles.nav_buttons}>
            <div className={styles.login} onClick={() => navigate('/signin')}>
              <p>Вход в систему</p>
            </div>
          </div>
        </div>
        <Outlet className={styles.outlet} />
    </div>  
  )
}
