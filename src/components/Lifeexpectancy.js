import React from 'react'

function Lifeexpectancy() {
    return (
        <div className=' grid  grid-cols-2 mt-20'>
            <div>
                <p className=' ml-6 text-6xl w-1/3 font-bold text-stone-900'>Life expectancy <span className='text-slate-400'>algorithm</span></p>
            </div>

            <div>
                <p className=' w-3/2 mr-8 font-sans text-gray-600 mb-14'>PruScore Alpha is an algorithm that is utilised at present within Prudential to predict life expectancy for their Life products. The algorithm has further commercial benefits across other Prudential business lines, as well as opportunities to commercialize to the external market as a product.</p>
                <a href="#" className='bg-yellow-400 rounded font-bold mr-4 text-black text-xs font-sans p-2'>Learn More</a>

            </div>


        </div>
    )
}

export default Lifeexpectancy