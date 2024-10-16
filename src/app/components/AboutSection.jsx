"use client";
import { useState, useTransition } from 'react';
import React  from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const Tab_Data = [
    {
        title:"skills",
        id:"skills",
        content:(
            <ul className='list-disc pl-2'>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>TailwindCss</li>
                <li>React</li>
                <li>Next.js</li>
            </ul>
        )
    },{
        title:"Education",
        id:"Education",
        content:(
            <ul  className='list-disc pl-2'>
                <li>FullStack Academy Of Code </li>
                <li>Khadija College,Computer Science Student</li>
            </ul>
        )

    },{
        title:"Experience",
        id:"Experience",
        content :(
            <ul  className='list-disc pl-2'>
                <li>InternShip At Code Alpha </li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab , setTab] = useState("Education");
    const [isPending , startTransitions ] = useTransition();

    const handleTabChange = (id)=>{
        startTransitions(()=>{
            setTab(id);
        })
    }

    return (
        <section className='text-white' id='about'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16 '>
                <Image src="/computer.avif" 
                className='rounded-lg'
                    width={500}
                    height={500}
                />
                <div className='mt-4  md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>I am a full stack web developer with a passion for creating interactive and responsive web 
                    applications . I have experience working with Javascript , Typescript , React , HTML , CSS , Next.js ,
                    Bootstrap , Tailwindcss and Git . I am a quick learner and I am always looking to expand my knowledge and skills
                    set. I am a team player and I am excited to working with others to create amazing applications.
                      </p>
                        <div className='flex justify-start flex-row mt-8'>
                        <TabButton selectTab={()=>handleTabChange("skills")} active={tab === "skills"}>
                            {" "} Skills{" "}
                        </TabButton>
                        <TabButton selectTab={()=>handleTabChange("Education")} active={tab === "Education"}>
                            {" "} Education{" "}
                        </TabButton>
                        <TabButton selectTab={()=>handleTabChange("Experience")} active={tab === "Experience"}>
                            {" "} Experience{" "}
                        </TabButton>                          
                        </div>
                        <div className='mt-8 '>
                            {Tab_Data.find((t)=> t.id === tab).content}
                        </div>
                </div>

            </div>
        </section>
    )
}

export default AboutSection
