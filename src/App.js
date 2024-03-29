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
import Proposals from './components/Proposals';
import SupProjects from './components/SupProjects';
import ProjectPage from './components/ProjectPage';
import SupervisorDashboard from './components/SupervisorDashboard';
import ProjectInner from './components/ProjectInner';
import AdminCalender from './components/AdminCalender';
import AdminQueries from './components/AdminQueries';
import QueryResponse from './components/QueryResponse';
import AdminDocs from './components/AdminDocs';



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
          <Route path='/Proposals' element={<Proposals/>}></Route>
          <Route path='/SupProjects' element={<SupProjects/>}></Route>
          <Route path='/ProjectPage' element={<ProjectPage/>}></Route>
          <Route path='/SupervisorDashboard' element={<SupervisorDashboard/>}></Route>
          <Route path='/ProjectInner' element={<ProjectInner/>}></Route>
          <Route path='/AdminCalender' element={<AdminCalender/>}></Route>
          <Route path='/AdminQueries' element={<AdminQueries/>}></Route>
          <Route path='/QueryResponse' element={<QueryResponse/>}></Route>
          <Route path='/AdminDocs' element={<AdminDocs/>}></Route>
          <Route path='/SupSideBar' element={<SupSideBar/>}></Route>
          <Route path='/SupCal' element={<SupCal/>}></Route>
          <Route path='/SupPrevProj' element={<SupPrevProj/>}></Route>
          <Route path='/AdminSideBar' element={<AdminSideBar/>}></Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
