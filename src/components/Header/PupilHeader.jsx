import React, { useState } from "react";
import styles from "../../styles/UserHeader.module.scss";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import { useNavigate } from "react-router-dom";

export default function PupilHeader() {
  const [year, setYear] = useState("2023-2024");
  const handleChangeYear = (year) => {
    localStorage.setItem("selected_year", year);
    setYear(year);
  };

  const navigate = useNavigate();

  return (
    <div className={styles.pupil_header}>
      <div className={styles.item}>
        <CDropdown>
          <CDropdownToggle color="">{year}</CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem
              default
              onClick={() => {
                handleChangeYear("2023-2024");
              }}
            >
              2023-2024
            </CDropdownItem>
            <CDropdownItem
              onClick={() => {
                handleChangeYear("2022-2023");
              }}
            >
              2022-2023
            </CDropdownItem>
            <CDropdownItem
              onClick={() => {
                handleChangeYear("2021-2022");
              }}
            >
              2021-2022
            </CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </div>
      <div className={styles.item}>
        <CDropdown>
          <CDropdownToggle color="">Дневник</CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem
              onClick={() => {
                navigate("/pupil/diary");
              }}
            >
              Дневник
            </CDropdownItem>
            <CDropdownItem
              onClick={() => {
                navigate("/pupil/homework");
              }}
            >
              Домашнее задание, классная работа
            </CDropdownItem>
            <CDropdownItem
              onClick={() => {
                navigate("/pupil/timetable");
              }}
            >
              Расписание
            </CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </div>
      <div className={styles.item}>
        <CDropdown>
          <CDropdownToggle color="">Оценки</CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem
              onClick={() => {
                navigate("/pupil/marks"),
                  {
                    state: {
                      withAll: true,
                    },
                  };
              }}
            >
              Все оценки
            </CDropdownItem>
            <CDropdownItem
              onClick={() => {
                navigate("/pupil/marks");
              }}
            >
              Итоговые оценки
            </CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </div>
      <div className={styles.item}>
        <p>Образование</p>
      </div>
      <div className={styles.item}>
        <p>Прочее</p>
      </div>
    </div>
  );
}
