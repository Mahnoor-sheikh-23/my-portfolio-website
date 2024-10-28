import React from 'react'
import EmailSection from '../components/EmailSection'

function page() {
    return (
        <div>
            <div>
                <div className='bg-[#121212] h-[100vh] flex-col justify-center mt-[100px] p-7 '>
                    <h2 className='text-4xl font-bold text-white mb-4 justify-center text-center'>Contact Me</h2>
                    <EmailSection />
                </div>
            </div>
        </div>
    )
}

export default page
