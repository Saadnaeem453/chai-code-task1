import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import OtpForm from "./components/otp-form/OtpForm"
import Layout from "./Layout"
import CourseList from "./components/course-list/CourseList"
import Batches from "./components/batches/Batches"


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/otp-form" />} />
            <Route path="/otp-form" element={<OtpForm />} />
            <Route path="/course-list" element={<CourseList />} />
            <Route path="/batches" element={<Batches />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
