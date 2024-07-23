import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import OtpForm from "./components/otp-form/OtpForm"
import Layout from "./Layout"


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/otp-form" />} />
            <Route path="/otp-form" element={<OtpForm />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
