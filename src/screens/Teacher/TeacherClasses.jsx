import React, { useEffect, useState } from 'react'
import styles from '../../styles/TeacherClasses.module.scss'
import { privateApiInstance } from '../../http-common'
import ClassCard from '../../components/ClassCard'

export default function TeacherClasses() {
    const [classes, setClasses] = useState()
    const [classItem, setClassItem] = useState(null)

    const profile = JSON.parse(localStorage.getItem('profile'))

    useEffect(() => {
        privateApiInstance.get(`/stuff/school/${profile[0].school.id}/class`)
        .then((response) => {
            setClasses(response.data)
        })
    }, [null])

    const changeClass = (id) => {
        privateApiInstance.get(`/stuff/school/${profile[0].school.id}/class/${id}`)
        .then((response) => {
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
                    classItem.pupils.map((item) => (
                        <li className={styles.class_card}>
                            {`${item.last_name} ${item.first_name} ${item.middle_name}`}
                        </li>
                    ))
                }
            </div>: <div>Выберите класс</div>}
        </div>
    </div>
  )
}
