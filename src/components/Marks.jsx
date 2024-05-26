import React, { useEffect, useState } from "react";
import styles from '../styles/Marks.module.scss'
import { privateApiInstance } from "../http-common";

export default function Marks({ user_id }) {
  const data = {
    "Математика": [2, 3, 23, 12, 3, 12, 3, 12, 3, 12, 3, 12, 3, 21, 3],
    "Физика": [43,3 ,3,4 ,34, 3,3,4, 3,4,3,4 ,3]
  };

  const [marks, setMarks] = useState()

  useEffect(() => {
    // privateApiInstance.get
  }, [null])

  return (
    <div className={styles.base}>
        <table>
            <thead>
                <th>Название</th>
                <th>Оценки</th>
            </thead>
            <tbody>
                <tr>
                    <th>Матеша</th>
                    <th>2 123 13 123 123</th>
                </tr>
            </tbody>
        </table>
    </div>
  );
}
