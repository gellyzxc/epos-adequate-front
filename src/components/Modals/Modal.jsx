import React, { useState } from 'react'
import { useProject } from '../../providers/ProjectProvider'
import styles from '../../styles/Modal.module.scss'

export default function Modal() {

    const { modalOpened, modalChildren, toggleModal } = useProject()

    if (modalOpened) {
        console.log(modalChildren)
        return (
            <div className={styles.container} onClick={() => toggleModal()}>
                <div className={styles.content} onClick={(e) => e.stopPropagation()}>{modalChildren}</div>
            </div>
        )
    }

}
