import React from 'react'
import { BrowserRouter  , Route, Routes } from "react-router-dom";
import Login from './pages/Login'
import Register from './pages/Register'
import SignUp from './pages/SignUp';
import UserInfo from './pages/UserInfo'
import Home from './pages/Home';
import Bar from './pages/Bar';
import SignUpInfo from './pages/SignUpInfo';
import TableReservation from './pages/TableReservation'
import History from './pages/History';
import EightTable from './pages/EightTable';
import Schedule from './pages/Schedule';
import './App.css'



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index path='/' element={<Register />} />
            <Route  path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/userinfo' element={<UserInfo />} />
            <Route path='/bar' element={<Bar />} />
            <Route path='/signupinfo' element={<SignUpInfo />} />
            <Route path='/history' element={<History />} />
            <Route path='/tablereservation' element={<TableReservation />} />
            <Route path='/eighttable' element={<EightTable />} />
            <Route path='/schedule' element={<Schedule />} />


          </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App