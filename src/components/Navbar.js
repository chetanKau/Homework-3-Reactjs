import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='flex flex-col items-start pl-4'>
                <h1 className='font-serif text-4xl text-red-500	'> Family Wellness</h1>
                <p className='font-serif'>MASSAGE THERAPY</p>
            </div>


            <div className='flex flex-row justify-between mx-3 mt-2 h-12  bg-slate-500 '>

                <div className='flex items-center justify-center w-1/5 bg-red-500 cursor-pointer text-white '>
                    HOME
                </div >
                <div className='flex items-center justify-center w-1/5 cursor-pointer text-white hover:bg-sky-800'>
                    ABOUT
                </div>
                <div className='flex items-center justify-center w-1/5 cursor-pointer text-white hover:bg-sky-800'>
                    SERVICE
                </div>
                <div className='flex items-center justify-center w-1/5 cursor-pointer text-white hover:bg-sky-800'>
                    FAQ
                </div>
                <div className='flex items-center justify-center w-1/5 cursor-pointer text-white hover:bg-sky-800'>
                    CONTACT
                </div>
            </div>

        </>
    )
}

export default Navbar
