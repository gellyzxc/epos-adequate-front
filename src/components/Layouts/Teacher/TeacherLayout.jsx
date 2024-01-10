import React from 'react'
import { useAuth } from '../../../providers/AuthProvider'
import { Navigate } from 'react-router-dom'

export default function TeacherLayout() {

  const { user } = useAuth()

  if (!user.role != 'teacher') {
    return <Navigate to={'/403'} />
  }

  return (
    <div>TeacherLayout</div>
  )
}
