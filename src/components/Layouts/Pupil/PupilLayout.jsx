import React from 'react'
import { useAuth } from '../../../providers/AuthProvider'
import { Navigate } from 'react-router-dom'
import styles from '../../../styles/PupilLayout.module.scss'

export default function PupilLayout() {

  const { user, logout } = useAuth()

  if (user.role != 'pupil') {
    return <Navigate to={'/403'} />
  }

  return (
    <div className={styles.base}>
      <div className={styles.header}>

      </div>
    </div>
  )
}
