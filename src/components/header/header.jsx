import React from "react"
function Header() {
    return (
        <>
            <nav class=" border-solid border-gray-200 w-full border-b py-3 bg-[black/20] z-50  ">
                <div class="container mx-auto px-2 ">
                    <div class="w-full flex  flex-col lg:flex-row">
                        <div class=" flex justify-between  lg:flex-row">
                                {/* <img className="mb-2" src="../../../public/icon.png" alt="" width={'100px'}/> */}
                           
                            <button data-collapse-toggle="navbar-with-form" type="button"
                                class="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="navbar-with-form" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>
                                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                        <div class="hidden w-full lg:flex mt-8 lg:mt-0 item-center justify-end lg:pl-11 " id="navbar-with-form">
                            <form class="flex items-center max-lg:justify-center gap-0">
                                <div class="relative">
                                    <input type="search" id="default-search"
                                        class="block w-full max-w-xs px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                                        placeholder="search " required=""/>
                                </div>
                                <button class="p-1 px-2" type="submit">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M21 21L18.5 18.5M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C13.2006 19 15.1937 18.1115 16.6401 16.6736C18.0976 15.2246 19 13.2177 19 11Z"
                                            stroke="black" stroke-width="1.6" stroke-linecap="round"></path>
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header