import { Route, Routes, useRoutes } from "react-router-dom";
import styles from "./styles/App.module.scss"
import HomeLayout from "./components/Layouts/HomeLayout";
import Homepage from "./screens/Homepage"
import { ProtectedLayout } from "./components/Layouts/ProtectedLayout";
import PupilLayout from "./components/Layouts/Pupil/PupilLayout";
import TeacherLayout from "./components/Layouts/Teacher/TeacherLayout";
import PupilDashboard from "./screens/Pupil/PupilDashboard";
import TeacherDashboard from "./screens/Teacher/TeacherDashboard";
import NotFound from "./screens/Errors/NotFound";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import { ToastContainer } from "react-toastify";
import Forbidden from "./screens/Errors/Forbidden";
import { useProject } from "./providers/ProjectProvider";
import Modal from "./components/Modals/Modal";
import Messages from "./screens/Messages";
import PupilDiary from "./screens/Pupil/PupilDiary";
import PupilHomework from "./screens/Pupil/PupilHomework";
import PupilTimetable from "./screens/Pupil/PupilTimetable";
import PupilMarks from "./screens/Pupil/PupilMarks";


function App() {

  const { theme, changeTheme } = useProject()

  return (
    <>
      <div style={{ position: 'absolute', zIndex: '100' }}><Modal /></div>

      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" index element={<Homepage />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route element={<ProtectedLayout path="/" />}>
          
          <Route element={<PupilLayout />} path="/pupil">
            <Route element={<PupilDashboard />} path="/pupil/" />
            <Route element={<PupilDiary />} path="/pupil/diary" />
            <Route element={<PupilHomework />} path="/pupil/homework" />
            <Route element={<PupilTimetable />} path="/pupil/timetable" />

            <Route element={<PupilMarks />} path="/pupil/marks" />
          </Route>


          <Route element={<TeacherLayout />} path="/teacher">
            <Route element={<TeacherDashboard />} path="/teacher" />
          </Route>

          <Route element={<Messages />} path="/messages" />
            

        </Route>
        <Route path="/*" exact element={<NotFound />} />
        <Route path="/403" exact element={<Forbidden />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
