import React, { useEffect, useState } from 'react'
import styles from '../../styles/SchoolSelector.module.scss'
import { useProject } from '../../providers/ProjectProvider'

export default function SchoolSelector({ data }) {

    const { toggleModal } = useProject()

    const setProfile = (value) => {
        localStorage.setItem('prefered_profile', JSON.stringify(value))
        toggleModal()
    }

  return (
    <div className={styles.base}>
        {data.map(item => <div key={item.id}>
            <button onClick={() => {setProfile(item)}}>{item.school.name}</button>
        </div>
        )}
    </div>
  )
}
