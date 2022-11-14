import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {AiOutlineHistory} from 'react-icons/ai'
import Header from '../Header'
import './home.css'
import Historybtn from '../Historybtn';


function Home() {

  const navigate = useNavigate()

  const navigateToTableReservation = ()=>{
    navigate('/tablereservation')
  }

  const navigateToSignUpInfo = ()=>{
    navigate('/signupinfo')
  }

  const navigteToBar = ()=>{
    navigate('/bar')
  }

  return (
    <div >
        <div className="home-container">
              <div className="home">
                <header className='home-header' >
                  <Header/>
                </header>

                <div className="menu">
                  <div className='reservation'>
                    <Button 
                    onClick={navigateToTableReservation}
                    className='reserve-btn' >
                      <p>رزرو میز</p>
                      <img 
                      src={'/img/table.png'} 
                      alt="table" />
                    </Button>
                  </div>
                  <div className='signing-up-courses' >
                    <Button 
                    onClick={navigateToSignUpInfo}
                    className='sign-courses-btn' >
                        <p> ثبت نام کلاس آموزشی</p>
                        <img 
                        src={'/img/sign-course.png'} 
                        alt="course" />
                      </Button>
                  </div>
                  <div className='bar' >
                    <Button 
                    onClick={navigteToBar}
                    className='bar-btn' >
                        <p>کافه </p>
                        <img 
                        src={'/img/bar.png'} 
                        alt="bar" />
                      </Button>
                  </div>
                </div>


                <footer>
                  <Historybtn/>
                </footer>


              </div>
        </div>
          
    </div>
  )
}

export default Home