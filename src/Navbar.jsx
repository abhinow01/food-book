import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
   const goHome = ()=>{
    navigate('/');
   }
  return (
    <div className='flex justify-center items-center sticky'>
    <div className=' w-4/5 h-auto border border-b rounded-3xl flex flex-row justify-between p-4 m-4 items-center '>
        <div className='text-bold text-lg  '><button onClick={goHome}>Cook's delight</button></div>
        <div className='flex justify-center'>
        <div > <button className='capitalize text-md text-gray-400 p-2 hover:text-zinc-900 '>home</button></div>
        <div > <button className='capitalize text-md text-gray-400 p-2 hover:text-zinc-900'>recipies</button></div>
        <div > <button className='capitalize text-md text-gray-400 p-2 hover:text-zinc-900'>cooking tips</button></div>
        <div > <button className='capitalize text-md text-gray-400 p-2 hover:text-zinc-900 '>About us</button></div>

</div>
<div className='flex justify-center items-center p-2 '>
<div className='p-2 flex items-center'> <button className='flex items-center p-2 bg-stone-400 rounded-lg h-8 w-8'><IoIosSearch /></button></div>
<div><button className='bg-zinc-900 text-white p-2 rounded-lg'>subscribe</button></div>
</div>

    </div>
    </div>
  )
}

export default Navbar