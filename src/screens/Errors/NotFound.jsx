import { CButton } from '@coreui/react'
import React from 'react'

export default function NotFound() {
  return (
    <div>NotFound | 404 <CButton onClick={() => {
      window.history.back()
    }}>НАЗАД</CButton></div>
  )
}
