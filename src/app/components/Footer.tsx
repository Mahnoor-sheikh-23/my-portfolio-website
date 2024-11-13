import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
            <div className='container p-12 flex justify-between'>
                <span className='sm:text-5xl'>
                    Mahnoor
                </span>
                <p className='text-slate-600 text-sm pl-14 sm:text-3xl'>All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer