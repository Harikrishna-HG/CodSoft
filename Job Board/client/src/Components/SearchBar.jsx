import React from 'react'

function SearchBar() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center px-2 py-24 gap-3">
          <input type="text" placeholder='Search for the job' className='border border-gray-900 rounded p-1'/>
          <input type="text" placeholder='Location' className=' border border-gray-900 rounded p-1'/>
          <input type="text" placeholder='Category' className='border border-gray-900 rounded p-1'/>
          <button className='p-2 bg-blue-500 rounded hover:text-white hover:bg-red-500'>Find Job</button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
