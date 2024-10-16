"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";


const HeroSetion = () => {
    return (
        <section >
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='col-span-7 place-self-center text-center sm:text-left justify-self-start'>
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600'>Hello , I&apos;m{" "} </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                'Mahnoor',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Frontend Developer ',
                                1000,
                                'Backend Developer ',
                                1000,
                                'UX/UI Designer',
                                1000
                            ]}
                            wrapper="span"
                            speed={40}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-white text-base sm:text-lg lg:text-xl mb-6'>&apos;Hi! I&apos;m Mahnoor , a full stack developer with a passion for crafting efficient and scalable web applications. I love turning ideas into reality using code and design.&apos;</p>
                    <div>
                        <button className='px-6 py-3 mb-4  w-full sm:w-fit rounded-full bg-white mr-4 bg-gradient-to-br from-primary-500 via-purple-500 to-secondary-500 hover:bg-slate-200 text-white'>Hire Me</button>
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500  via-primary-500 to-secondary-500 hover:bg-slate-800 text-white '>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV </span>
                        </button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='col-span-5 place-self-center mt-6 lg:mt-3 '>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className=' rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                        <Image src="/kulsoom.jpg"
                            className='absolute  transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full '
                            width={400}
                            height={300}

                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSetion
