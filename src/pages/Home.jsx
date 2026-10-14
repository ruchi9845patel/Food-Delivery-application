import { useContext } from 'react'
import Nav from '../component/Nav'
import Category from '../Category'
import Card from '../component/Card'
import { food_items } from '../Food'
import { RxCross2 } from "react-icons/rx";

import { dataContext } from '../context/UserContext'
import Card2 from '../component/Card2'
import { useSelector } from 'react-redux'


function Home() {
  let { cate, setCate, input, showCart, setShowCart } = useContext(dataContext)

  function filter(category) {
    if (category === "All") {
      setCate(food_items)
    } else {
      let newList = food_items.filter((item) => (item.food_category === category))
      setCate(newList)
    }
  }

  let items = useSelector(state => state.cart)

  let subtotal = items.reduce((total, item) => total + item.qty * item.price, 0)

  let deliveryFee = 20;
  let taxes = subtotal * 0.5 / 100;
  let total = subtotal + deliveryFee + taxes;

  return (
    <div className=' bg-slate-300 w-full min-h-screen'>
      <Nav />
      {!input ? <div className='flex flex-wrap items-center justify-center gap-5 w-[100%]'>
        {Category.map((item) => {
          return <div className='w-[140px] h-[150px] flex flex-col items-start gap-5 p-5 bg-white text-[20px] font-semibold text-shadow-gray-600 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200' onClick={() => filter(item.name)}>
            {item.icon}
            {item.name}

          </div>
        })}
      </div> : null}


      <div className=' w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
        {cate.length > 1 ? cate.map((item) => (
          <Card
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}
          />
        )) : <div className='text-center text-2xl text-green-500 font-semibold pt-5'>
          No Dish Found....
        </div>}

      </div>



      <div className={`w-full md:w-[40vw] h-[100%] fixed  top-0 right-0 p-6 bg-white shadow-xl transition-all flex flex-col items-center overflow-auto duration-500  ${showCart ? "translate-x-0" : "translate-x-full"}`}>
        <header className='w-[100%] flex justify-between items-center'>
          <span className='text-green-400 text-[18px] font-semibold'>order item</span>
          <RxCross2 className='text-green-400 text-[18px] font-semibold w-[30px] h-[30px] cursor-pointer hover:text-gray-600' onClick={() => setShowCart(false)} />
        </header>

        {items.length>0?<div>
          

        <div className='w-full mt-9 flex flex-col gap-8'>
          {items.map((item) => (
            <Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} />
          ))}
        </div>

        <div className='w-full flex flex-col gap-2 p-8 border-t-2 border-b-2 border-gray-600 mt-7'>
          <div className='w-full flex justify-between items-center'>
            <span className='text-gray-600 text-lg font-semibold'>Subtotal</span>
            <span className='text-green-400 font-semibold text-lg'>₹ {subtotal}/-</span>
          </div>
          <div className='w-full flex justify-between items-center'>
            <span className='text-gray-600 text-lg font-semibold'>Taxes</span>
            <span className='text-green-400 font-semibold text-lg'>₹ {taxes}/-</span>
          </div>
          <div className='w-full flex justify-between items-center'>
            <span className='text-gray-600 text-lg font-semibold'>Delivery Fee</span>
            <span className='text-green-400 font-semibold text-lg'>₹ {deliveryFee}/-</span>
          </div>


        </div>
        <div className='w-full flex  p-9 justify-between items-center'>
          <span className='text-gray-600 text-2xl font-semibold'>Total</span>
          <span className='text-green-400 font-semibold text-2xl'>₹ {total}/-</span>
        </div>

        <button
          className='w-[80%] p-3 rounded-lg text-gray-900 bg-green-300 hover:bg-green-400 transition-all'>Place Order</button>

        </div>:<div className='text-center text-green-500 text-2xl font-semibold pt-5'>
          
          Empty Card....
          
          </div>}

      </div>


    </div>

      

  )
}

export default Home
