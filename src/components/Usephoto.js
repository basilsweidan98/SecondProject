import React from 'react'

function Usephoto() {
    return (

        <div className=" gap-3 grid grid-cols-3 mt-5">

            <div className=' border rounded pb-6'>
                
                    <img src="https://alldaychic.com/wp-content/uploads/2022/06/learning-management-software-2.jpg" className=' rounded' />
                    <h3 className=' font-bold m-4'>Wealth Management</h3>
                    <p className=' text-sm text-left m-4 text-slate-500 '>PruScore can help make it personalized with more precise lifespan for the individual and family</p>
              
                <a href='#' className=' text-blue-600 font-bold m-4 mt-5 text-sm'>LEARN MORE</a>
            </div>

            <div className=' border rounded'>
                <div>
                    <img src="https://alldaychic.com/wp-content/uploads/2022/06/learning-management-software-2.jpg" className=' rounded' />
                    <h3 className=' font-bold m-4'>Wellness</h3>
                    <p className=' text-sm text-left m-4 text-slate-500'>PruScore combined with a wellness app can provide for incorporating wellness into insurance products</p>
                    <a href='#' className=' text-blue-600 font-bold m-4 mt-5 text-sm'>LEARN MORE</a>

                </div>
            </div>

            <div className=' border rounded'>
                <img src="https://alldaychic.com/wp-content/uploads/2022/06/learning-management-software-2.jpg" className=' rounded' />
                <h3 className=' font-bold m-4'>Wealth Management</h3>
                <p className=' text-sm text-left m-4 text-slate-500 '>PruScore combined with a health tracking device app can provide for precise planning of cashflows</p>
                <a href='#' className=' text-blue-600 font-bold m-4 mt-5 text-sm'>LEARN MORE</a>
            </div>

        </div>


    )
}

export default Usephoto