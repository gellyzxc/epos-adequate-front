import React, { useState } from "react";
import styles from "../../styles/UserHeader.module.scss";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import { useNavigate } from "react-router-dom";
import { useProject } from "../../providers/ProjectProvider";
import Timetable from "../ModalChildren/Timetable";
import { useAuth } from "../../providers/AuthProvider";

export default function TeacherHeader() {
  const { toggleModal } = useProject();
  const { user } = useAuth()
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
      {user.role == 'local_admin' && <div className={styles.item}>
        <CDropdown>
          <CDropdownToggle color="">Администрирование</CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem
              onClick={() => {
                navigate("/stuff/admin/users");
              }}
            >
              Пользователи
            </CDropdownItem>
            <CDropdownItem
              onClick={() => {
                navigate("/stuff/admin/users", {
                  state: {
                    teacher: true
                  }
                });
              }}
            >
              Учителя
            </CDropdownItem>
            <CDropdownItem
              disabled
              onClick={() => {
                navigate("/stuff/admin/school");
              }}
            >
              Управление ОУ
            </CDropdownItem>
            <CDropdownItem
              onClick={() => {
                navigate("/stuff/admin/statistics");
              }}
              disabled
            >
              Статистика
            </CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </div>}
      <div className={styles.item}>
        <CDropdown>
          <CDropdownToggle color="">Классное руководство</CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem
              onClick={() => {
                navigate("/stuff/leader");
              }}
            >
              Мои классы
            </CDropdownItem>
            <CDropdownItem
              onClick={() => {
                navigate("/stuff/leader/statistics");
              }}
              disabled
            >
              Статистика
            </CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </div>
      <div className={styles.item}>
        <CDropdown>
          <CDropdownToggle color="">Уроки</CDropdownToggle>
          <CDropdownMenu>
          <CDropdownItem
              onClick={() => {
                navigate("/stuff/panel/lessons");
              }}
            >
              Уроки
            </CDropdownItem>
            <CDropdownItem
              disabled
              onClick={() => {
                navigate("/stuff/panel/other_lessons");
              }}
            >
              Факультативы
            </CDropdownItem>
            <CDropdownItem
              onClick={() => {
                navigate("/stuff/user/profiles");
              }}
            >
              Мои профили
            </CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </div>
      <div className={styles.item}>
        <CDropdown>
          <CDropdownToggle color="">Классы</CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem
              onClick={() => {
                navigate("/stuff/panel/classes");
              }}
            >
              Мои классы
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
                navigate("/stuff/panel/marks");
              }}
            >
              Оценки
            </CDropdownItem>
            <CDropdownItem
              onClick={() => {
                navigate("/stuff/panel/marks", {
                  state: {
                    year: true,
                  },
                });
              }}
            >
              Итоговые оценки
            </CDropdownItem>
            <CDropdownItem
              disabled
              onClick={() => {
                navigate("/stuff/panel/marks");
              }}
            >
              Статистика успеваемости
            </CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </div>
      <div className={styles.item}>
        <CDropdown>
          <CDropdownToggle color="">Расписание</CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem
              onClick={() => {
                toggleModal(<Timetable type={"self"} />);
              }}
            >
              Мое расписание
            </CDropdownItem>
            <CDropdownItem
              disabled
              onClick={() => {
                toggleModal(<Timetable type={"school"} />);
              }}
            >
              Общее расписание
            </CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </div>
      <div className={styles.item}>
        <CDropdown>
          <CDropdownToggle color="">Образование</CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem
              onClick={() => {
                navigate("/stuff/cource");
              }}
            >
              Образовательная программа
            </CDropdownItem>
            <CDropdownItem
              disabled
              onClick={() => {
                toggleModal(<Timetable type={"school"} />);
              }}
            >
              Календарно-тематический план
            </CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </div>
      <div className={styles.item}>
        <CDropdown>
          <CDropdownToggle color="">Мероприятия</CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem
              onClick={() => {
                navigate("/stuff/events");
              }}
            >
              Мероприятия
            </CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </div>
    </div>
  );
}
