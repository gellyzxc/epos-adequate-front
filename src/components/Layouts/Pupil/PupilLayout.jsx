import React from 'react'
import { useAuth } from '../../../providers/AuthProvider'
import { Navigate } from 'react-router-dom'

export default function PupilLayout() {

  const { user } = useAuth()

  if (user.role != 'pupil') {
    return <Navigate to={'/403'} />
  }

  return (
    <div>PupilLayout</div>
  )
}
