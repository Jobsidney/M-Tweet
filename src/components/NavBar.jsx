import React from 'react'
import Button from './Button'
import LogoImage from './LogoImage'
import * as Fa from "react-icons/fa";

function NavBar({user}) {
  return (
    <div className='grid grid-cols-[440px,840px,440px] gap-4 justify-center items-center mx-1'>
      <LogoImage/>
      <div className='flex flex-row justify-end'>
        <div className='border w-full rounded-lg search '>
          <form>
            <input className='outline-none bg-[#F1F5FF] w-full text-lg  text-gray-500 placeholder-gray-500' type="text" placeholder='Search . . .' />
          </form>
        </div>
      </div>
      {
        user ? 
        <div id="user" className='flex flex-row items-center justify-end space-x-4 text-[#696767] text-xl'>
        <Fa.FaBell/>
        <Fa.FaBell/>
        <div className='flex flex-row items-center'>
          <img className='w-14 rounded-full h-14 object-cover' src="https://media.istockphoto.com/photos/portrait-concept-picture-id1016761216?k=20&m=1016761216&s=612x612&w=0&h=jEC8voGLjSyhdOO7EMQyrLtZ9m--TEUmd4X56sqyZk0=" alt="" />
          <Fa.FaAngleDown className='cursor-pointer'/>
        </div>
      </div>
      :
      <div className='flex flex-row'>
      <Button word={'Login'} classN={'Button1'}/>
      <Button word={'Register'} classN={'Button2'}/>
    </div>
      }

     
    </div>
  )
}

export default NavBar
