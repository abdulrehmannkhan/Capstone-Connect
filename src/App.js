// import logo from './logo.svg';
import './App.css';
import './components/Calender'
import Calender from './components/Calender';
import './components/LoginForm'
import LoginPage from './components/LoginPage';
import Supervisors from './components/Supervisors';
import StudentDashboard from './components/StudentDashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrevProjects from './components/PrevProjects';
import SubmitProposal from './components/SubmitProposal';





function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<LoginPage/>}></Route>
          <Route path='/Calender' element={<Calender/>}></Route>
          <Route path='/Supervisors' element={<Supervisors/>}></Route>
          <Route path='/StudentDashboard' element={<StudentDashboard/>}></Route>
          <Route path='/PrevProjects' element={<PrevProjects/>}></Route>
          <Route path='/SubmitProposal' element={<SubmitProposal/>}></Route>
          
          
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
