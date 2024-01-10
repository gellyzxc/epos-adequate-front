import { Route, Routes, useRoutes } from "react-router-dom";
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

function App() {
  return (
    <>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route element={<ProtectedLayout path="/" />}>
          <Route element={<PupilLayout />} path="/pupil">
            <Route element={<PupilDashboard />} path="/pupil/" />
          </Route>
          <Route element={<TeacherLayout />} path="/teacher">
            <Route element={<TeacherDashboard />} path="/teacher" />
          </Route>
        </Route>
        <Route path="/*" exact element={<NotFound />} />
        <Route path="/403" exact element={<Forbidden />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
