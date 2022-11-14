import React from 'react'
import Button from 'react-bootstrap/Button';
import './login.css'
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate()

  const navigateToSignUp = ()=>{
    navigate('/signup')
  }

  const navigateToHome = ()=>{
    navigate('/home')
  }

  return (
    <div className='login-container'>
         <div className="cover-login">
          <div className="login">
            <h2 className='login-text'>ورود به <span className='Red'>لوتوس</span>  </h2>
          <form action="#" className='forms'>
            <input className='input-login ' type="text" placeholder='شماره موبایل' />
            <input className='input-login' type="text" placeholder='رمز عبور' />
            <div className="forgotten-pass">
            <Button className="Red btn-forgotten-pass">فراموشی رمز عبور</Button>
            </div>
          </form>
            <div className="btns">
                <Button 
                className='login-sign-in'
                onClick={navigateToHome}
                > ورود</Button>
            </div>
            
        <footer>
          <p className="footer-login-text">
           آیا عضو جدید هستید؟ 
           <Button 
           className="Red btn-sign-up"
           onClick={navigateToSignUp}
           >ثبت نام</Button>
           </p>
        </footer>

          </div>
        </div>
    </div>
  )
}

export default Login