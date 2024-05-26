import React, { useState } from 'react'
import TimetableSmall from '../../components/TimetableSmall'
import styles from '../../styles/TeacherDashboard.module.scss'
import News from '../../components/News'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


export default function TeacherDashboard() {

  const [calendarValue, setCalendarValue] = useState()

  return (
    <div className={styles.base}>
      <TimetableSmall role={'teacher'}></TimetableSmall>
      {/* <Calendar></Calendar> */}
      <Calendar onClickDay={(value) => alert(value)} onChange={setCalendarValue} value={calendarValue} />
      <News></News>
    </div>
  )
}
