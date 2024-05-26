import React from 'react'
import styles from '../styles/ClassCard.module.scss'

export default function ClassCard({ text }) {
  return (
    <div className={styles.base}>
        <p className={styles.text}>{text}</p>
    </div>
  )
}
