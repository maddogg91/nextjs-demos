"use client"

function NavFunction()
{
    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-100 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <img src="/toplogo.png" className="h-26" alt="Maddogg Software Logo"/>
            </div>
            <div className="block lg:hidden">
                <button
                    className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <a href="/"
                       className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-white mr-4">
                        Home
                    </a>
                    <a href="/register"
                       className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-white mr-4">
                        Get Started
                    </a>
                    <a href="/login"
                       className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-white">
                        Login
                    </a>
                </div>
                <div>
                    <a href="/contact"
                       className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-white-500 hover:bg-yellow mt-4 lg:mt-0">Schedule A Consultation Today</a>
                </div>
            </div>
        </nav>

    )
}

export default NavFunction;