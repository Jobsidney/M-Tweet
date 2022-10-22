import React from 'react'
import Button from './Button'
import LogoImage from './LogoImage'

function NavBar() {
  return (
    <div className='flex flex-row items-center '>
      <LogoImage/>
      <div>
        <div className='border w-fit rounded-lg '>
          <form>
            <input className='' type="text" placeholder='search...' />
          </form>
        </div>
      </div>
      <div className='flex '>
        <Button word={'Login'} classN={'Button1'}/>
        <Button word={'Register'} classN={'Button2'}/>
      </div>
    </div>
  )
}

export default NavBar
