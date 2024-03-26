import React from 'react'
import { useLocation } from 'react-router-dom'

export default function PupilMarks() {

  const { state } = useLocation()
  
  return (
    <div>Оценки</div>
  )
}
