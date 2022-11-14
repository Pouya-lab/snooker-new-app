import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import {BiPlus , BiDrink } from 'react-icons/bi'
import {FiMinus} from 'react-icons/fi'
import {CiBowlNoodles} from 'react-icons/ci'
import {CgCoffee} from 'react-icons/cg'
import Header from '../Header'
import Historybtn from './../Historybtn';
import './bar.css'



function Bar() {

  const [display , setDisplay] = useState(false)
  const [totalCount , setTotalCount] = useState(0)
  const [coffees , setCoffees] = useState([
    { name : 'اسپرسو' , price : 12500 , quantity : 0 } , 
    { name : 'اسپرسو' , price : 12500 , quantity : 0 } , 
    { name : 'اسپرسو' , price : 12500 , quantity : 0 } , 
    { name : 'اسپرسو' , price : 12500 , quantity : 0 } ,
    { name : 'اسپرسو' , price : 12500 , quantity : 0 } ,
    { name : 'اسپرسو' , price : 12500 , quantity : 0 } ,
    { name : 'اسپرسو' , price : 12500 , quantity : 0 } ,
    { name : 'اسپرسو' , price : 12500 , quantity : 0 } 
  ])
  
  const displayQuantity = (index)=>{
    setDisplay(!display)
  }

  const quantityIncrease = (index) =>{
    const newCoffee = [...coffees]
    newCoffee[index].quantity++;
    setCoffees(newCoffee)
    calculateTotal()
  }

  const quantityDecrease = (index) =>{
    // if(coffees.quantit < 0){
    //   const newCoffee = [...coffees]
    //   newCoffee[index].quantity--;
    // setCoffees(newCoffee)
    // calculateTotal()
    // }
    const newCoffee = [...coffees]
      newCoffee[index].quantity--;
    setCoffees(newCoffee)
    calculateTotal()
  }

  const calculateTotal = ()=>{
   const totalValue = coffees.reduce((total , coffee)=>{
    return total + coffee.quantity
   } , 0 )
   setTotalCount(totalValue)
  }

  console.log(totalCount)

  return (
   <div className='bar-container'>
       <div className="bar-main">
       {/* header style is being used by home.css */}
       <div className="bar-margin">
            <header className='bar-header'>
               <Header/>
            </header>
       </div>

            <div className="bar-menu">
              <h3 className="menu-title">کافه</h3>

              <div className="menu-options">
                <Button 
                className='coffee-btn'
                 >
                  <i className="bar-icon">
                  <CgCoffee/> 
                  </i>
                قهوه
                </Button>
                <Button className='drink-btn' >
                <i className="bar-icon">
                  <BiDrink/> 
                  </i>
                نوشیدنی
                 </Button>
                <Button className='food-btn' >
                <CiBowlNoodles/>
                غذا
                </Button>
              </div>

              <div className="coffee-list">
                    
                        {coffees.map((coffee , index)=>(
                            <div className='coffee-list-items'>
                                <div className="coffeeName">{coffee.name}</div>
                                <div className="price">{coffee.price} تومان </div>
                                <div 
                                className="quantity"
                                >
                                  {!display ?
                                  (<div className='quantity-count-default'>

                                      <Button className='increase-btn'
                                      onClick={()=>displayQuantity(index)}
                                      >
                                        <BiPlus/>
                                      </Button>

                                  </div>) : 
                                  (<div className='count-quantity'>
                                    <Button 
                                    className='increase-btn'
                                    onClick={()=>quantityIncrease(index)}
                                    >
                                        <BiPlus/>
                                      </Button>
                                        <p>
                                        {coffee.quantity}
                                        </p>
                                      <Button
                                      className='decrease-btn'
                                      onClick={()=>quantityDecrease(index)}
                                        >
                                        <FiMinus/>
                                      </Button>
                                  </div>)}
                                </div>
                            </div>
                        )
                        )}
                    
              </div>

            </div>
                    
                    <footer className='footer-btn'>
                      <Historybtn/>
                    </footer>

       </div>
   </div>
  )
}

export default Bar