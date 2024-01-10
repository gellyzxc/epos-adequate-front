import React from 'react'
import { useAuth } from '../providers/AuthProvider'

export default function Homepage() {
  const { user } = useAuth()
  return (
    <div>Home {user?.first_name} asd</div>
  )
}
