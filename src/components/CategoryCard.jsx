import React from 'react'

function CategoryCard() {
  return (
        <div className='flex flex-row items-center space-x-2 md:space-x-5'>
            <img className='h-16 rounded-xl ' src="https://manofmany.com/wp-content/uploads/2019/04/David-Gandy-1200x800.jpg" alt="" />
            <h2 className='font-bold text-xl text-gray-500'>Dev Ops</h2>
        </div>
  )
}

export default CategoryCard
