import React, { useEffect, useState } from 'react'
import styles from '../../styles/TeacherLeaderClasses.module.scss'
import { privateApiInstance } from '../../http-common'
import ClassCard from '../../components/ClassCard'
import Marks from '../../components/Marks'

export default function TeacherLeaderClasses() {
    const [classes, setClasses] = useState()
    const [classItem, setClassItem] = useState(null)

    const profile = JSON.parse(localStorage.getItem('profile'))

    useEffect(() => {
        privateApiInstance.get(`/stuff/teacher/leader/${profile[0].school.id}/myClass`)
        .then((response) => {
            setClasses(response.data)
        })
    }, [null])

    const changeClass = (id) => {
        privateApiInstance.get(`/stuff/teacher/leader/${profile[0].school.id}/myClass/${id}`)
        .then((response) => {
            console.log(response.data)
            setClassItem(response.data)
        })
    }

  return (
    <div className={styles.base}>
        <div className={styles.classes}>
        {
            !!classes && classes.map((item) => (
                <div onClick={() => changeClass(item.id)}>
                    <ClassCard text={`${item.number} ${item.name}`} />
                </div>
            ))
        }
        </div>
        <div className={styles.class_info}>
            {classItem ? <div className={styles.class_item}>
                <p className={styles.text}>Список учеников</p>
                {
                    classItem.school_class.pupils.map((item) => (
                        <li className={styles.class_card}>
                            {`${item.last_name} ${item.first_name} ${item.middle_name}`}
                        </li>
                    ))
                }
            </div>: <div>Выберите класс</div>}
        </div>
        <div className={styles.marks}>
                <Marks />
        </div>
    </div>
  )
}
