import React, { useRef } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import {AiFillCaretDown} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
import './userinfo.css'

function UserInfo() {

  const [options , setOptions] = useState(false)
  const ref = useRef();
  const navigate = useNavigate()
    
    const navigateToHome =()=>{
      navigate('/home')
    }

    const navigateToLogin = ()=>{
      navigate('/login')
    }

    const showOptions = ()=>{
        setOptions(!options)
        console.log(options)
    }

  return (
    <div className='info-container'>
        <div className="cover-info">
          <div className="info">
            <h2 className='info-text'>
            ادامه ثبت نام در <span className="Red">لوتوس</span>
            </h2>
          <form action="#" className='forms'>
            <input className='input-info ' type="text" placeholder=' نام و نام خانوادگی' />
            
            <input 
            className='input-info ' 
            placeholder='تاریخ تولد ' 
            type="text"
          onChange={(e) => console.log(e.target.value)}
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}
            />

            {/* <div className="about">
              <div type="text" 
              className='know-us'
              onClick={showOptions}
               >
               نحوه آشنایی با ما
               <i className="show">
               <AiFillCaretDown/>
               </i>
               {options ?
                (<>
                  <select id="about-us">
                  <option value="اینستاگرم">اینستاگرم</option>
                  <option value=">وب سایت">وب سایت</option>
                  <option value=">تبلیغات محیطی">تبلیغات محیطی</option>
                  <option value=">دوستان و آشنایان">دوستان و آشنایان</option>
                  <option value="سایر">سایر</option>
              </select>
                </>) : 
                null}
               </div>
            </div> */}

          </form>
            <div className="btns">
                <Button 
                className='info-sign-in'
                onClick={navigateToHome}
                > ورود به برنامه</Button>
            </div>
            

          </div>
        {/* <footer className='footer-info' >
          <p className="">
              قبلا ثبت نام کرده اید؟ <Button
               className="Red info-btn-sign-in"
              onClick={navigateToLogin}
               >ورود</Button>
           </p>
        </footer> */}
        </div>
    </div>
  )
}

export default UserInfo