"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const EmailSection = () => {
    const [emailSumbitted, setEmailSumbitted] = useState(false)
    const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        let data = {
            email: (e.target as HTMLFormElement).email.value,
            subject: (e.target as HTMLFormElement).subject.value,
            message: (e.target as HTMLFormElement).message.value,
        }

        let JSONdATA = JSON.stringify(data)
        const endPoint = "/api/send";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSONdATA

        }
        const response = await fetch(endPoint, options);
        const resData = await response.json();
        if (response.status === 200) {
            console.log("message sent");
            (e.target as HTMLFormElement).reset();
            setEmailSumbitted(true)
            JSONdATA = " "
        }
    }


    return (
        <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4' id='contact'>
            <div>
                <h5 className='text-xl font-bold text-white my-2'>Let&apos;s Connect</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    {" "} I&apos;m currently looking for new opportunities , my inbox is always open .
                    wether you have a question or just want to say hi , I&apos;ll try my best
                    to get back to you .!
                </p>
                <div className='socials flex flex-row gap-2 text-white'>
                    <Link href={"https://github.com/Mahnoor-sheikh-23"}>
                        <i className="fa-brands fa-github text-4xl"></i>
                    </Link>
                    <Link href={"https://www.linkedin.com/in/growthmonii/"}>
                        <i className="fa-brands fa-linkedin text-4xl ml-6"></i>
                    </Link>
                    <Link href={"https://www.instagram.com/mahnoor_adnan14/"}>
                        <i className="fa-brands fa-instagram text-4xl ml-6"></i>
                    </Link>
                </div>
            </div>
            <div>
                <form className='flex flex-col ' onSubmit={handleSumbit}>
                    <div className='mb-6'>

                        <label htmlFor='email' className='text-white block mb-2  text-sm font-medium'>
                            Your Email
                        </label>
                        <input type='email'
                            name='email'
                            id='email'
                            required
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full  p-2.5'
                            placeholder='Enter Email.....'

                        />
                    </div>
                    <div className='mb-6'>

                        <label htmlFor='Subject' className='text-white block mb-2  text-sm font-medium'>
                            Subject
                        </label>
                        <input type='text'
                            name='subject'
                            id='Subject'
                            required
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full  p-2.5'
                            placeholder='Just Saying Hi!'

                        />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor='Subject' className='text-white block mb-2  text-sm font-medium'>
                            Message
                        </label>
                        <textarea name='message' id='message'
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full  p-2.5'
                            placeholder="Let's talk about... "
                        />
                    </div>
                    <button
                        type='submit'
                        className='bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'
                    >
                        Send Message
                    </button>
                    {
                        emailSumbitted && (
                            <p className='text-green-500 text-sm mt-2'>Email Sent Successfully !!</p>
                        )
                    }
                </form>
            </div>
        </section>
    )
}
export default EmailSection
