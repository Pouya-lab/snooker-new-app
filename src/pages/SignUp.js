import React from 'react'
import Button from 'react-bootstrap/Button';
import './signup.css'
import { useNavigate } from 'react-router-dom';

function SignUp() {

  const navigate = useNavigate()

  const navigateToLogin = ()=>{
    navigate('/login')
  }

  const navigateToUserInfo = ()=>{
    navigate('/userinfo')
  }


  return (
    <div className='sign-up-container' >
        <div className="cover-signup">
          <div className="sign-up">
            <div className="sign-up-text">
              ثبت نام در <span className="Red">لوتوس</span>
            </div>
            <form action="#" className='forms'>
                <input className='input-sign-up ' type="text" placeholder='شماره موبایل' />
                <input className='input-sign-up' type="text" placeholder=' کد تایید' />
                <div className="resend-code">
                  <Button className="Red resend-code-text">ارسال مجدد کد</Button>
                </div>
          </form>
          <div className="btns">
                <Button 
                className='sign-up-btn'
                onClick={navigateToUserInfo}
                > ثبت نام</Button>
            </div>
            <footer>
          <p className="footer-sign-up-text">
            آیا قبلا ثبت نام کرده اید؟    
            <Button 
            className="Red signup-to-login"
            onClick={navigateToLogin}
            > ورود</Button>
           </p>
        </footer>
          </div>
        </div>
    </div>
  )
}

export default SignUp