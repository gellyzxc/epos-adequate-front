import React from 'react'
import styles from '../styles/Loader.module.scss'
import { CSpinner } from '@coreui/react'

export default function Loader() {
  return (
    <div className={styles.base}>
      <CSpinner />
    </div>
  )
}
