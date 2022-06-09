import React from 'react'

function Footer() {
    return (

        <footer class="bg-gray-800 ">
            <div className='py-2 px-10 bg-gray-800 md:flex md:items-center md:justify-between border-b '>
                <dev className="flex gap-2 ">
                    <a href="#" className='rounded border-0 hover:bg-yellow-400  hover:text-black text-xs text-white font-semibold p-2 '>Research</a>
                    <a href="#" className='rounded hover:bg-yellow-400 hover:text-black text-xs text-white  font-semibold p-2 '>Use Cases</a>
                    <a href="#" className='rounded hover:bg-yellow-400 hover:text-black text-xs text-white  font-semibold p-2 '>About</a>
                    <a href="#" className='rounded hover:bg-yellow-400 hover:text-black text-xs text-white  font-semibold p-2 '>News </a>
                    <a href="#" className='rounded hover:bg-yellow-400 hover:text-black text-xs text-white  font-semibold p-2 '>Contact</a>
                </dev>

            </div>
            <div class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
                <div>
                    <div className="grow text-left text-white pt-5 text-2xl ml-8 rounded-md  font-medium">Prudential </div>
                    <div className="flex space-x-2 mt-5 ml-3 pl-5 w-4">
                        <a href="#!" role="button" className="border rounded-full p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5" >
                                <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                            </svg>
                        </a>

                        <a href="#!" role="button " className="border rounded-full p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-5 h-5">
                                <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                            </svg>
                        </a>
                        <a href="#!" role="button" className="border rounded-full p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="w-5 h-5" >
                                <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                            </svg>
                        </a>

                    </div>
                </div>
                <div>
                    <h2 class="mb-6  text-sm font-semibold text-white uppercase">Prudential</h2>
                    <ul class="text-gray-300">
                        <li class="mb-4">
                            <a href="#" class="hover:underline">About</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" class="hover:underline">News</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" class="hover:underline">Investor relations</a>
                            </li><a href="#" class="hover:underline">
                        </a><li class="mb-4"><a href="#" class="hover:underline">
                        </a><a href="#" class="hover:underline">Corporate Responsibility</a>
                        </li>
                        <li class="mb-4"><a href="#" class="hover:underline">
                        </a><a href="#" class="hover:underline">Careers</a>
                        </li>
                        <li class="mb-4"><a href="#" class="hover:underline">
                        </a><a href="#" class="hover:underline">Help & Support</a>
                        </li>
                        <li class="mb-4"><a href="#" class="hover:underline">
                        </a><a href="#" class="hover:underline">Forms</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6  text-sm font-semibold text-white uppercase">Prudential</h2>
                    <ul class="text-gray-300">
                        <li class="mb-4">
                            <a href="#" class="hover:underline">About</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" class="hover:underline">News</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" class="hover:underline">Investor relations</a>
                            </li><a href="#" class="hover:underline">
                        </a><li class="mb-4"><a href="#" class="hover:underline">
                        </a><a href="#" class="hover:underline">Corporate Responsibility</a>
                        </li>
                        <li class="mb-4"><a href="#" class="hover:underline">
                        </a><a href="#" class="hover:underline">Careers</a>
                        </li>
                        <li class="mb-4"><a href="#" class="hover:underline">
                        </a><a href="#" class="hover:underline">Help & Support</a>
                        </li>
                        <li class="mb-4"><a href="#" class="hover:underline">
                        </a><a href="#" class="hover:underline">Forms</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6  text-sm font-semibold text-white uppercase">Prudential</h2>
                    <ul class="text-gray-300">
                        <li class="mb-4">
                            <a href="#" class="hover:underline">About</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" class="hover:underline">News</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" class="hover:underline">Investor relations</a>
                            </li><a href="#" class="hover:underline">
                        </a><li class="mb-4"><a href="#" class="hover:underline">
                        </a><a href="#" class="hover:underline">Corporate Responsibility</a>
                        </li>
                        <li class="mb-4"><a href="#" class="hover:underline">
                        </a><a href="#" class="hover:underline">Careers</a>
                        </li>
                        <li class="mb-4"><a href="#" class="hover:underline">
                        </a><a href="#" class="hover:underline">Help & Support</a>
                        </li>
                        <li class="mb-4"><a href="#" class="hover:underline">
                        </a><a href="#" class="hover:underline">Forms</a>
                        </li>
                    </ul>
                </div>

            </div>
            <div class="py-2 px-10 bg-gray-800 md:flex md:items-center md:justify-between border-t">
                <span class="text-sm text-gray-300 sm:text-center">© 2022 <a href="https://flowbite.com">Prudential Financial, Inc. and its related entities.</a>
                </span>
               
            </div>
        </footer>

    )
}

export default Footer