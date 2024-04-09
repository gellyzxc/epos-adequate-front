import React from 'react'
import { useAuth } from '../../../providers/AuthProvider'
import { Navigate, Outlet } from 'react-router-dom'
import styles from '../../../styles/PupilLayout.module.scss'

export default function PupilLayout() {

  const { user, logout } = useAuth()

  if (user.role != 'pupil') {
    return <Navigate to={'/stuff'} />
  }

  return (
    <div className={styles.base}>
      <Outlet />
    </div>
  )
}
