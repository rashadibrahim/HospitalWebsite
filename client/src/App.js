import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Patients from './components/Patients';
import AddPatient from './components/AddPatient';
import LoginPatient from './components/LoginPatient';
import MainPage from './components/MainPage';
import LoggedPatient from './components/LoggedPatient';
import AdminLogin from './components/AdminLogin';
import AdminPage from './components/AdminPage';
import EditPatient from './components/EditPatient';
import AddAdmin from './components/AddAdmin';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/patients" element={<Patients />}></Route>
          <Route path="/register" element={<AddPatient />}></Route>
          <Route path="/login" element={<LoginPatient />}></Route>
          <Route path="/admin" element={<AdminLogin />}></Route>
          <Route path="/admin/:username" element={<AdminPage />}></Route>
          <Route path="/:username" element={<LoggedPatient />}></Route>
          <Route path="/addAdmin" element={<AddAdmin />}></Route>
          <Route path="/edit" element={<EditPatient />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}



export default App;