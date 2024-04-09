import React from "react";
import { useAuth } from "../../../providers/AuthProvider";
import { useProject } from "../../../providers/ProjectProvider";
import SchoolSelector from "../../ModalChildren/SchoolSelector";
import { SYSTEM_ROLES } from "../../../constants";

export default function SchoolCard({ type }) {

    const { profile } = useAuth()
    const { toggleModal } = useProject()

  if (type == "pupil") {
    return <p>{profile.school_class.school.name}</p>;
  } else if (SYSTEM_ROLES[type] == 'stuff') {
    return <p onClick={() => {toggleModal(<SchoolSelector data={profile} />)}}>{profile[0].school.name}</p>;
  }
}
