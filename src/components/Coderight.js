import React from 'react'
import Tools from './Tools'
function Coderight() {
    return (

        <div className=' grid grid-rows-2 text-left '>
            <div>
                <h2 className=' font-bold mt-9 w-4/5 text-3xl'>The world’s most powerful and easy-to-use APIs</h2>
                <p className="text-gray-500 mt-5 mb-10 ">We agonise over the right abstractions so your teams don’t need to stitch together disparate systems or spend months integrating payments functionality.</p>
                <a href="#" className='bg-yellow-400 rounded font-bold text-black text-xs font-sans p-2'>Read documentation</a>

            </div>

            <div>
                <div className="grid grid-rows-2">
                <Tools/>
                <Tools/>
                

                </div>
            </div>
        </div>
    )
}

export default Coderight