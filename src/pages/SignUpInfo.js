import React from 'react'
import Header from '../Header'
import Historybtn from '../Historybtn'
import Button from 'react-bootstrap/Button';


import './signupinfo.css'

function SignUpInfo() {
  return (
    <div className='signup-info-container'>
         <div className="sign-up-info">
            <header className='sign-up-info-header'>
              <Header />
            </header>
                          <div className="sign-up-info-main">
                              <h3 className='main-title'>کلاس های آموزشی </h3>
                              <img 
                              className='snooker-img'
                                      src={'/img/snooker.png'} 
                                      alt="snooker" />
                                      <h4 className='main-title-info' >دوره آموزشی اسنوکر - ۳ماهه</h4>
                                      <h5>
                                        <img 
                                        src={'/img/ticket.png'} 
                                        alt="ticket" />
                                       ۲,۵۰۰,۰۰۰
                                        تومان
                                      </h5>
                                      <p className="course-info">
                                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.
                                      </p>
                                      <Button className='buy-course'>
                                      افزودن به سبد خرید
                                      </Button>
                          </div>
            <footer className='info-footer' >
              <Historybtn/>
            </footer>
         </div>
    </div>
  )
}

export default SignUpInfo