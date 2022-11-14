import React from 'react'
import './eighttable.css'
import Header from '../Header'
import Button from 'react-bootstrap/Button';
import Historybtn from './../Historybtn';
import { useNavigate } from 'react-router-dom';

function EightTable() {

    const navigate = useNavigate()

    const navigateToSchedule = ()=>{
        navigate('/schedule')
    }

  return (
    <div className='eight-table-container' >
            <div className="eight-table-main">
                <header className='eight-header'>
                    <Header/>
                </header>

                <div className="eight-items">
                    <div className="eight-title Red ">8 Ball</div>
                    <div className="eight-item">
                        <Button
                        onClick={navigateToSchedule}
                        >
                            میز معمولی
                        </Button>
                    </div>
                    <div className="eight-item">
                        <Button>
                            میز VIP
                        </Button>
                    </div>
                </div>

                <footer>
                    <Historybtn/>
                </footer>

            </div>
    </div>
  )
}

export default EightTable