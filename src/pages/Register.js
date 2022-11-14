import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import './register.css'

function Register() {

  const navigate = useNavigate()

  const navigateToSignUp = ()=>{
    navigate('/signup')
  }

  const navigateToLogin = ()=>{
    navigate('/login')
  }

  return (
    <div className='register-container'>
        <div className="cover-register">
          <div className="register">
            <h1 className='register-text'>به <span className='Red'>لوتوس</span> خوش آمدید</h1>
            <div className="reg-btns">
                  <Button 
                  className='reg-sign-up'
                  onClick={navigateToSignUp}
                  >ثبت نام</Button>
                  
                  <Button 
                  className='reg-sign-in'
                  onClick={navigateToLogin}
                  > ورود</Button>
            </div>
            
            <footer>
              <p className="footer-reg-text">
              با ثبت نام و ورود به شب نما اقرار مینمایم که <span className="Red">حریم خصوصی</span> و <span className="Red">قوانین استفاده</span> را مطالعه نموده و پذیرفته ام.
              </p>
            </footer>

          </div>
        </div>
    </div>
  )
}

export default Register