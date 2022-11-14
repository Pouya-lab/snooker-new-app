import React from 'react'
import './schedule.css'
import Header from './../Header';
import { Button } from 'react-bootstrap';
import Historybtn from '../Historybtn';

function Schedule() {
  return (
    <div className='schedule-container' >
      <div className="schedule-main">
        <header className="schedule-header">
          <Header/>
        </header>

        <div className="schedule-title Red">
            میز 8 Ball معمولی
        </div>

        <div className="schedule-time-table">
          <div className="time">
            <input type="radio" name='time' value='first-time' />
            <lable >۱۱-۱۲</lable>
            </div>
            <div className="time">
            <input type="radio" name='time' value='second-time' />
            <lable  >۱۱-۱۲</lable>
            </div>
            <div className="time">
            <input type="radio" name='time' value='third-time' />
            <lable>۱۱-۱۲</lable>
            </div>
            <div className="time">
            <input type="radio" name='time' value='fourth-time' />
            <lable>۱۱-۱۲</lable>
            </div>
            <div className="time">
            <input type="radio" name='time' value='fifth-time' />
            <lable>۱۱-۱۲</lable>
            </div>
            <div className="time">
            <input type="radio" name='time' value='sixth-time' />
            <lable>۱۱-۱۲</lable>
            </div>
            <div className="time">
            <input type="radio" name='time' value='seventh-time' />
            <lable>۱۱-۱۲</lable>
          </div>
        </div>

          <div className="continue-btn">
            <Button>
              ادامه
            </Button>
          </div>
          <footer>
            <Historybtn/>
          </footer>
      </div>
    </div>
  )
}

export default Schedule

