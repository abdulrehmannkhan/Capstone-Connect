// import logo from './logo.svg';
import './App.css';
import './components/Calender'
import Calender from './components/Calender';
import './components/LoginForm'
import LoginPage from './components/LoginPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>}></Route>
          <Route path='/Calender' element={<Calender/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
