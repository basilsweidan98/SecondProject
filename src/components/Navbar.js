import React from 'react'

function Navbar() {
    return (
        <dev className="flex gap-2 ">
            <div className="grow text-left text-white pt-5 text-2xl ml-8 rounded-md  font-medium">Prudential </div>
            <a href="#" className='rounded border-0 hover:bg-yellow-400  hover:text-black text-xs text-white mt-3 font-semibold p-2 '>Research</a>
            <a href="#" className='rounded hover:bg-yellow-400 hover:text-black text-xs text-white mt-3  font-semibold p-2 '>Use Cases</a>
            <a href="#" className='rounded hover:bg-yellow-400 hover:text-black text-xs text-white mt-3  font-semibold p-2 '>About</a>
            <a href="#" className='rounded hover:bg-yellow-400 hover:text-black text-xs text-white mt-3  font-semibold p-2 '>News </a>
            <a href="#" className='rounded hover:bg-yellow-400 hover:text-black text-xs text-white mt-3  font-semibold p-2 '>Contact</a>
            <a href="#" className='bg-yellow-400 rounded  mt-3 mr-4 text-black text-xs font-semibold p-2'>Request demo</a>
        </dev>)
}

export default Navbar