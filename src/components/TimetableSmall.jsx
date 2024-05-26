import React, { useEffect, useState } from 'react'
import styles from '../styles/TimetableSmall.module.scss'

export default function TimetableSmall({ role }) {
    const [lessons, setLessons] = useState()
    useEffect(() => {
        // TODO get lessons
        // setLessons([
        //     {
                
        //     }
        // ])
    }, [null])

  return (
    <div className={styles.base}>
        <div className={styles.selector}>
            <button className={styles.button}>{'<'}</button>
            <p className={styles.text}>Сегодня 25.05</p>
            <button className={styles.button}>{'>'}</button>
        </div>
        <div className={styles.list}>
            {[...Array(8)].map((el, index) => (
                <div className={styles.lesson}>
                    <div className={styles.indx}><p>2</p></div>
                    <div className={styles.item}>
                        <p>Математика - 203</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
