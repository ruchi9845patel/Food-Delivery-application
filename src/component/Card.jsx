import React from 'react';
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cartSlice';


const Card = ({ name, image, id, price, type }) => {
  let dispatch = useDispatch()
  return (
    <div className='w-[300px] w-[400px] bg-white p-4 rounded-lg hover:border-2 border-green-300
     flex flex-col gap-3'>
      <div className='w-full h-56 overflow-hidden shadow-lg '>
        <img src={image} alt="image" className='object-cover w-full h-full rounded-lg' />
      </div>
      <div className='text-2xl font-semibold '>{name}</div>
      <div className=' w-full justify-between flex items-center'>
        <div className='text-lg font-bold text-green-400'>{price}</div>
        <div className='flex justify-center items-center gap-2 text-green-400 text-lg font-semibold'>
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}
          <span>{type}</span></div>
      </div>

      <button className='w-full p-3 rounded-lg text-gray-900 bg-green-300 hover:bg-green-400 transition-all' onClick={() => dispatch(AddItem({ id: id, name: name, price: price, image: image, qty: 1 }))}>Add to dish</button>

    </div>
  )
}

export default Card
