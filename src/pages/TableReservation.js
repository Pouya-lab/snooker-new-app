import React from 'react'
import { Button } from 'react-bootstrap'
import Header from '../Header'
import Historybtn from '../Historybtn'

import './tablereservation.css'
import { useNavigate } from 'react-router-dom';

function TableReservation() {

    const navigate = useNavigate()

    const navigateToEightTable = () =>{
        navigate('/eighttable')
    }

  return (
    <div className='table-res-container'>
        <div className="table-res-main">
            <header className='table-res-header' >
                <Header/>
            </header>

            <div className="table-res-items">
                <div className="table-res-title Red ">رزرو میز</div>
                <div className="table-res-item">
                <Button 
                onClick={navigateToEightTable}
                >
                8 Ball
                </Button>
                </div>
                <div className="table-res-item">
                    <Button>
                         Snooker
                    </Button>
                </div>
                <div className="table-res-item">
                    <Button>
                        PS5
                    </Button>
                </div>
                <div className="table-res-item">
                <Button>
                فوتبال دستی
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

export default TableReservation