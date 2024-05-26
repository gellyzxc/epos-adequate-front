import React, { useEffect, useState } from "react";
import styles from "../../styles/SelectSchool.module.scss";
import { useAuth } from "../../providers/AuthProvider";
import { publicApiInstance } from "../../http-common";
import { CListGroup, CListGroupItem } from "@coreui/react";

export default function SelectSchool() {
  const [schools, setSchools] = useState();
  const [page, setPage] = useState(1);

  const { user } = useAuth();

  useEffect(() => {
    if (page == 1) {
      // console.log('asda')
      publicApiInstance.get("pupil/new/school").then((response) => {
        setSchools(response.data);
      });
    }
  }, [page]);

  const handleSchoolChange = (schoolId) => {
    
  }

  return (
    <div className={styles.base}>
      <div className={styles.head}>{user.id}</div>
      <div className={styles.page}>
        {page == 1 && (
          <div className={styles.content}>
            <CListGroup>
             
            {!!schools &&
              schools.map((item) => (
                <CListGroupItem as="button" onClick={() => handleSchoolChange(item.id)}>
                {item.name}
              </CListGroupItem>
              ))}

            </CListGroup>
            
          </div>
        )}
      </div>
    </div>
  );
}
