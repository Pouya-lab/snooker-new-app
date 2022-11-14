import React from 'react'
import Header from '../Header'
import Homebtn from '../Homebtn'

import './history.css'

function History() {
  return (
    <div className='history-container'>
        <div className="history-main">
            <header className='history-header' >
                    <Header/>
            </header>

            <div className="history-content">
                <div className="history-title Red">سوابق</div>
                <div className="history-items">
                    <div className="history-item">سوابق رزرو میز</div>
                    <div className="history-item">سوابق شرکت در دوره های آموزشی</div>
                    <div className="history-item">سوابق خرید از کافه</div>
                </div>
            </div>

            <footer>
                <Homebtn/>
            </footer>
            

        </div>
    </div>
  )
}

export default History