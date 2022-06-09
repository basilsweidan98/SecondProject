import React from 'react'

function Readycontainer() {
    return (
        <div className='bg-slate-100 text-center  mt-10'>
            <div className=' w-full flex justify-center'>
                <div className='inline-block w-1/2'>
                    <p className=' justify-center text-3xl m-10 mb-6'>Ready to <span className='font-bold text-4xl'>Get Started?</span></p>
                    <p className='text-gray-500 '>Some example use cases lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ante eget mattis quisque id urna quis scelerisque sit.</p>

                    <div className='flex justify-center mt-10 mb-10 gap-3'>
                        <a href="#" className='bg-yellow-400 rounded font-bold text-black p-2'>Request demo</a>
                        <a href="#" className='hover:bg-yellow-400 rounded font-bold text-black p-2'>Contact sales</a>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Readycontainer

