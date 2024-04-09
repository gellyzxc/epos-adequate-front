import React from 'react'
import { useAuth } from '../../../providers/AuthProvider'
import { Navigate } from 'react-router-dom'
import { SYSTEM_ROLES } from '../../../constants'

export default function TeacherLayout() {

  const { user } = useAuth()

  if (SYSTEM_ROLES[user.role] != 'stuff') {
    return <Navigate to={'/403'} />
  }

  return (
    <div>TeacherLayout</div>
  )
}
