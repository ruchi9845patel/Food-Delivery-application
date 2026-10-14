import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { DecrementQty, IncrementQty, RemoveItem } from '../redux/cartSlice';

const Card2 = ({name,id,price,image,qty}) => {
let dispatch=useDispatch()

  return (
    <div className='w-full h-[120px] shadow-lg flex justify-between'>
      <div className='w-[60%] h-full flex gap-[20px]'>
        <div className='w-[60%] h-full overflow-hidden'>
            <img src={image} alt="momo" className='object-cover rounded-lg' />
        </div>
        <div className='w-[40%] flex h-full flex-col gap-3' >
            <div className='text-gray-600 font-semibold text-lg'>
                {name}
            </div>
            <div className='w-[110-px] h-[50px] bg-slate-400 text-xl rounded-lg overflow-hidden shadow-lg flex font-semibold border-2 text-green-400'>
                <button onClick={()=>{qty>1?dispatch(DecrementQty(id)):1}} className='bg-white h-full w-[30%] flex justify-center items-center  hover:bg-gray-100'>-</button>
                <span className='bg-slate-200 flex justify-center items-center h-full w-[60%]'>{qty}</span>
                <button onClick={()=>{dispatch(IncrementQty(id))}} className='bg-white h-full w-[30%] flex justify-center items-center hover:bg-gray-100'>+</button>
            </div>
        </div>
      </div>
      <div className='flex flex-col items-end gap-6'>
        <span className='text-xl text-green-400 font-semibold'>₹ {price} /-</span>
        <RiDeleteBin6Line onClick={()=>dispatch(RemoveItem(id))} className='cursor-pointer w-[30px] h-[30px] text-red-500'/>
      </div>
    </div>
  )
}

export default Card2
