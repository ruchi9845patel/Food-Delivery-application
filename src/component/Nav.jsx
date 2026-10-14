import React, { useContext } from 'react'
import { useEffect } from 'react';
import { IoFastFoodOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from '../context/UserContext';
import { food_items } from '../Food';

import { useSelector } from 'react-redux';


const Nav = () => {
   let {input,setInput,cate, setCate,showCart,setShowCart}=useContext(dataContext)
   
   useEffect(()=>{
    console.log(input);
    let newlist= food_items.filter((item)=>item.food_name.toLowerCase().includes(input.toLowerCase()));
    console.log(newlist);
    setCate(newlist)
   },[input])

let items=useSelector(state=>state.cart)


    return (
        <div className='w-full h-[100px] flex justify-between items-center px-5
        md:px-8 '>
            <div className='w-[60px] h-[60px] bg-white flex justify-center items-center shadow-xl rounded-md'>
                <IoFastFoodOutline className='w-[30px] h-[30px] text-green-500' />

            </div>
            <form onSubmit={(e)=>e.preventDefault()} className='w-[45%] h-[60px] bg-white flex items-center rounded-md shadow-md px-5 gap-5 md:w-[70%]'>
                <FaSearch className='text-green-500 w-[20px] h-[20px] '/>
                <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" className='w-[100%] outline-none text-[16px] md:text-[20px]' placeholder='search item...' />
            </form>
            <div className='w-[60px] h-[60px] bg-white flex justify-center items-center relative rounded-md shadow-xl' onClick={()=>{
                setShowCart(true)
            }}> 

                <span className='absolute top-0 font-semibold text-[18px] right-2 cursor-pointer text-green-500'>{items?.length
                    }</span>
                <LuShoppingBag className='w-[30px] h-[30px] text-green-500 '/>

            </div>
        </div>
    )
}

export default Nav
