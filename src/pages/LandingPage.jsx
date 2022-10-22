import React from 'react'
import NavBar from '../components/NavBar'
import * as Io from "react-icons/io"

function LandingPage() {

  function ListItem({word,path,icon}){
    return(
      <li onClick={path} className='flex flex-row  text-[1.3rem] text-gray-700 font-semibold  w-full px-4 py-2 rounded-lg hover:bg-[#3080ED] hover:text-white'>
        {icon}{word}
      </li>
    )
  }
  return (
    <div className='mx-3'>
      <NavBar/>
      <section id="body" className='grid grid-cols-[440px,940px,440px] justify-between gap-3 mt-4 '>
        <section id="leftBar" className='w-[440px] h-[90vh] bg-[#e3ebfa] rounded-xl flex flex-col justify-between py-10'>
          <ul className='px-10  space-y-2'>
            <ListItem word={'Home'} icon={<Io.IoIosHome  size={24}/>}/>
            <ListItem word={'Subscribe'} icon={<Io.IoIosList size={24}/>}/>
          </ul>
          
          <div>
            <p>
            Join Us to have more fun. Create an account,subscribe to gain access to more fun content. 
            </p>

          </div>

        </section>
        <section id='middle' className='bg-blue-900 '>

        </section>
        <section id="leftBar" className=' h-[90vh] bg-[#e3ebfa] rounded-xl'>

        </section>
      </section>
    </div>
  )
}

export default LandingPage
