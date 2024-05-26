import React from 'react'
import { useAuth } from '../../../providers/AuthProvider'
import { Navigate, Outlet } from 'react-router-dom'
import { SYSTEM_ROLES } from '../../../constants'
import styles from '../../../styles/TeacherLayout.module.scss'

export default function TeacherLayout() {

  const { user } = useAuth()

  if (SYSTEM_ROLES[user.role] != 'stuff') {
    return <Navigate to={'/403'} />
  }

  return (
    <div className={styles.base}>
      <Outlet></Outlet>
    </div>
  )
}
