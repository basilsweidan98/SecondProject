import React from 'react'

function Products() {
    return (
        <div className=" gap-3 grid grid-cols-3 mt-5 ml-5">

            <div className="text-center pb-20">
                <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/business-analytics-2230700-1858548.png" className="rounded-full w-32 mb-4 mx-auto bg-gray-200" />
                <h5 className="text-xl font-medium mb-2 ">Retirement Analytics</h5>
                <p className="text-gray-500 mt-4 mb-10 ">Some example use cases lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ante eget mattis quisque id urna quis scelerisque sit.</p>
                <a href='#' className=' text-blue-600 font-bold m-4 mt-5 text-sm '>LEARN MORE</a>
            </div>

            <div class="text-center pb-20">
                <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/life-expectancy-1921161-1620645.png" className="rounded-full w-32 mb-4 mx-auto"/>
                <h5 className="text-xl font-medium  mb-2">Life Expectancy Analytics</h5>
                <p className="text-gray-500 mt-4 mb-10 ">Some example use cases lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ante eget mattis quisque id urna quis scelerisque sit.</p>
                <a href='#' className=' text-blue-600 font-bold m-4 mt-5 text-sm'>LEARN MORE</a>
            </div>


            <div class="text-center pb-20">
                <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/business-analytics-2230700-1858548.png" className="rounded-full w-32 mb-4 mx-auto"/>
                <h5 className="text-xl font-medium mb-2">Health Risk Profile</h5>
                <p className="text-gray-500 mt-4 mb-10 ">Some example use cases lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ante eget mattis quisque id urna quis scelerisque sit.</p>
                <a href='#' className=' text-blue-600 font-bold m-4 mt-5 text-sm'>LEARN MORE</a>
            </div>
        </div>
    )
}

export default Products