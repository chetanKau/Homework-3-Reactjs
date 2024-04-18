import React from 'react'

const Body = () => {
    return (
        <div className='mx-3'>

            <div className=' flex items-center justify-center   bg-slate-100'>
                <img src='https://img.freepik.com/premium-photo/painting-family-sitting-blanket-park_14117-20706.jpg'
                    alt='img'
                    className='h-screen  w-screen mx-3 my-3' />
            </div>
            <div className='bg-red-700 h-56 flex justify-center flex-col gap-4 '>
                <h1 className='text-white text-4xl'>Think Health. Think Massage</h1>
                <p className='text-white'>We are open <span className='italic'>9 to 6 pm; </span> Monday through Sunday.If You would like
                    to appointment with us, please call us at - 988000900878</p>
            </div>
            <div className='flex flex-col  justify-center gap-8 items-start h-60 mx-3'>
                <p className='text-red-600'>
                    Now that you've got a firm grasp on all the main keys of your keyboard, you will put them all together for some short paragraphs.
                </p>

                <p> A paragraph is a group of sentences that are related to each other.
                    A paragraph is usually made up of three or more sentences, but it can also be made up of only one sentence.
                    Paragraphs are used to organize text and make it easier to read.</p>

                <p>Always do your best to keep your eyes on the screen, using your fingers' memory to know where to move your fingers!</p>
            </div>

            <div className='bg-gray-400 h-1 my-2'>
                <hr />
            </div>



            <div>

                <h1 className='font-sans font-bold text-red-700'>Family wellness Massage Therapy</h1>
                <p>9076 Main street, suite 123, Mainland, ML12345</p>
                <p>Phone : 9384775489</p>
            </div>


        </div>
    )
}

export default Body
